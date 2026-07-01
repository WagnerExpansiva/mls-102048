/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { adjustStockLevel, type AdjustStockLevelInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.js';

export const cafeFlowAdjustStockLevelHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as AdjustStockLevelInput;

  if (!input || !input.stockLevelId) {
    throw new AppError('VALIDATION_ERROR', 'stockLevelId is required', 400, { field: 'stockLevelId' });
  }

  if (input.currentQuantity === undefined || input.currentQuantity === null || typeof input.currentQuantity !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'currentQuantity is required and must be a number', 400, { field: 'currentQuantity' });
  }

  if (input.minQuantity !== undefined && (typeof input.minQuantity !== 'number' || input.minQuantity < 0)) {
    throw new AppError('VALIDATION_ERROR', 'minQuantity must be a non-negative number when provided', 400, { field: 'minQuantity' });
  }

  const result = await adjustStockLevel(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.adjustStockLevel.adjustStockLevel', handler: cafeFlowAdjustStockLevelHandler },
];
