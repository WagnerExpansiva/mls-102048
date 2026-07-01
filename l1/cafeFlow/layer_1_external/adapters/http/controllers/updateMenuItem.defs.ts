/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.defs.ts" enhancement="_blank"/>

export const updateMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateMenuItem",
    "controllerName": "UpdateMenuItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateMenuItemHandler",
        "command": "updateMenuItem",
        "usecaseRef": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateMenuItem.updateMenuItem",
        "handlerName": "cafeFlowUpdateMenuItemHandler"
      }
    ]
  }
} as const;

export default updateMenuItemController;

export const pipeline = [
  {
    "id": "updateMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts"
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
