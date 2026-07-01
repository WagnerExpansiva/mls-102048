/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.ts" enhancement="_blank"/>

import type { DailyShift, DailyShiftStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export type DailyShiftId = string;
export type LocalDate = string;

export interface DailyShiftFilter {
  date?: LocalDate;
  status?: DailyShiftStatus;
}

export interface IDailyShiftRepository {
  getById(id: DailyShiftId): Promise<DailyShift | null>;
  list(filter: DailyShiftFilter): Promise<DailyShift[]>;
  save(aggregate: DailyShift): Promise<void>;
  findByDate(date: LocalDate): Promise<DailyShift | null>;
  listByDateRange(start: LocalDate, end: LocalDate): Promise<DailyShift[]>;
}
