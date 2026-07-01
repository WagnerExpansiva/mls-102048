/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/processPayment.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { processPayment, type ProcessPaymentInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.js';
import type { CafeFlowProcessPaymentOutput } from '/_102048_/l2/cafeFlow/web/contracts/orderLifecycle.js';

export const cafeFlowProcessPaymentHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as ProcessPaymentInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  if (input.amountPaid === undefined || input.amountPaid === null || typeof input.amountPaid !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'amountPaid is required and must be a number', 400, { field: 'amountPaid' });
  }

  const result = await processPayment(ctx, input);

  const output: CafeFlowProcessPaymentOutput = {
    orderId: result.orderId,
  };

  return ok(output);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.processPayment', handler: cafeFlowProcessPaymentHandler },
];
