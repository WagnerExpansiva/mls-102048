/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';

import type { IOrderRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IDailyShiftRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { IStockLevelRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { IOrderStatusEventRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';

import type { Order, OrderType } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { validateOrderInvariants } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { DailyShift } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import type { StockLevel } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';
import { deriveStockLevelStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';
import type { OrderItem } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';
import { orderItemIsValid } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';
import type { OrderStatusEvent } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

export interface LaunchOrderItemInput {
  menuItemId: string;
  quantity: number;
  observations?: string;
}

export interface LaunchOrderInput {
  type: string;
  tableId?: string;
  dailyShiftId: string;
  items: LaunchOrderItemInput[];
}

export interface LaunchOrderOutput {
  orderId: string;
  status: string;
  total: number;
}

export async function launchOrder(ctx: RequestContext, input: LaunchOrderInput): Promise<LaunchOrderOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');
  const orderStatusEvents = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');

  const now = ctx.clock.nowIso();

  // 1. Validate daily shift is open
  const shift: DailyShift | null = await dailyShifts.getById(input.dailyShiftId);
  if (!shift) {
    throw new AppError('NOT_FOUND', `DailyShift not found: ${input.dailyShiftId}`, 404, { dailyShiftId: input.dailyShiftId });
  }
  if (shift.status !== 'open') {
    throw new AppError('CONFLICT', `DailyShift is not open (current status: ${shift.status}).`, 409, { dailyShiftId: input.dailyShiftId, status: shift.status });
  }

  // 2. Validate order type
  const orderType: OrderType = input.type as OrderType;
  if (orderType !== 'dineIn' && orderType !== 'takeout') {
    throw new AppError('VALIDATION_ERROR', `Invalid order type: ${input.type}. Must be 'dineIn' or 'takeout'.`, 400, { type: input.type });
  }

  // 3. Validate table for dineIn
  let tableId: string | null = null;
  if (orderType === 'dineIn') {
    if (!input.tableId) {
      throw new AppError('VALIDATION_ERROR', "tableId is required when type is 'dineIn'.", 400, { ruleId: 'orderTableConsistency' });
    }
    const tableDoc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!tableDoc) {
      throw new AppError('NOT_FOUND', `MDM record not found: ${input.tableId}`, 404, { mdmId: input.tableId });
    }
    if (tableDoc.details.status !== 'Active') {
      throw new AppError('CONFLICT', `Table is not active (status: ${tableDoc.details.status}).`, 409, { tableId: input.tableId, status: tableDoc.details.status });
    }
    tableId = input.tableId;
  }

  // 4. Validate items and read MenuItem MDM refs
  if (!input.items || input.items.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'Order must have at least one item.', 400, { ruleId: 'orderRequiresItem' });
  }

  const resolvedItems: Array<{
    menuItemId: string;
    quantity: number;
    unitPrice: number;
    observations: string | null;
    stockItemId: string | null;
  }> = [];

  for (const item of input.items) {
    if (item.quantity <= 0) {
      throw new AppError('VALIDATION_ERROR', `Item quantity must be > 0 (menuItemId: ${item.menuItemId}).`, 400, { menuItemId: item.menuItemId, quantity: item.quantity });
    }

    const menuItemDoc = await ctx.data.mdmDocument.get({ mdmId: item.menuItemId });
    if (!menuItemDoc) {
      throw new AppError('NOT_FOUND', `MDM record not found: ${item.menuItemId}`, 404, { mdmId: item.menuItemId });
    }
    if (menuItemDoc.details.status !== 'Active') {
      throw new AppError('CONFLICT', `MenuItem is not active (status: ${menuItemDoc.details.status}).`, 409, { menuItemId: item.menuItemId, status: menuItemDoc.details.status });
    }

    const menuItemDetails = menuItemDoc.details as Record<string, unknown>;
    const unitPrice = (menuItemDetails.price as number) ?? 0;
    const stockItemId = (menuItemDetails.stockItemId as string | undefined) ?? null;

    resolvedItems.push({
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      unitPrice,
      observations: item.observations ?? null,
      stockItemId,
    });
  }

  // 5. Apply stockConsumptionRule and calculate total — inside transaction
  const orderId = ctx.idGenerator.newId();
  let total = 0;

  const orderItems: OrderItem[] = resolvedItems.map((it) => {
    const orderItemId = ctx.idGenerator.newId();
    total += it.unitPrice * it.quantity;
    return {
      orderItemId,
      orderId,
      menuItemId: it.menuItemId,
      quantity: it.quantity,
      unitPrice: it.unitPrice,
      observations: it.observations,
      createdAt: now,
      updatedAt: now,
    };
  });

  // Validate each order item
  for (const oi of orderItems) {
    if (!orderItemIsValid(oi)) {
      throw new AppError('VALIDATION_ERROR', `OrderItem is invalid (menuItemId: ${oi.menuItemId}).`, 400, { orderItemId: oi.orderItemId });
    }
  }

  // Build the order aggregate
  const order: Order = {
    orderId,
    type: orderType,
    status: 'pending',
    total,
    tableId,
    dailyShiftId: input.dailyShiftId,
    createdAt: now,
    updatedAt: now,
  };

  // Validate order invariants
  const violations = validateOrderInvariants(order);
  if (violations.length > 0) {
    throw new AppError('VALIDATION_ERROR', `Order invariant violations: ${violations.join('; ')}`, 400, { violations });
  }

  // Build the OrderStatusEvent
  const statusEvent: OrderStatusEvent = {
    orderStatusEventId: ctx.idGenerator.newId(),
    orderId,
    previousStatus: null,
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  };

  // 6. Execute everything in a transaction
  await ctx.data.runInTransaction(async (tx) => {
    // Resolve repositories bound to the transaction runtime
    const txOrders = resolveRepository<IOrderRepository>({ ...ctx, data: tx }, 'Order');
    const txStockLevels = resolveRepository<IStockLevelRepository>({ ...ctx, data: tx }, 'StockLevel');
    const txOrderStatusEvents = resolveRepository<IOrderStatusEventRepository>({ ...ctx, data: tx }, 'OrderStatusEvent');

    // Apply stock consumption for items with stockItemId
    const stockUpdates: StockLevel[] = [];
    for (const ri of resolvedItems) {
      if (!ri.stockItemId) continue;

      const stockLevel = await txStockLevels.list({ stockItemId: ri.stockItemId });
      const current = stockLevel.length > 0 ? stockLevel[0] : null;

      if (!current) {
        throw new AppError('NOT_FOUND', `StockLevel not found for stockItemId: ${ri.stockItemId}`, 404, { stockItemId: ri.stockItemId });
      }

      if (current.currentQuantity < ri.quantity) {
        throw new AppError('CONFLICT', `Insufficient stock for stockItemId ${ri.stockItemId}: available ${current.currentQuantity}, requested ${ri.quantity}.`, 409, {
          stockItemId: ri.stockItemId,
          available: current.currentQuantity,
          requested: ri.quantity,
          ruleId: 'stockConsumptionRule',
        });
      }

      const newQuantity = current.currentQuantity - ri.quantity;
      const newStatus = deriveStockLevelStatus(newQuantity, current.minQuantity);

      const updated: StockLevel = {
        ...current,
        currentQuantity: newQuantity,
        status: newStatus,
        updatedAt: now,
      };

      stockUpdates.push(updated);
    }

    // Save order
    await txOrders.save(order);

    // Save stock level updates
    for (const sl of stockUpdates) {
      await txStockLevels.save(sl);
    }

    // Append the status event
    await txOrderStatusEvents.append(statusEvent);
  });

  return {
    orderId,
    status: 'pending',
    total,
  };
}
