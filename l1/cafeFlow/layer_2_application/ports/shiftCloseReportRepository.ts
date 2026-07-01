/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.ts" enhancement="_blank"/>
import type { ShiftCloseReport } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.js';

export type ShiftCloseReportId = string;
export type DailyShiftId = string;
export type LocalDate = string;

export interface ShiftCloseReportFilter {
  shiftCloseReportId?: ShiftCloseReportId;
  dailyShiftId?: DailyShiftId;
}

export interface IShiftCloseReportRepository {
  getById(id: ShiftCloseReportId): Promise<ShiftCloseReport | null>;
  list(filter: ShiftCloseReportFilter): Promise<ShiftCloseReport[]>;
  save(aggregate: ShiftCloseReport): Promise<void>;
  findByShiftId(shiftId: DailyShiftId): Promise<ShiftCloseReport | null>;
  listByPeriod(start: LocalDate, end: LocalDate): Promise<ShiftCloseReport[]>;
}
