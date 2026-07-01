/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const deleteMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteMenuItem",
    "controllerName": "DeleteMenuItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteMenuItemHandler",
        "command": "deleteMenuItem",
        "usecaseRef": "deleteMenuItem",
        "inputTypeName": "DeleteMenuItemInput",
        "kind": "delete"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteMenuItem.deleteMenuItem",
        "handlerName": "cafeFlowDeleteMenuItemHandler"
      }
    ]
  }
} as const;

export default deleteMenuItemController;

export const pipeline = [
  {
    "id": "deleteMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
