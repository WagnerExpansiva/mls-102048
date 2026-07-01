/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryMenuItem, type QueryMenuItemInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.js';
import type { CafeFlowQueryMenuItemOutput, CafeFlowQueryMenuItemOutputItem } from '/_102048_/l2/cafeFlow/web/contracts/queryMenuItem.js';

export const cafeFlowQueryMenuItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as QueryMenuItemInput;

  if (!input || !input.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }

  const result = await queryMenuItem(ctx, input);

  const mappedItem: CafeFlowQueryMenuItemOutputItem = {
    menuItemId: result.menuItemId,
    name: result.name,
    category: result.category,
    price: result.price,
    stockItemId: result.stockItemId ?? '',
    status: result.status === 'Active' ? 'active' : 'inactive',
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };

  const contractOutput: CafeFlowQueryMenuItemOutput = [mappedItem];

  return ok(contractOutput);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryMenuItem.queryMenuItem', handler: cafeFlowQueryMenuItemHandler },
];
