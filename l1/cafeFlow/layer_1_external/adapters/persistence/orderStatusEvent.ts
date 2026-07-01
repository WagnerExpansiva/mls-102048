/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const orderStatusEventTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowOrderStatusEvent',
  tableName: 'order_status_event',
  purpose: 'controle',
  description: 'Eventos de status de pedido (append-only). Campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'order_status_event_id', postgresType: 'UUID' },
    { name: 'order_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB' },
  ],
  primaryKey: ['order_status_event_id'],
  indexes: [
    { name: 'idx_order_status_event_order_id', columns: ['order_id'] },
    { name: 'idx_order_status_event_status', columns: ['status'] },
    { name: 'idx_order_status_event_created_at', columns: ['created_at'] },
  ],
  retentionDays: 90,
  version: 1,
};
