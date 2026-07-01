/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewDashboard.defs.ts" enhancement="_blank"/>

export const viewDashboardController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "shiftLifecycle",
    "controllerName": "ViewDashboardController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowViewDashboardHandler",
        "command": "viewDashboard",
        "usecaseRef": "viewDashboard",
        "inputTypeName": "ViewDashboardInput",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.shiftLifecycle.viewDashboard",
        "handlerName": "cafeFlowViewDashboardHandler"
      }
    ]
  }
} as const;

export default viewDashboardController;

export const pipeline = [
  {
    "id": "viewDashboard__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewDashboard.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewDashboard.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts"
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
