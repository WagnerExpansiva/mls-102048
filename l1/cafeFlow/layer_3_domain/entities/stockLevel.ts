/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.ts" enhancement="_blank"/>

export type StockLevelStatus = 'sufficient' | 'low' | 'depleted';

export interface StockLevel {
  stockLevelId: string;
  stockItemId: string;
  currentQuantity: number;
  minQuantity: number;
  status: StockLevelStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * Derives the operational status from the current and minimum quantities.
 *
 * - currentQuantity === 0 → 'depleted'
 * - currentQuantity > 0 && currentQuantity < minQuantity → 'low'
 * - currentQuantity >= minQuantity → 'sufficient'
 */
export function deriveStockLevelStatus(
  currentQuantity: number,
  minQuantity: number,
): StockLevelStatus {
  if (currentQuantity <= 0) {
    return 'depleted';
  }
  if (currentQuantity < minQuantity) {
    return 'low';
  }
  return 'sufficient';
}

/** currentQuantity must be >= 0 */
export function stockLevelCurrentQuantityIsValid(
  stockLevel: Pick<StockLevel, 'currentQuantity'>,
): boolean {
  return stockLevel.currentQuantity >= 0;
}

/** minQuantity must be >= 0 */
export function stockLevelMinQuantityIsValid(
  stockLevel: Pick<StockLevel, 'minQuantity'>,
): boolean {
  return stockLevel.minQuantity >= 0;
}

/** stockItemId must not be null */
export function stockLevelHasStockItem(
  stockLevel: Pick<StockLevel, 'stockItemId'>,
): boolean {
  return stockLevel.stockItemId !== null && stockLevel.stockItemId !== '';
}

/** Status must be consistent with the quantity rules. */
export function stockLevelStatusIsConsistent(
  stockLevel: Pick<StockLevel, 'currentQuantity' | 'minQuantity' | 'status'>,
): boolean {
  return stockLevel.status === deriveStockLevelStatus(
    stockLevel.currentQuantity,
    stockLevel.minQuantity,
  );
}

/** Evaluates all invariants and returns true only when every rule holds. */
export function stockLevelInvariantsHold(stockLevel: StockLevel): boolean {
  return (
    stockLevelCurrentQuantityIsValid(stockLevel) &&
    stockLevelMinQuantityIsValid(stockLevel) &&
    stockLevelHasStockItem(stockLevel) &&
    stockLevelStatusIsConsistent(stockLevel)
  );
}
