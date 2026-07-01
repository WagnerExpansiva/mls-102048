/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.defs.ts" enhancement="_blank"/>

export const deleteStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteStockItem",
    "controllerName": "DeleteStockItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteStockItemHandler",
        "command": "deleteStockItem",
        "usecaseRef": "deleteStockItem",
        "inputTypeName": "DeleteStockItemInput",
        "kind": "delete"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteStockItem.deleteStockItem",
        "handlerName": "cafeFlowDeleteStockItemHandler"
      }
    ]
  }
} as const;

export default deleteStockItemController;

export const pipeline = [
  {
    "id": "deleteStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.ts"
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
