/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewDashboard.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewDashboard, type ViewDashboardInput } from '/_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.js';
import type { CafeFlowViewDashboardOutput, CafeFlowViewDashboardOutputItem } from '/_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.js';

export const cafeFlowViewDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as ViewDashboardInput;
  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }

  const result = await viewDashboard(ctx, input);

  const item: CafeFlowViewDashboardOutputItem = {
    dailyShiftId: result.dailyShiftId,
    date: result.date,
    openTime: result.openTime,
    closeTime: result.closeTime ?? '',
    status: result.status as 'open' | 'closed',
    totalSales: result.totalSales,
    createdAt: '',
    updatedAt: '',
  };

  const contractOutput: CafeFlowViewDashboardOutput = [item];

  return ok(contractOutput);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.shiftLifecycle.viewDashboard', handler: cafeFlowViewDashboardHandler },
];
