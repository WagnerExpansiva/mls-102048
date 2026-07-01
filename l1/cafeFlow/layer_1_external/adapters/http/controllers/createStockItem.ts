/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createStockItem, type CreateStockItemInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.js';
import type { CafeFlowCreateStockItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/createStockItem.js';

export const cafeFlowCreateStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateStockItemInput;

  if (!input || !input.name || input.name.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.unitOfMeasure || input.unitOfMeasure.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'unitOfMeasure is required', 400, { field: 'unitOfMeasure' });
  }
  if (typeof input.minimumStockLevel !== 'number' || input.minimumStockLevel < 0) {
    throw new AppError('VALIDATION_ERROR', 'minimumStockLevel must be a non-negative number', 400, { field: 'minimumStockLevel' });
  }
  if (!input.status || (input.status !== 'active' && input.status !== 'inactive')) {
    throw new AppError('VALIDATION_ERROR', "status must be 'active' or 'inactive'", 400, { field: 'status' });
  }

  const result = await createStockItem(ctx, input);

  const output: CafeFlowCreateStockItemOutput = {
    stockItemId: result.stockItemId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.createStockItem.createStockItem', handler: cafeFlowCreateStockItemHandler },
];
