/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.defs.ts" enhancement="_blank"/>

export const updateTableController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateTable",
    "controllerName": "UpdateTableController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateTableHandler",
        "command": "updateTable",
        "usecaseRef": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateTable.updateTable",
        "handlerName": "cafeFlowUpdateTableHandler"
      }
    ]
  }
} as const;

export default updateTableController;

export const pipeline = [
  {
    "id": "updateTable__httpController",
    "type": "httpController",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.d.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateTable.ts"
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
