/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.ts" enhancement="_blank"/>
import type { OrderItem } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

export type OrderItemId = string;
export type OrderId = string;
export type ProductId = string;

export interface OrderItemFilter {
  orderId?: string;
  menuItemId?: string;
}

export interface IOrderItemRepository {
  getById(id: OrderItemId): Promise<OrderItem | null>;
  list(filter: OrderItemFilter): Promise<OrderItem[]>;
  save(aggregate: OrderItem): Promise<void>;
  listByOrderId(orderId: OrderId): Promise<OrderItem[]>;
  listByProductId(productId: ProductId): Promise<OrderItem[]>;
}
