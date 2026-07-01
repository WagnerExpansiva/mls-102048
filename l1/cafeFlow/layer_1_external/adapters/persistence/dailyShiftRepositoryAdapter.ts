/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDailyShiftRepository, DailyShiftFilter } from '/_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { DailyShift, DailyShiftStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

interface DailyShiftRow {
  daily_shift_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface DailyShiftDetails {
  date: string;
  openTime: string;
  closeTime: string | null;
  totalSales: number;
  updatedAt: string;
}

function toRow(shift: DailyShift): DailyShiftRow {
  const details: DailyShiftDetails = {
    date: shift.date,
    openTime: shift.openTime,
    closeTime: shift.closeTime,
    totalSales: shift.totalSales,
    updatedAt: shift.updatedAt,
  };
  return {
    daily_shift_id: shift.dailyShiftId,
    status: shift.status,
    created_at: shift.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: DailyShiftRow): DailyShiftDetails {
  try {
    return JSON.parse(row.details ?? '{}') as DailyShiftDetails;
  } catch {
    return {
      date: '',
      openTime: '',
      closeTime: null,
      totalSales: 0,
      updatedAt: row.created_at,
    };
  }
}

function toDomain(row: DailyShiftRow): DailyShift {
  const d = parseDetails(row);
  return {
    dailyShiftId: row.daily_shift_id,
    date: d.date,
    openTime: d.openTime,
    closeTime: d.closeTime,
    status: row.status as DailyShiftStatus,
    totalSales: d.totalSales,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createDailyShiftRepositoryAdapter(ctx: RequestContext): IDailyShiftRepository {
  const getTable = () => ctx.data.moduleData.getTable<DailyShiftRow>('daily_shift');

  return {
    async getById(id) {
      const row = await (await getTable()).findOne({ where: { daily_shift_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter) {
      const where: Partial<DailyShiftRow> = {};
      if (filter.status) where.status = filter.status;
      let rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      if (filter.date) {
        rows = rows.filter((r) => parseDetails(r).date === filter.date);
      }
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { daily_shift_id: aggregate.dailyShiftId } });
      if (existing) {
        await repo.update({ where: { daily_shift_id: aggregate.dailyShiftId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByDate(date) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      const match = rows.find((r) => parseDetails(r).date === date);
      return match ? toDomain(match) : null;
    },

    async listByDateRange(start, end) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((r) => {
          const d = parseDetails(r);
          return d.date >= start && d.date <= end;
        })
        .map(toDomain);
    },
  };
}
