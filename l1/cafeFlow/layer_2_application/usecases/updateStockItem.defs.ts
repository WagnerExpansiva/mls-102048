/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.defs.ts" enhancement="_blank"/>

export const updateStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "updateStockItem",
        "inputTypeName": "UpdateStockItemInput",
        "outputTypeName": "UpdateStockItemOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identifier of the stock item to update"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated name of the stock item"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated unit of measure (e.g. pieces, kg, liters)"
          },
          {
            "name": "minimumStockLevel",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated minimum stock level threshold for low-stock alert"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated status of the stock item (active or inactive)"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identifier of the updated stock item"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated name"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated unit of measure"
          },
          {
            "name": "minimumStockLevel",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated minimum stock level"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Updated status"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlertRule"
        ],
        "transactional": true,
        "steps": [
          "Load StockItem aggregate by stockItemId via StockItemPort",
          "Validate that the StockItem exists; throw not-found if missing",
          "Apply updated fields (name, unitOfMeasure, minimumStockLevel, status) to the StockItem",
          "Evaluate lowStockAlertRule: if minimumStockLevel is greater than zero and current quantity on hand is at or below the threshold, flag a low-stock condition",
          "Set updatedAt to the current server timestamp",
          "Save the StockItem aggregate via StockItemPort within the transaction",
          "Return the updated stockItemId, name, unitOfMeasure, minimumStockLevel, status, and updatedAt"
        ]
      }
    ],
    "rulesApplied": [
      "lowStockAlertRule"
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default updateStockItemUsecase;

export const pipeline = [
  {
    "id": "updateStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "lowStockAlertRule"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
