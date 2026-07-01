/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderStatusEventRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { Order, OrderStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderStatusEvent } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

export interface ProcessPaymentInput {
  orderId: string;
  amountPaid: number;
  paymentMethod?: string;
}

export interface ProcessPaymentOutput {
  orderId: string;
  status: string;
  total: number;
}

export async function processPayment(ctx: RequestContext, input: ProcessPaymentInput): Promise<ProcessPaymentOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const events = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');
  const now = ctx.clock.nowIso();

  // Load the Order aggregate
  const order = await orders.getById(input.orderId);

  // ORDER_MUST_EXIST
  if (!order) {
    throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
  }

  // ORDER_STATUS_MUST_ALLOW_PAYMENT — only 'delivered' can transition to 'paid' per domain transitions
  if (!canTransitionOrder(order.status, 'paid' as OrderStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Order status "${order.status}" does not allow payment. Only orders in "delivered" status can be paid.`,
      400,
      { ruleId: 'ORDER_STATUS_MUST_ALLOW_PAYMENT', currentStatus: order.status },
    );
  }

  // AMOUNT_PAID_MUST_MATCH_TOTAL
  if (input.amountPaid !== order.total) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Amount paid (${input.amountPaid}) does not match order total (${order.total}).`,
      400,
      { ruleId: 'AMOUNT_PAID_MUST_MATCH_TOTAL', amountPaid: input.amountPaid, orderTotal: order.total },
    );
  }

  const previousStatus: OrderStatus = order.status;
  const newStatus: OrderStatus = 'paid';

  const updatedOrder: Order = {
    ...order,
    status: newStatus,
    updatedAt: now,
  };

  const eventRecord: OrderStatusEvent = {
    orderStatusEventId: ctx.idGenerator.newId(),
    orderId: order.orderId,
    previousStatus,
    status: newStatus,
    createdAt: now,
    updatedAt: now,
  };

  // Multi-aggregate write: save order + append event in the same transaction
  await ctx.data.runInTransaction(async () => {
    await orders.save(updatedOrder);
    await events.append(eventRecord);
  });

  return {
    orderId: updatedOrder.orderId,
    status: updatedOrder.status,
    total: updatedOrder.total,
  };
}
