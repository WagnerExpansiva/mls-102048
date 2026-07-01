/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.defs.ts" enhancement="_blank"/>

export const dailyShiftTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "DailyShift",
    "tableName": "daily_shift",
    "columns": [
      {
        "name": "daily_shift_id",
        "type": "uuid",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "status"
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
        "description": "date, open_time, close_time, total_sales, updated_at"
      }
    ],
    "primaryKey": [
      "daily_shift_id"
    ],
    "indexes": [
      {
        "indexName": "idx_daily_shift_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_daily_shift_created_at",
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

export default dailyShiftTableDefinition;

export const pipeline = [
  {
    "id": "dailyShift__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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
