/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReport.defs.ts" enhancement="_blank"/>

export const shiftCloseReportTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ShiftCloseReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ShiftCloseReport",
    "tableName": "shift_close_report",
    "columns": [
      {
        "name": "shift_close_report_id",
        "type": "uuid",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "daily_shift_id",
        "type": "uuid",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": false,
        "description": "total_sales, total_orders, best_selling_items, stock_consumption_summary, operational_metrics, updated_at"
      }
    ],
    "primaryKey": [
      "shift_close_report_id"
    ],
    "indexes": [
      {
        "indexName": "idx_shift_close_report_daily_shift_id",
        "columns": [
          "daily_shift_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_shift_close_report_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    }
  }
} as const;

export default shiftCloseReportTableDefinition;

export const pipeline = [
  {
    "id": "shiftCloseReport__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReport.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
