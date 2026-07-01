/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.defs.ts" enhancement="_blank"/>

export const createTableController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createTable",
    "controllerName": "CreateTableController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateTableHandler",
        "command": "createTable",
        "usecaseRef": "createTable",
        "inputTypeName": "CreateTableInput",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createTable.createTable",
        "handlerName": "cafeFlowCreateTableHandler"
      }
    ]
  }
} as const;

export default createTableController;

export const pipeline = [
  {
    "id": "createTable__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/createTable.ts"
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
