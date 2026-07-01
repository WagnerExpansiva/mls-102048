/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateTable, type UpdateTableInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.js';
import type { CafeFlowUpdateTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateTable.js';

export const cafeFlowUpdateTableHandler: BffHandler = async ({ request, ctx }) => {
  const params = request.params as Partial<UpdateTableInput>;

  if (!params || !params.tableId) {
    throw new AppError('VALIDATION_ERROR', 'tableId is required', 400, { field: 'tableId' });
  }
  if (!params.tableNumber) {
    throw new AppError('VALIDATION_ERROR', 'tableNumber is required', 400, { field: 'tableNumber' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateTableInput = {
    tableId: params.tableId,
    tableNumber: params.tableNumber,
    capacity: params.capacity,
    status: params.status,
  };

  const result = await updateTable(ctx, input);

  const output: CafeFlowUpdateTableOutput = {
    tableId: result.tableId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateTable.updateTable', handler: cafeFlowUpdateTableHandler },
];
