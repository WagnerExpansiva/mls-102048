/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.ts" enhancement="_blank"/>

import type { Order, OrderStatus, OrderType } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';

export type OrderId = string;
export type CustomerId = string;
export type Instant = string;

export interface OrderFilter {
  dailyShiftId?: string;
  status?: OrderStatus;
  type?: OrderType;
  tableId?: string | null;
  customerId?: CustomerId;
}

export interface IOrderRepository {
  getById(id: OrderId): Promise<Order | null>;
  list(filter: OrderFilter): Promise<Order[]>;
  save(aggregate: Order): Promise<void>;
  listByStatus(status: OrderStatus): Promise<Order[]>;
  listByCustomerId(customerId: CustomerId): Promise<Order[]>;
  listByPeriod(start: Instant, end: Instant): Promise<Order[]>;
}
