/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderStatusEventRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { Order, OrderStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderStatusEvent } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

const VALID_STATUSES: OrderStatus[] = [
  'pending',
  'sent_to_kitchen',
  'preparing',
  'ready',
  'delivered',
  'paid',
  'cancelled',
];

export interface UpdateOrderStatusInput {
  orderId: string;
  status: string;
}

export interface UpdateOrderStatusOutput {
  orderId: string;
  previousStatus?: string;
  status: string;
  orderStatusEventId: string;
  updatedAt: string;
}

export async function updateOrderStatus(
  ctx: RequestContext,
  input: UpdateOrderStatusInput,
): Promise<UpdateOrderStatusOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const orderStatusEvents = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');

  // 1. Validate that the requested status is a valid Order status enum value
  if (!VALID_STATUSES.includes(input.status as OrderStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid order status: "${input.status}". Valid values are: ${VALID_STATUSES.join(', ')}.`,
      400,
      { field: 'status', value: input.status, validValues: VALID_STATUSES },
    );
  }

  const newStatus = input.status as OrderStatus;

  // 2. Load the Order by orderId
  const order = await orders.getById(input.orderId);
  if (!order) {
    throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
  }

  // 3. Capture the Order's current status as previousStatus
  const previousStatus: OrderStatus = order.status;

  // 4. Validate the transition is allowed
  if (!canTransitionOrder(previousStatus, newStatus)) {
    throw new AppError(
      'CONFLICT',
      `Invalid status transition from "${previousStatus}" to "${newStatus}".`,
      409,
      { orderId: input.orderId, previousStatus, requestedStatus: newStatus },
    );
  }

  const now = ctx.clock.nowIso();
  const orderStatusEventId = ctx.idGenerator.newId();

  // 5. Build the updated Order
  const updatedOrder: Order = {
    ...order,
    status: newStatus,
    updatedAt: now,
  };

  // 6. Build the OrderStatusEvent (append-only audit record)
  const event: OrderStatusEvent = {
    orderStatusEventId,
    orderId: input.orderId,
    previousStatus,
    status: newStatus,
    createdAt: now,
    updatedAt: now,
  };

  // 7. Save the updated Order and append the OrderStatusEvent in the same transaction
  await ctx.data.runInTransaction(async () => {
    await orders.save(updatedOrder);
    await orderStatusEvents.append(event);
  });

  // 8. Return the result
  return {
    orderId: input.orderId,
    previousStatus,
    status: newStatus,
    orderStatusEventId,
    updatedAt: now,
  };
}
