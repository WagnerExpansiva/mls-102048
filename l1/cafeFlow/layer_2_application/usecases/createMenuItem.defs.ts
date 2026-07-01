/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.defs.ts" enhancement="_blank"/>

export const createMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "createMenuItem",
        "inputTypeName": "CreateMenuItemInput",
        "outputTypeName": "CreateMenuItemOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Display name of the menu item"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "description": "Category the menu item belongs to"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "description": "Selling price of the menu item"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": false,
            "ofEntity": "StockItem",
            "description": "Reference to the StockItem (MDM) linked for stock consumption tracking"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial status of the menu item (active or inactive)"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Generated unique identifier of the created menu item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status of the created menu item"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "stockConsumptionRule"
        ],
        "transactional": true,
        "steps": [
          "1. Validate required input fields: name, category, price, status.",
          "2. Validate status is one of the allowed enum values (active, inactive).",
          "3. If stockItemId is provided, read the StockItem from MDM via ctx.data.mdmDocument.get({ mdmId: stockItemId }) and verify it exists and has status 'active' (stockConsumptionRule).",
          "4. Generate menuItemId (uuid), createdAt and updatedAt timestamps (server-generated).",
          "5. Build the MenuItem aggregate root with all provided fields plus generated id and timestamps.",
          "6. Persist the MenuItem through the MenuItem port inside a transaction.",
          "7. Return menuItemId and status."
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem",
      "StockItem"
    ]
  }
} as const;

export default createMenuItemUsecase;

export const pipeline = [
  {
    "id": "createMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.defs.ts",
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
