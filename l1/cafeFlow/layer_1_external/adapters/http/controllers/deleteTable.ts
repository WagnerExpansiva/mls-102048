/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteTable.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { deleteTable, type DeleteTableInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/deleteTable.js';
import type { CafeFlowDeleteTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/deleteTable.js';

export const cafeFlowDeleteTableHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DeleteTableInput;

  if (!input || !input.tableId || input.tableId.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'tableId is required', 400, { field: 'tableId' });
  }

  const result = await deleteTable(ctx, input);

  const output: CafeFlowDeleteTableOutput = {
    tableId: result.tableId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.deleteTable.deleteTable', handler: cafeFlowDeleteTableHandler },
];
