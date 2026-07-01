/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const adjustStockLevelUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "adjustStockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "adjustStockLevel",
    "ports": [
      "StockLevel"
    ],
    "functions": [
      {
        "functionName": "adjustStockLevel",
        "inputTypeName": "AdjustStockLevelInput",
        "outputTypeName": "AdjustStockLevelOutput",
        "input": [
          {
            "name": "stockLevelId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Identifier of the stock level record to adjust"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "New current quantity after adjustment"
          },
          {
            "name": "minQuantity",
            "type": "number",
            "required": false,
            "ofEntity": "StockLevel",
            "description": "Optional new minimum threshold; if omitted the existing value is kept"
          }
        ],
        "output": [
          {
            "name": "stockLevelId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Identifier of the adjusted stock level"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Associated stock item id"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Updated current quantity"
          },
          {
            "name": "minQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Effective minimum threshold after update"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Recomputed status: sufficient | low | depleted"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [
          "StockLevel"
        ],
        "rulesApplied": [
          "lowStockAlertRule"
        ],
        "transactional": true,
        "steps": [
          "1. Load the StockLevel aggregate by stockLevelId via the StockLevel port; throw not-found if absent.",
          "2. Read the referenced StockItem master-data via ctx.data.mdmDocument.get({ mdmId: stockLevel.stockItemId }) to verify the item exists and is active; throw validation error if inactive or missing.",
          "3. Determine the effective minQuantity: use the input minQuantity when provided, otherwise keep the persisted value.",
          "4. Apply lowStockAlertRule: set status to 'depleted' when currentQuantity <= 0, 'low' when currentQuantity < minQuantity, otherwise 'sufficient'.",
          "5. Mutate the StockLevel aggregate with the new currentQuantity, effective minQuantity, computed status, and updatedAt = now.",
          "6. Save the StockLevel aggregate through the StockLevel port inside the transaction.",
          "7. Return stockLevelId, stockItemId, currentQuantity, minQuantity, status, and updatedAt."
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default adjustStockLevelUsecase;

export const pipeline = [
  {
    "id": "adjustStockLevel__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
