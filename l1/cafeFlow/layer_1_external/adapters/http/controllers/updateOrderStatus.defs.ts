/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderStatus.defs.ts" enhancement="_blank"/>

export const updateOrderStatusController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateOrderStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "UpdateOrderStatusController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateOrderStatusHandler",
        "command": "updateOrderStatus",
        "usecaseRef": "updateOrderStatus",
        "inputTypeName": "UpdateOrderStatusInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.updateOrderStatus",
        "handlerName": "cafeFlowUpdateOrderStatusHandler"
      }
    ]
  }
} as const;

export default updateOrderStatusController;

export const pipeline = [
  {
    "id": "updateOrderStatus__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderStatus.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderStatus.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.d.ts",
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
