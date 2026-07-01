/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const dailyShiftTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowDailyShift',
  tableName: 'daily_shift',
  purpose: 'transacao',
  description: 'Turnos diários do café. Campos não indexados (date, open_time, close_time, total_sales, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'daily_shift_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB' },
  ],
  primaryKey: ['daily_shift_id'],
  indexes: [
    { name: 'idx_daily_shift_status', columns: ['status'] },
    { name: 'idx_daily_shift_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
