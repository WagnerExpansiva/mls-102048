/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/launchOrder.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { launchOrder, type LaunchOrderInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.js';
import type { CafeFlowLaunchOrderOutput } from '/_102048_/l2/cafeFlow/web/contracts/orderLifecycle.js';

export const cafeFlowLaunchOrderHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LaunchOrderInput;

  if (!input || !input.type) {
    throw new AppError('VALIDATION_ERROR', 'type is required', 400, { field: 'type' });
  }
  if (input.type !== 'dineIn' && input.type !== 'takeout') {
    throw new AppError('VALIDATION_ERROR', `type must be 'dineIn' or 'takeout'`, 400, { field: 'type', value: input.type });
  }
  if (!input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }
  if (!input.items || !Array.isArray(input.items) || input.items.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'items must be a non-empty array', 400, { field: 'items' });
  }
  if (input.type === 'dineIn' && !input.tableId) {
    throw new AppError('VALIDATION_ERROR', "tableId is required when type is 'dineIn'", 400, { field: 'tableId' });
  }
  for (const item of input.items) {
    if (!item.menuItemId) {
      throw new AppError('VALIDATION_ERROR', 'each item must have a menuItemId', 400, { field: 'items.menuItemId' });
    }
    if (!item.quantity || item.quantity <= 0) {
      throw new AppError('VALIDATION_ERROR', 'each item must have a positive quantity', 400, { field: 'items.quantity' });
    }
  }

  const result = await launchOrder(ctx, input);

  const output: CafeFlowLaunchOrderOutput = {
    orderId: result.orderId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.launchOrder', handler: cafeFlowLaunchOrderHandler },
];
