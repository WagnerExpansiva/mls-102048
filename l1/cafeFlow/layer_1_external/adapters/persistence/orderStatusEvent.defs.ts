/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.defs.ts" enhancement="_blank"/>

export const orderStatusEventTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "OrderStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "OrderStatusEvent",
    "tableName": "order_status_event",
    "columns": [
      {
        "name": "order_status_event_id",
        "type": "uuid",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "order_id",
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
        "description": "previous_status, updated_at"
      }
    ],
    "primaryKey": [
      "order_status_event_id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_status_event_order_id",
        "columns": [
          "order_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_status_event_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_status_event_created_at",
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
    },
    "appendOnly": true,
    "purpose": "controle",
    "retentionDays": 90
  }
} as const;

export default orderStatusEventTableDefinition;

export const pipeline = [
  {
    "id": "orderStatusEvent__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
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
