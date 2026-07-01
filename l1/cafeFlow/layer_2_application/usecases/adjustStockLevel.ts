/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStockLevelRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel, StockLevelStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';
import {
  deriveStockLevelStatus,
  stockLevelCurrentQuantityIsValid,
  stockLevelMinQuantityIsValid,
} from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

export interface AdjustStockLevelInput {
  stockLevelId: string;
  currentQuantity: number;
  minQuantity?: number;
}

export interface AdjustStockLevelOutput {
  stockLevelId: string;
  stockItemId: string;
  currentQuantity: number;
  minQuantity: number;
  status: StockLevelStatus;
  updatedAt: string;
}

export async function adjustStockLevel(
  ctx: RequestContext,
  input: AdjustStockLevelInput,
): Promise<AdjustStockLevelOutput> {
  const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');
  const now = ctx.clock.nowIso();

  // 1. Load the StockLevel aggregate by stockLevelId; throw not-found if absent.
  const stockLevel = await stockLevels.getById(input.stockLevelId);
  if (!stockLevel) {
    throw new AppError(
      'NOT_FOUND',
      `StockLevel not found: ${input.stockLevelId}`,
      404,
      { stockLevelId: input.stockLevelId },
    );
  }

  // 2. Verify the referenced StockItem master-data exists and is active.
  const doc = await ctx.data.mdmDocument.get({ mdmId: stockLevel.stockItemId });
  if (!doc) {
    throw new AppError(
      'VALIDATION_ERROR',
      `StockItem master-data not found: ${stockLevel.stockItemId}`,
      400,
      { stockItemId: stockLevel.stockItemId },
    );
  }
  if (doc.details.status === 'Inactive' || doc.details.status === 'Blocked') {
    throw new AppError(
      'VALIDATION_ERROR',
      `StockItem is not active: ${stockLevel.stockItemId}`,
      400,
      { stockItemId: stockLevel.stockItemId, status: doc.details.status },
    );
  }

  // 3. Determine the effective minQuantity.
  const effectiveMinQuantity =
    input.minQuantity !== undefined ? input.minQuantity : stockLevel.minQuantity;

  // 4. Apply lowStockAlertRule: derive status from quantities.
  const newStatus = deriveStockLevelStatus(input.currentQuantity, effectiveMinQuantity);

  // Validate invariants on the new values.
  if (!stockLevelCurrentQuantityIsValid({ currentQuantity: input.currentQuantity })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'currentQuantity must be >= 0.',
      400,
      { currentQuantity: input.currentQuantity },
    );
  }
  if (!stockLevelMinQuantityIsValid({ minQuantity: effectiveMinQuantity })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'minQuantity must be >= 0.',
      400,
      { minQuantity: effectiveMinQuantity },
    );
  }

  // 5. Mutate the StockLevel aggregate.
  const updatedStockLevel: StockLevel = {
    ...stockLevel,
    currentQuantity: input.currentQuantity,
    minQuantity: effectiveMinQuantity,
    status: newStatus,
    updatedAt: now,
  };

  // 6. Save inside a transaction.
  await ctx.data.runInTransaction(async () => {
    await stockLevels.save(updatedStockLevel);
  });

  // 7. Return the result.
  return {
    stockLevelId: updatedStockLevel.stockLevelId,
    stockItemId: updatedStockLevel.stockItemId,
    currentQuantity: updatedStockLevel.currentQuantity,
    minQuantity: updatedStockLevel.minQuantity,
    status: updatedStockLevel.status,
    updatedAt: updatedStockLevel.updatedAt,
  };
}
