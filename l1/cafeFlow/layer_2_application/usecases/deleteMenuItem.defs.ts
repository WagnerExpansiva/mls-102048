/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const deleteMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteMenuItem",
    "ports": [
      "OrderItem"
    ],
    "functions": [
      {
        "functionName": "deleteMenuItem",
        "inputTypeName": "DeleteMenuItemInput",
        "outputTypeName": "DeleteMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "ID of the MenuItem to delete"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "ID of the deleted MenuItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status: 'deleted' or 'blocked'"
          },
          {
            "name": "reason",
            "type": "string",
            "required": false,
            "description": "Reason if deletion was blocked"
          }
        ],
        "ports": [
          "OrderItem"
        ],
        "rulesApplied": [
          "stockConsumptionRule"
        ],
        "transactional": true,
        "steps": [
          "1. Read the MenuItem from the MDM store via ctx.data.mdmDocument.get({ mdmId: menuItemId }) to confirm it exists",
          "2. If MenuItem not found, return status 'not_found'",
          "3. Query the OrderItem port for any OrderItems whose menuItemId matches the target MenuItem (e.g. findOrderItemsByMenuItemId)",
          "4. Apply stockConsumptionRule: if there are OrderItems referencing this MenuItem that are in a non-terminal state (e.g. pending or in-progress orders), block deletion and return status 'blocked' with reason describing the conflicting OrderItems",
          "5. If no blocking OrderItems exist, delete the MenuItem from the MDM store via ctx.data.mdmDocument.delete({ mdmId: menuItemId })",
          "6. Return menuItemId and status 'deleted'"
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem"
    ]
  }
} as const;

export default deleteMenuItemUsecase;

export const pipeline = [
  {
    "id": "deleteMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
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
