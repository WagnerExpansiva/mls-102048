/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.ts" enhancement="_blank"/>
import type { OrderStatusEvent } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

/**
 * Append-only event port for OrderStatusEvent.
 * Events are immutable once recorded — no save/update/delete.
 */
export interface IOrderStatusEventRepository {
  /** Record a new status-change event. The event is immutable after append. */
  append(record: OrderStatusEvent): Promise<void>;

  /** List all status events for a given order. */
  listByOwnerId(ownerId: string): Promise<OrderStatusEvent[]>;

  /** List status events within a time range (ISO-8601 instants). */
  listByPeriod(start: string, end: string): Promise<OrderStatusEvent[]>;
}
