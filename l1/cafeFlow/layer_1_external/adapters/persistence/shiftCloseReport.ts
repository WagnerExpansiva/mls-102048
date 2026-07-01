/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReport.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const shiftCloseReportTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowShiftCloseReport',
  tableName: 'shift_close_report',
  purpose: 'transacao',
  description: 'Relatórios de fechamento de turno. Campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'shift_close_report_id', postgresType: 'UUID' },
    { name: 'daily_shift_id', postgresType: 'UUID' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB' },
  ],
  primaryKey: ['shift_close_report_id'],
  indexes: [
    { name: 'idx_shift_close_report_daily_shift_id', columns: ['daily_shift_id'] },
    { name: 'idx_shift_close_report_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
