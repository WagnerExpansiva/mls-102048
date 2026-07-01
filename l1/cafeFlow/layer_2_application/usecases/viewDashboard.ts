/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IDailyShiftRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { IOrderRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderItemRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { DailyShift } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import type { Order, OrderStatus, OrderType } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderItem } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

export interface ViewDashboardInput {
  dailyShiftId: string;
}

export interface ViewDashboardOutput {
  dailyShiftId: string;
  date: string;
  status: string;
  openTime: string;
  closeTime?: string;
  totalSales: number;
  orderCount: number;
  pendingOrders: number;
  preparingOrders: number;
  readyOrders: number;
  deliveredOrders: number;
  paidOrders: number;
  cancelledOrders: number;
  dineInOrders: number;
  takeoutOrders: number;
  totalOrderItems: number;
  orders?: string;
}

interface OrderSummary {
  orderId: string;
  type: OrderType;
  status: OrderStatus;
  total: number;
  itemCount: number;
}

export async function viewDashboard(ctx: RequestContext, input: ViewDashboardInput): Promise<ViewDashboardOutput> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const ordersRepo = resolveRepository<IOrderRepository>(ctx, 'Order');
  const orderItemsRepo = resolveRepository<IOrderItemRepository>(ctx, 'OrderItem');

  // 1. Load the DailyShift by dailyShiftId
  const shift: DailyShift | null = await dailyShifts.getById(input.dailyShiftId);
  if (!shift) {
    throw new AppError('NOT_FOUND', `DailyShift not found: ${input.dailyShiftId}`, 404, { dailyShiftId: input.dailyShiftId });
  }

  // 2. Query all Orders for the given dailyShiftId
  const orders: Order[] = await ordersRepo.list({ dailyShiftId: input.dailyShiftId });

  // 3. Aggregate counters
  let pendingOrders = 0;
  let preparingOrders = 0;
  let readyOrders = 0;
  let deliveredOrders = 0;
  let paidOrders = 0;
  let cancelledOrders = 0;
  let dineInOrders = 0;
  let takeoutOrders = 0;
  let totalOrderItems = 0;

  const orderSummaries: OrderSummary[] = [];

  for (const order of orders) {
    // Count by status
    switch (order.status) {
      case 'pending':
      case 'sent_to_kitchen':
        pendingOrders++;
        break;
      case 'preparing':
        preparingOrders++;
        break;
      case 'ready':
        readyOrders++;
        break;
      case 'delivered':
        deliveredOrders++;
        break;
      case 'paid':
        paidOrders++;
        break;
      case 'cancelled':
        cancelledOrders++;
        break;
    }

    // Count by type
    if (order.type === 'dineIn') {
      dineInOrders++;
    } else if (order.type === 'takeout') {
      takeoutOrders++;
    }

    // Query OrderItems for this order to compute item count and total quantity
    const items: OrderItem[] = await orderItemsRepo.listByOrderId(order.orderId);
    const itemQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    totalOrderItems += itemQuantity;

    orderSummaries.push({
      orderId: order.orderId,
      type: order.type,
      status: order.status,
      total: order.total,
      itemCount: items.length,
    });
  }

  // 4. Build the dashboard output
  const output: ViewDashboardOutput = {
    dailyShiftId: shift.dailyShiftId,
    date: shift.date,
    status: shift.status,
    openTime: shift.openTime,
    closeTime: shift.closeTime ?? undefined,
    totalSales: shift.totalSales,
    orderCount: orders.length,
    pendingOrders,
    preparingOrders,
    readyOrders,
    deliveredOrders,
    paidOrders,
    cancelledOrders,
    dineInOrders,
    takeoutOrders,
    totalOrderItems,
    orders: JSON.stringify(orderSummaries),
  };

  return output;
}
