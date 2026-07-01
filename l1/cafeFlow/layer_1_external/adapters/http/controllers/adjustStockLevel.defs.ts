/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const adjustStockLevelController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "adjustStockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "adjustStockLevel",
    "controllerName": "AdjustStockLevelController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowAdjustStockLevelHandler",
        "command": "adjustStockLevel",
        "usecaseRef": "adjustStockLevel",
        "inputTypeName": "AdjustStockLevelInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.adjustStockLevel.adjustStockLevel",
        "handlerName": "cafeFlowAdjustStockLevelHandler"
      }
    ]
  }
} as const;

export default adjustStockLevelController;

export const pipeline = [
  {
    "id": "adjustStockLevel__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.d.ts"
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
