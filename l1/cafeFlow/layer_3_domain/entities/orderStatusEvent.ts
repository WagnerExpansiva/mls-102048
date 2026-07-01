/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.ts" enhancement="_blank"/>

export type OrderStatus =
  | 'pending'
  | 'sent_to_kitchen'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'paid'
  | 'cancelled';

export interface OrderStatusEvent {
  orderStatusEventId: string;
  orderId: string;
  previousStatus: OrderStatus | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
