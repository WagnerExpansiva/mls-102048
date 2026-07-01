/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.defs.ts" enhancement="_blank"/>

export const updateMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "outputTypeName": "UpdateMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the menu item to update"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated display name of the menu item"
          },
          {
            "name": "category",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated category classification"
          },
          {
            "name": "price",
            "type": "number",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated selling price"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Reference to the linked stock item (master data id)"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated lifecycle status: active or inactive"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the updated menu item"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Updated name of the menu item"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Updated category"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Updated price"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Linked stock item id if any"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Current status of the menu item"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Timestamp of the last update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "stockConsumptionRule"
        ],
        "transactional": true,
        "steps": [
          "1. Load the existing MenuItem aggregate by menuItemId through menuItemPort; throw NotFound if it does not exist.",
          "2. If stockItemId is provided in the input, resolve the StockItem master-data document via ctx.data.mdmDocument.get({ mdmId: stockItemId }); throw ValidationError if the StockItem does not exist or its status is not 'active' (stockConsumptionRule).",
          "3. If stockItemId is cleared (set to null) on update, allow unlinking without mdm lookup.",
          "4. Apply the provided field changes (name, category, price, stockItemId, status) onto the loaded MenuItem aggregate, preserving menuItemId and createdAt.",
          "5. Set updatedAt to the current server datetime.",
          "6. Validate that status is one of 'active' or 'inactive'; throw ValidationError otherwise.",
          "7. Save the updated MenuItem aggregate through menuItemPort inside the transaction.",
          "8. Return the updated menuItemId, name, category, price, stockItemId, status, and updatedAt."
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem",
      "StockItem"
    ]
  }
} as const;

export default updateMenuItemUsecase;

export const pipeline = [
  {
    "id": "updateMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.defs.ts",
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
