/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateOrderStatus, type UpdateOrderStatusInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.js';
import type { CafeFlowUpdateOrderStatusOutput } from '/_102048_/l2/cafeFlow/web/contracts/orderLifecycle.js';

export const cafeFlowUpdateOrderStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateOrderStatusInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateOrderStatus(ctx, input);

  const output: CafeFlowUpdateOrderStatusOutput = {
    orderStatusEventId: result.orderStatusEventId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.updateOrderStatus', handler: cafeFlowUpdateOrderStatusHandler },
];
