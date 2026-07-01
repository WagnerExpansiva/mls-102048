/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.defs.ts" enhancement="_blank"/>

export const updateStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateStockItem",
    "controllerName": "UpdateStockItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateStockItemHandler",
        "command": "updateStockItem",
        "usecaseRef": "updateStockItem",
        "inputTypeName": "UpdateStockItemInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateStockItem.updateStockItem",
        "handlerName": "cafeFlowUpdateStockItemHandler"
      }
    ]
  }
} as const;

export default updateStockItemController;

export const pipeline = [
  {
    "id": "updateStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts"
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
