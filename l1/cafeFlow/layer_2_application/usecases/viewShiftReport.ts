/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/viewShiftReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftCloseReportRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.js';
import type { IDailyShiftRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { ShiftCloseReport } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.js';
import type { DailyShift } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface ViewShiftReportByIdInput {
  shiftCloseReportId: string;
}

export interface ViewShiftReportByDailyShiftIdInput {
  dailyShiftId: string;
}

export interface ShiftReportView {
  shiftCloseReportId: string;
  dailyShiftId: string;
  totalSales: number;
  totalOrders: number;
  bestSellingItems: string;
  stockConsumptionSummary: string;
  operationalMetrics: string;
  createdAt: string;
  updatedAt: string;
  dailyShiftDate: string;
  dailyShiftOpenTime: string;
  dailyShiftCloseTime?: string;
  dailyShiftStatus: string;
  dailyShiftTotalSales: number;
}

function projectShiftReportView(report: ShiftCloseReport, shift: DailyShift): ShiftReportView {
  return {
    shiftCloseReportId: report.shiftCloseReportId,
    dailyShiftId: report.dailyShiftId,
    totalSales: report.totalSales,
    totalOrders: report.totalOrders,
    bestSellingItems: report.bestSellingItems,
    stockConsumptionSummary: report.stockConsumptionSummary,
    operationalMetrics: report.operationalMetrics,
    createdAt: report.createdAt,
    updatedAt: report.updatedAt,
    dailyShiftDate: shift.date,
    dailyShiftOpenTime: shift.openTime,
    dailyShiftCloseTime: shift.closeTime ?? undefined,
    dailyShiftStatus: shift.status,
    dailyShiftTotalSales: shift.totalSales,
  };
}

export async function viewShiftReportById(
  ctx: RequestContext,
  input: ViewShiftReportByIdInput,
): Promise<ShiftReportView> {
  const reports = resolveRepository<IShiftCloseReportRepository>(ctx, 'ShiftCloseReport');
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');

  const report = await reports.getById(input.shiftCloseReportId);
  if (!report) {
    throw new AppError('NOT_FOUND', `ShiftCloseReport not found: ${input.shiftCloseReportId}`, 404, {
      shiftCloseReportId: input.shiftCloseReportId,
    });
  }

  const shift = await dailyShifts.getById(report.dailyShiftId);
  if (!shift) {
    throw new AppError('NOT_FOUND', `DailyShift not found: ${report.dailyShiftId}`, 404, {
      dailyShiftId: report.dailyShiftId,
    });
  }

  return projectShiftReportView(report, shift);
}

export async function viewShiftReportByDailyShiftId(
  ctx: RequestContext,
  input: ViewShiftReportByDailyShiftIdInput,
): Promise<ShiftReportView> {
  const reports = resolveRepository<IShiftCloseReportRepository>(ctx, 'ShiftCloseReport');
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');

  const shift = await dailyShifts.getById(input.dailyShiftId);
  if (!shift) {
    throw new AppError('NOT_FOUND', `DailyShift not found: ${input.dailyShiftId}`, 404, {
      dailyShiftId: input.dailyShiftId,
    });
  }

  const report = await reports.findByShiftId(input.dailyShiftId);
  if (!report) {
    throw new AppError('NOT_FOUND', `ShiftCloseReport not found for dailyShiftId: ${input.dailyShiftId}`, 404, {
      dailyShiftId: input.dailyShiftId,
    });
  }

  return projectShiftReportView(report, shift);
}
