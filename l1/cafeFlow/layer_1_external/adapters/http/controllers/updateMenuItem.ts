/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateMenuItem, type UpdateMenuItemInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.js';
import type { CafeFlowUpdateMenuItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateMenuItem.js';

export const cafeFlowUpdateMenuItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateMenuItemInput;

  if (!input || !input.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }
  if (input.name === undefined || input.name === null || input.name === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (input.price === undefined || input.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (input.status === undefined || input.status === null || input.status === '') {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateMenuItem(ctx, input);

  const output: CafeFlowUpdateMenuItemOutput = {
    menuItemId: result.menuItemId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateMenuItem.updateMenuItem', handler: cafeFlowUpdateMenuItemHandler },
];
