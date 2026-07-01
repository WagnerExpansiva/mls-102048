/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.defs.ts" enhancement="_blank"/>

export const queryStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "queryStockItem",
        "inputTypeName": "QueryStockItemInput",
        "outputTypeName": "QueryStockItemOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Optional filter by stock item id for single-item lookup"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Optional filter by stock item name (partial match)"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Optional filter by status: active | inactive"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "minimumStockLevel",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "lowStockAlert",
            "type": "boolean",
            "required": true,
            "description": "Computed flag from lowStockAlertRule indicating the item is at or below its minimum stock level"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlertRule"
        ],
        "transactional": false,
        "steps": [
          "Read StockItem master data by id via ctx.data.mdmDocument.get({ mdmId: stockItemId }) when stockItemId is provided; otherwise query matching items by name and/or status filters",
          "For each returned StockItem, apply lowStockAlertRule to compute lowStockAlert flag based on minimumStockLevel",
          "Project the result fields including the computed lowStockAlert flag",
          "Return the projected StockItem(s) to the caller"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default queryStockItemUsecase;

export const pipeline = [
  {
    "id": "queryStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
