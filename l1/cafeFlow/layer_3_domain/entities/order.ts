/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/order.ts" enhancement="_blank"/>

export type OrderType = 'dineIn' | 'takeout';
export type OrderStatus =
  | 'pending'
  | 'sent_to_kitchen'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'paid'
  | 'cancelled';

export interface Order {
  orderId: string;
  type: OrderType;
  status: OrderStatus;
  total: number;
  tableId: string | null;
  dailyShiftId: string;
  createdAt: string;
  updatedAt: string;
}

export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending: ['sent_to_kitchen', 'cancelled'],
  sent_to_kitchen: ['preparing', 'cancelled'],
  preparing: ['ready', 'cancelled'],
  ready: ['delivered', 'cancelled'],
  delivered: ['paid'],
  paid: [],
  cancelled: [],
};

export function canTransitionOrder(from: OrderStatus, to: OrderStatus): boolean {
  return ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function orderTotalIsNonNegative(order: Pick<Order, 'total'>): boolean {
  return order.total >= 0;
}

export function orderTableConsistency(order: Pick<Order, 'type' | 'tableId'>): boolean {
  if (order.type === 'dineIn') {
    return order.tableId !== null;
  }
  if (order.type === 'takeout') {
    return order.tableId === null;
  }
  return false;
}

export function orderHasDailyShift(order: Pick<Order, 'dailyShiftId'>): boolean {
  return order.dailyShiftId !== null && order.dailyShiftId !== '';
}

export function validateOrderInvariants(order: Pick<Order, 'total' | 'type' | 'tableId' | 'dailyShiftId'>): string[] {
  const violations: string[] = [];

  if (!orderTotalIsNonNegative(order)) {
    violations.push('total must be >= 0');
  }

  if (!orderTableConsistency(order)) {
    if (order.type === 'dineIn') {
      violations.push("When type is 'dineIn', tableId is required");
    } else if (order.type === 'takeout') {
      violations.push("When type is 'takeout', tableId must be null");
    }
  }

  if (!orderHasDailyShift(order)) {
    violations.push('dailyShiftId must not be null');
  }

  return violations;
}
