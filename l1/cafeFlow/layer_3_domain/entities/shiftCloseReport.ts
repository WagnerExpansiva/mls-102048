/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.ts" enhancement="_blank"/>

export interface ShiftCloseReport {
  shiftCloseReportId: string;
  dailyShiftId: string;
  totalSales: number;
  totalOrders: number;
  bestSellingItems: string;
  stockConsumptionSummary: string;
  operationalMetrics: string;
  createdAt: string;
  updatedAt: string;
}

export function shiftCloseReportTotalSalesIsValid(report: Pick<ShiftCloseReport, 'totalSales'>): boolean {
  return report.totalSales >= 0;
}

export function shiftCloseReportTotalOrdersIsValid(report: Pick<ShiftCloseReport, 'totalOrders'>): boolean {
  return report.totalOrders >= 0;
}

export function shiftCloseReportDailyShiftIdIsValid(report: Pick<ShiftCloseReport, 'dailyShiftId'>): boolean {
  return report.dailyShiftId !== null && report.dailyShiftId !== '' && report.dailyShiftId !== undefined;
}

export function canCreateShiftCloseReport(dailyShiftStatus: string): boolean {
  return dailyShiftStatus === 'closed';
}

export function validateShiftCloseReport(report: ShiftCloseReport): string[] {
  const errors: string[] = [];
  if (!shiftCloseReportTotalSalesIsValid(report)) {
    errors.push('totalSales must be >= 0');
  }
  if (!shiftCloseReportTotalOrdersIsValid(report)) {
    errors.push('totalOrders must be >= 0');
  }
  if (!shiftCloseReportDailyShiftIdIsValid(report)) {
    errors.push('dailyShiftId must not be null');
  }
  return errors;
}
