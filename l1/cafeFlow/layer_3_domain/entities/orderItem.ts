/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.ts" enhancement="_blank"/>

export interface OrderItem {
  orderItemId: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  observations: string | null;
  createdAt: string;
  updatedAt: string;
}

/** Invariant: quantity must be > 0 */
export function orderItemQuantityIsValid(quantity: number): boolean {
  return quantity > 0;
}

/** Invariant: unitPrice must be >= 0 */
export function orderItemUnitPriceIsValid(unitPrice: number): boolean {
  return unitPrice >= 0;
}

/** Invariant: orderId and menuItemId must not be null */
export function orderItemReferencesAreValid(
  item: Pick<OrderItem, 'orderId' | 'menuItemId'>,
): boolean {
  return item.orderId !== null && item.menuItemId !== null;
}

/** Combined invariant check for an order item. */
export function orderItemIsValid(
  item: Pick<OrderItem, 'orderId' | 'menuItemId' | 'quantity' | 'unitPrice'>,
): boolean {
  return (
    orderItemQuantityIsValid(item.quantity) &&
    orderItemUnitPriceIsValid(item.unitPrice) &&
    orderItemReferencesAreValid(item)
  );
}

/** Computed total price for an order item (quantity × unitPrice). */
export function orderItemTotalPrice(
  item: Pick<OrderItem, 'quantity' | 'unitPrice'>,
): number {
  return item.quantity * item.unitPrice;
}
