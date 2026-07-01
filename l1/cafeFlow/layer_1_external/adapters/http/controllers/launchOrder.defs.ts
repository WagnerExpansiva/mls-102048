/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/launchOrder.defs.ts" enhancement="_blank"/>

export const launchOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "launchOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "LaunchOrderController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowLaunchOrderHandler",
        "command": "launchOrder",
        "usecaseRef": "launchOrder",
        "inputTypeName": "LaunchOrderInput",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.launchOrder",
        "handlerName": "cafeFlowLaunchOrderHandler"
      }
    ]
  }
} as const;

export default launchOrderController;

export const pipeline = [
  {
    "id": "launchOrder__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/launchOrder.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/launchOrder.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts"
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
