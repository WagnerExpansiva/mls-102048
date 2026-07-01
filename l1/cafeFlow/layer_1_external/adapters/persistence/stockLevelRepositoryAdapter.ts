/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IStockLevelRepository, StockLevelFilter } from '/_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel, StockLevelStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

interface StockLevelRow {
  stock_level_id: string;
  stock_item_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface StockLevelDetails {
  currentQuantity: number;
  minQuantity: number;
  updatedAt: string;
}

function toRow(level: StockLevel): StockLevelRow {
  const details: StockLevelDetails = {
    currentQuantity: level.currentQuantity,
    minQuantity: level.minQuantity,
    updatedAt: level.updatedAt,
  };
  return {
    stock_level_id: level.stockLevelId,
    stock_item_id: level.stockItemId,
    status: level.status,
    created_at: level.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: StockLevelRow): StockLevelDetails {
  try {
    return JSON.parse(row.details ?? '{}') as StockLevelDetails;
  } catch {
    return { currentQuantity: 0, minQuantity: 0, updatedAt: row.created_at };
  }
}

function toDomain(row: StockLevelRow): StockLevel {
  const d = parseDetails(row);
  return {
    stockLevelId: row.stock_level_id,
    stockItemId: row.stock_item_id,
    currentQuantity: d.currentQuantity,
    minQuantity: d.minQuantity,
    status: row.status as StockLevelStatus,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createStockLevelRepositoryAdapter(ctx: RequestContext): IStockLevelRepository {
  const getTable = () => ctx.data.moduleData.getTable<StockLevelRow>('stock_level');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { stock_level_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter?: StockLevelFilter) {
      const where: Partial<StockLevelRow> = {};
      if (filter?.stockItemId) where.stock_item_id = filter.stockItemId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { stock_level_id: aggregate.stockLevelId } });
      if (existing) {
        await repo.update({ where: { stock_level_id: aggregate.stockLevelId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByProductId(productId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { stock_item_id: productId } });
      return row ? toDomain(row) : null;
    },

    async listLowStock(threshold) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const levels = rows.map(toDomain);
      return levels.filter((l) => l.currentQuantity < threshold);
    },
  };
}
