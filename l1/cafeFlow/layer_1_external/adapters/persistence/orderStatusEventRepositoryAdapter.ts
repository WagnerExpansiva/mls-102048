/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEventRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderStatusEventRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { OrderStatusEvent, OrderStatus } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

interface OrderStatusEventRow {
  order_status_event_id: string;
  order_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface OrderStatusEventDetails {
  previousStatus: OrderStatus | null;
  updatedAt: string;
}

function toRow(record: OrderStatusEvent): OrderStatusEventRow {
  const details: OrderStatusEventDetails = {
    previousStatus: record.previousStatus,
    updatedAt: record.updatedAt,
  };
  return {
    order_status_event_id: record.orderStatusEventId,
    order_id: record.orderId,
    status: record.status,
    created_at: record.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderStatusEventRow): OrderStatusEventDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderStatusEventDetails;
  } catch {
    return { previousStatus: null, updatedAt: row.created_at };
  }
}

function toDomain(row: OrderStatusEventRow): OrderStatusEvent {
  const d = parseDetails(row);
  return {
    orderStatusEventId: row.order_status_event_id,
    orderId: row.order_id,
    previousStatus: d.previousStatus,
    status: row.status as OrderStatus,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderStatusEventRepositoryAdapter(ctx: RequestContext): IOrderStatusEventRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderStatusEventRow>('order_status_event');

  return {
    async append(record: OrderStatusEvent): Promise<void> {
      const repo = await getTable();
      await repo.insert({ record: toRow(record) });
    },

    async listByOwnerId(ownerId: string): Promise<OrderStatusEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { order_id: ownerId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByPeriod(start: string, end: string): Promise<OrderStatusEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((row) => row.created_at >= start && row.created_at <= end)
        .map(toDomain);
    },
  };
}
