/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReportRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IShiftCloseReportRepository,
  ShiftCloseReportFilter,
} from '/_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.js';
import type { ShiftCloseReport } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.js';

interface ShiftCloseReportRow {
  shift_close_report_id: string;
  daily_shift_id: string;
  created_at: string;
  details: string | null;
}

interface ShiftCloseReportDetails {
  totalSales: number;
  totalOrders: number;
  bestSellingItems: string;
  stockConsumptionSummary: string;
  operationalMetrics: string;
  updatedAt: string;
}

function toRow(report: ShiftCloseReport): ShiftCloseReportRow {
  const details: ShiftCloseReportDetails = {
    totalSales: report.totalSales,
    totalOrders: report.totalOrders,
    bestSellingItems: report.bestSellingItems,
    stockConsumptionSummary: report.stockConsumptionSummary,
    operationalMetrics: report.operationalMetrics,
    updatedAt: report.updatedAt,
  };
  return {
    shift_close_report_id: report.shiftCloseReportId,
    daily_shift_id: report.dailyShiftId,
    created_at: report.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ShiftCloseReportRow): ShiftCloseReportDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ShiftCloseReportDetails;
  } catch {
    return {
      totalSales: 0,
      totalOrders: 0,
      bestSellingItems: '',
      stockConsumptionSummary: '',
      operationalMetrics: '',
      updatedAt: row.created_at,
    };
  }
}

function toDomain(row: ShiftCloseReportRow): ShiftCloseReport {
  const d = parseDetails(row);
  return {
    shiftCloseReportId: row.shift_close_report_id,
    dailyShiftId: row.daily_shift_id,
    totalSales: d.totalSales,
    totalOrders: d.totalOrders,
    bestSellingItems: d.bestSellingItems,
    stockConsumptionSummary: d.stockConsumptionSummary,
    operationalMetrics: d.operationalMetrics,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createShiftCloseReportRepositoryAdapter(
  ctx: RequestContext,
): IShiftCloseReportRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ShiftCloseReportRow>('shift_close_report');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { shift_close_report_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter: ShiftCloseReportFilter) {
      const where: Partial<ShiftCloseReportRow> = {};
      if (filter.shiftCloseReportId) {
        where.shift_close_report_id = filter.shiftCloseReportId;
      }
      if (filter.dailyShiftId) {
        where.daily_shift_id = filter.dailyShiftId;
      }
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate: ShiftCloseReport) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { shift_close_report_id: aggregate.shiftCloseReportId },
      });
      if (existing) {
        await repo.update({
          where: { shift_close_report_id: aggregate.shiftCloseReportId },
          patch: toRow(aggregate),
        });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByShiftId(shiftId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { daily_shift_id: shiftId } });
      return row ? toDomain(row) : null;
    },

    async listByPeriod(start, end) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((r) => r.created_at >= start && r.created_at <= end)
        .map(toDomain);
    },
  };
}
