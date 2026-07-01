/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.defs.ts" enhancement="_blank"/>

export const queryMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "queryMenuItem",
        "inputTypeName": "QueryMenuItemInput",
        "outputTypeName": "QueryMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Unique identifier of the menu item to query"
          },
          {
            "name": "includeStockDetails",
            "type": "boolean",
            "required": false,
            "description": "When true, enrich the result with the linked StockItem master data"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Unique identifier of the menu item"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Display name of the menu item"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Category the menu item belongs to"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Selling price of the menu item"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Reference to the linked stock item, if any"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Menu item status (active or inactive)"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Creation timestamp"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Last update timestamp"
          },
          {
            "name": "stockItemName",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Name of the linked stock item (when includeStockDetails is true and stockItemId is present)"
          },
          {
            "name": "stockItemUnitOfMeasure",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Unit of measure of the linked stock item"
          },
          {
            "name": "stockItemMinimumStockLevel",
            "type": "number",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Minimum stock level of the linked stock item"
          },
          {
            "name": "stockItemStatus",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Status of the linked stock item (active or inactive)"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "stockConsumptionRule"
        ],
        "transactional": false,
        "steps": [
          "Read MenuItem master data by menuItemId via ctx.data.mdmDocument.get({ mdmId: menuItemId })",
          "Validate that the MenuItem exists; throw not-found if absent",
          "If includeStockDetails is true and MenuItem.stockItemId is present, read StockItem master data via ctx.data.mdmDocument.get({ mdmId: stockItemId })",
          "Apply stockConsumptionRule: verify the linked StockItem is active when MenuItem is active; include stock availability context in the result",
          "Project MenuItem fields and, when enriched, append StockItem fields (stockItemName, stockItemUnitOfMeasure, stockItemMinimumStockLevel, stockItemStatus)",
          "Return the enriched MenuItem projection"
        ]
      }
    ],
    "rulesApplied": [
      "stockConsumptionRule"
    ],
    "mdmRefs": [
      "MenuItem",
      "StockItem"
    ]
  }
} as const;

export default queryMenuItemUsecase;

export const pipeline = [
  {
    "id": "queryMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "stockConsumptionRule"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
