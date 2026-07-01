/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryStockItem, type QueryStockItemInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.js';
import type { CafeFlowQueryStockItemOutput, CafeFlowQueryStockItemOutputItem } from '/_102048_/l2/cafeFlow/web/contracts/queryStockItem.js';

export const cafeFlowQueryStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as QueryStockItemInput;

  if (input.stockItemId !== undefined && typeof input.stockItemId !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'stockItemId must be a string', 400, { field: 'stockItemId' });
  }
  if (input.name !== undefined && typeof input.name !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'name must be a string', 400, { field: 'name' });
  }
  if (input.status !== undefined && typeof input.status !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'status must be a string', 400, { field: 'status' });
  }

  const result = await queryStockItem(ctx, input);

  const mapped: CafeFlowQueryStockItemOutput = result.map((item): CafeFlowQueryStockItemOutputItem => ({
    stockItemId: item.stockItemId,
    name: item.name,
    unitOfMeasure: item.unitOfMeasure,
    minimumStockLevel: item.minimumStockLevel,
    status: item.status as 'active' | 'inactive',
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  return ok(mapped);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryStockItem.queryStockItem', handler: cafeFlowQueryStockItemHandler },
];
