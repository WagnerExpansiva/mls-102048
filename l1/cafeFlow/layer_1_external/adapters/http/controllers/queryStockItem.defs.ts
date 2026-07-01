/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItem.defs.ts" enhancement="_blank"/>

export const queryStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryStockItem",
    "controllerName": "QueryStockItemController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryStockItemHandler",
        "command": "queryStockItem",
        "usecaseRef": "queryStockItem",
        "inputTypeName": "QueryStockItemInput",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryStockItem.queryStockItem",
        "handlerName": "cafeFlowQueryStockItemHandler"
      }
    ]
  }
} as const;

export default queryStockItemController;

export const pipeline = [
  {
    "id": "queryStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts"
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
