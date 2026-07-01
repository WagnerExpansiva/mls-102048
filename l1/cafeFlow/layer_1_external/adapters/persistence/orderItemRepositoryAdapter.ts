/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItemRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderItemRepository, OrderItemFilter } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { OrderItem } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

interface OrderItemRow {
  order_item_id: string;
  order_id: string;
  menu_item_id: string;
  created_at: string;
  details: string | null;
}

interface OrderItemDetails {
  quantity: number;
  unitPrice: number;
  observations: string | null;
  updatedAt: string;
}

function toRow(item: OrderItem): OrderItemRow {
  const details: OrderItemDetails = {
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    observations: item.observations,
    updatedAt: item.updatedAt,
  };
  return {
    order_item_id: item.orderItemId,
    order_id: item.orderId,
    menu_item_id: item.menuItemId,
    created_at: item.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderItemRow): OrderItemDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderItemDetails;
  } catch {
    return { quantity: 0, unitPrice: 0, observations: null, updatedAt: row.created_at };
  }
}

function toDomain(row: OrderItemRow): OrderItem {
  const d = parseDetails(row);
  return {
    orderItemId: row.order_item_id,
    orderId: row.order_id,
    menuItemId: row.menu_item_id,
    quantity: d.quantity,
    unitPrice: d.unitPrice,
    observations: d.observations,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderItemRepositoryAdapter(ctx: RequestContext): IOrderItemRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderItemRow>('order_item');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { order_item_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter) {
      const repo = await getTable();
      const where: Partial<OrderItemRow> = {};
      if (filter.orderId) where.order_id = filter.orderId;
      if (filter.menuItemId) where.menu_item_id = filter.menuItemId;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { order_item_id: aggregate.orderItemId } });
      if (existing) {
        await repo.update({ where: { order_item_id: aggregate.orderItemId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async listByOrderId(orderId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { order_id: orderId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByProductId(productId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { menu_item_id: productId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
