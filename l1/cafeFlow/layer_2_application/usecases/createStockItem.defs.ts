/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.defs.ts" enhancement="_blank"/>

export const createStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "createStockItem",
        "inputTypeName": "CreateStockItemInput",
        "outputTypeName": "CreateStockItemOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Name of the stock item"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "description": "Unit of measure for the stock item (e.g. pieces, kg, liters)"
          },
          {
            "name": "minimumStockLevel",
            "type": "number",
            "required": true,
            "description": "Minimum stock level threshold; when current stock falls below this value an alert is raised"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial status of the stock item; must be 'active' or 'inactive'"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Generated unique identifier of the newly created stock item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Confirmed status of the created stock item"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlertRule"
        ],
        "transactional": true,
        "steps": [
          "1. Validate that name is non-empty, unitOfMeasure is non-empty, minimumStockLevel is a non-negative number, and status is one of 'active' or 'inactive'.",
          "2. Apply lowStockAlertRule: if minimumStockLevel is greater than zero, mark the stock item as eligible for low-stock alerts so that future inventory movements below this threshold trigger notifications.",
          "3. Generate a new stockItemId (uuid) and set createdAt and updatedAt to the current server timestamp.",
          "4. Persist the new StockItem master-data document through ctx.data.mdmDocument (shared 102034 store) inside a single transaction wrapper.",
          "5. Return the generated stockItemId and the confirmed status."
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default createStockItemUsecase;

export const pipeline = [
  {
    "id": "createStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.defs.ts",
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
