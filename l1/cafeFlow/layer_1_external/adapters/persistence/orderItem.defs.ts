/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.defs.ts" enhancement="_blank"/>

export const orderItemTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "OrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "OrderItem",
    "tableName": "order_item",
    "columns": [
      {
        "name": "order_item_id",
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
        "name": "menu_item_id",
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
        "description": "quantity, unit_price, observations, updated_at"
      }
    ],
    "primaryKey": [
      "order_item_id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_item_order_id",
        "columns": [
          "order_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_item_menu_item_id",
        "columns": [
          "menu_item_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_item_created_at",
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

export default orderItemTableDefinition;

export const pipeline = [
  {
    "id": "orderItem__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
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
