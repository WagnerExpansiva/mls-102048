/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateStockItem, type UpdateStockItemInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.js';
import type { CafeFlowUpdateStockItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateStockItem.js';

export const cafeFlowUpdateStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateStockItemInput;

  if (!input || !input.stockItemId) {
    throw new AppError('VALIDATION_ERROR', 'stockItemId is required', 400, { field: 'stockItemId' });
  }
  if (!input.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.unitOfMeasure) {
    throw new AppError('VALIDATION_ERROR', 'unitOfMeasure is required', 400, { field: 'unitOfMeasure' });
  }
  if (input.minimumStockLevel === undefined || input.minimumStockLevel === null || input.minimumStockLevel < 0) {
    throw new AppError('VALIDATION_ERROR', 'minimumStockLevel must be a non-negative number', 400, { field: 'minimumStockLevel' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateStockItem(ctx, input);

  const output: CafeFlowUpdateStockItemOutput = {
    stockItemId: result.stockItemId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateStockItem.updateStockItem', handler: cafeFlowUpdateStockItemHandler },
];
