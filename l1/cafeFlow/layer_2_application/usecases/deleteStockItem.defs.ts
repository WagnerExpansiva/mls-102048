/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.defs.ts" enhancement="_blank"/>

export const deleteStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteStockItem",
        "inputTypeName": "DeleteStockItemInput",
        "outputTypeName": "DeleteStockItemOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Unique identifier of the StockItem to delete"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identifier of the deleted StockItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the delete operation"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlertRule"
        ],
        "transactional": true,
        "steps": [
          "1. Load the StockItem aggregate by stockItemId via StockItemPort.findById(stockItemId).",
          "2. Validate that the StockItem exists; throw a not-found error if it does not.",
          "3. Apply lowStockAlertRule: evaluate the StockItem's minimumStockLevel — if the item was configured with a minimumStockLevel greater than zero, emit a low-stock alert signal so downstream consumers can react to the removal of a monitored stock item.",
          "4. Delete the StockItem aggregate via StockItemPort.delete(stockItemId) inside the transaction.",
          "5. Return { stockItemId, status: 'deleted' }."
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default deleteStockItemUsecase;

export const pipeline = [
  {
    "id": "deleteStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.defs.ts",
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
