/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.ts" enhancement="_blank"/>

export type DailyShiftStatus = 'open' | 'closed';

export interface DailyShift {
  dailyShiftId: string;
  date: string;
  openTime: string;
  closeTime: string | null;
  status: DailyShiftStatus;
  totalSales: number;
  createdAt: string;
  updatedAt: string;
}

export const DAILY_SHIFT_STATUS_TRANSITIONS: Record<DailyShiftStatus, DailyShiftStatus[]> = {
  open: ['closed'],
  closed: [],
};

export function canTransitionDailyShift(from: DailyShiftStatus, to: DailyShiftStatus): boolean {
  return DAILY_SHIFT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function dailyShiftTotalSalesIsValid(totalSales: number): boolean {
  return totalSales >= 0;
}

export function dailyShiftOpenTimeIsValid(openTime: string, nowIso: string): boolean {
  return openTime !== '' && openTime <= nowIso;
}

export function dailyShiftStatusConsistent(
  status: DailyShiftStatus,
  openTime: string,
  closeTime: string | null,
): boolean {
  if (status === 'open') {
    return closeTime === null;
  }
  // status === 'closed'
  return closeTime !== null && closeTime > openTime;
}

export function dailyShiftInvariantsHold(
  shift: Pick<DailyShift, 'totalSales' | 'status' | 'openTime' | 'closeTime'>,
  nowIso: string,
): boolean {
  return (
    dailyShiftTotalSalesIsValid(shift.totalSales) &&
    dailyShiftOpenTimeIsValid(shift.openTime, nowIso) &&
    dailyShiftStatusConsistent(shift.status, shift.openTime, shift.closeTime)
  );
}
