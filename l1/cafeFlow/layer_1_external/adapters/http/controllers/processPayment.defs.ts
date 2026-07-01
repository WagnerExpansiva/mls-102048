/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/processPayment.defs.ts" enhancement="_blank"/>

export const processPaymentController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "processPayment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "ProcessPaymentController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowProcessPaymentHandler",
        "command": "processPayment",
        "usecaseRef": "processPayment",
        "inputTypeName": "ProcessPaymentInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.processPayment",
        "handlerName": "cafeFlowProcessPaymentHandler"
      }
    ]
  }
} as const;

export default processPaymentController;

export const pipeline = [
  {
    "id": "processPayment__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/processPayment.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/processPayment.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.d.ts",
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
