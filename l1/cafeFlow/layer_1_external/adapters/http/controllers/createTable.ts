/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createTable, type CreateTableInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.js';
import type { CafeFlowCreateTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/createTable.js';

export const cafeFlowCreateTableHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateTableInput;

  if (!input || !input.tableNumber || input.tableNumber.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'tableNumber is required', 400, { field: 'tableNumber' });
  }

  if (!input.status || (input.status !== 'active' && input.status !== 'inactive')) {
    throw new AppError('VALIDATION_ERROR', "status must be 'active' or 'inactive'", 400, { field: 'status' });
  }

  const result = await createTable(ctx, input);

  const output: CafeFlowCreateTableOutput = {
    tableId: result.tableId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.createTable.createTable', handler: cafeFlowCreateTableHandler },
];
