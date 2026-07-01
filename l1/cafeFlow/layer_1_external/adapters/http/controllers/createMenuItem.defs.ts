/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.defs.ts" enhancement="_blank"/>

export const createMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createMenuItem",
    "controllerName": "CreateMenuItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateMenuItemHandler",
        "command": "createMenuItem",
        "usecaseRef": "createMenuItem",
        "inputTypeName": "CreateMenuItemInput",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createMenuItem.createMenuItem",
        "handlerName": "cafeFlowCreateMenuItemHandler"
      }
    ]
  }
} as const;

export default createMenuItemController;

export const pipeline = [
  {
    "id": "createMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts"
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
