/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItem.defs.ts" enhancement="_blank"/>

export const queryMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryMenuItem",
    "controllerName": "QueryMenuItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryMenuItemHandler",
        "command": "queryMenuItem",
        "usecaseRef": "queryMenuItem",
        "inputTypeName": "QueryMenuItemInput",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryMenuItem.queryMenuItem",
        "handlerName": "cafeFlowQueryMenuItemHandler"
      }
    ]
  }
} as const;

export default queryMenuItemController;

export const pipeline = [
  {
    "id": "queryMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts"
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
