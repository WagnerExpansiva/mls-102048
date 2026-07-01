/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IOrderRepository,
  OrderFilter,
  OrderId,
  CustomerId,
  Instant,
} from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderStatus, OrderType } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/order.js';

interface OrderRow {
  order_id: string;
  type: string;
  status: string;
  table_id: string | null;
  daily_shift_id: string;
  created_at: string;
  details: string | null;
}

interface OrderDetails {
  total: number;
  updatedAt: string;
  customerId: string | null;
}

function toRow(order: Order): OrderRow {
  const details: OrderDetails = {
    total: order.total,
    updatedAt: order.updatedAt,
    customerId: null,
  };
  return {
    order_id: order.orderId,
    type: order.type,
    status: order.status,
    table_id: order.tableId,
    daily_shift_id: order.dailyShiftId,
    created_at: order.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderRow): OrderDetails {
  try {
    const parsed = JSON.parse(row.details ?? '{}') as Partial<OrderDetails>;
    return {
      total: parsed.total ?? 0,
      updatedAt: parsed.updatedAt ?? row.created_at,
      customerId: parsed.customerId ?? null,
    };
  } catch {
    return { total: 0, updatedAt: row.created_at, customerId: null };
  }
}

function toDomain(row: OrderRow): Order {
  const d = parseDetails(row);
  return {
    orderId: row.order_id,
    type: row.type as OrderType,
    status: row.status as OrderStatus,
    total: d.total,
    tableId: row.table_id,
    dailyShiftId: row.daily_shift_id,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderRepositoryAdapter(ctx: RequestContext): IOrderRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderRow>('order');

  return {
    async getById(id: OrderId): Promise<Order | null> {
      const repo = await getTable();
      const row = await repo.findOne({ where: { order_id: id } });
      if (!row) {
        throw new AppError('NOT_FOUND', `Order ${id} not found`, 404, { orderId: id });
      }
      return toDomain(row);
    },

    async list(filter: OrderFilter): Promise<Order[]> {
      const where: Partial<OrderRow> = {};
      if (filter.dailyShiftId) where.daily_shift_id = filter.dailyShiftId;
      if (filter.status) where.status = filter.status;
      if (filter.type) where.type = filter.type;
      if (filter.tableId !== undefined) where.table_id = filter.tableId;

      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });

      let result = rows;

      if (filter.customerId) {
        result = rows.filter((r) => parseDetails(r).customerId === filter.customerId);
      }

      return result.map(toDomain);
    },

    async save(aggregate: Order): Promise<void> {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { order_id: aggregate.orderId } });
      if (existing) {
        await repo.update({ where: { order_id: aggregate.orderId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async listByStatus(status: OrderStatus): Promise<Order[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async listByCustomerId(customerId: CustomerId): Promise<Order[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .filter((r) => parseDetails(r).customerId === customerId)
        .map(toDomain);
    },

    async listByPeriod(start: Instant, end: Instant): Promise<Order[]> {
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
