/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.defs.ts" enhancement="_blank"/>

export const createStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createStockItem",
    "controllerName": "CreateStockItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateStockItemHandler",
        "command": "createStockItem",
        "usecaseRef": "createStockItem",
        "inputTypeName": "CreateStockItemInput",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createStockItem.createStockItem",
        "handlerName": "cafeFlowCreateStockItemHandler"
      }
    ]
  }
} as const;

export default createStockItemController;

export const pipeline = [
  {
    "id": "createStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/createStockItem.ts"
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
