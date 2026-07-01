/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteTable.defs.ts" enhancement="_blank"/>

export const deleteTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteTable",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteTable",
        "inputTypeName": "DeleteTableInput",
        "outputTypeName": "DeleteTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Unique identifier of the Table to delete"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "ofEntity": "Table",
            "description": "Identifier of the deleted Table"
          },
          {
            "name": "deleted",
            "type": "boolean",
            "description": "Whether the Table was successfully deleted"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Validate tableId is provided and non-empty",
          "Load Table aggregate from Table port by tableId",
          "Verify Table exists; throw not-found if absent",
          "Verify Table status is not already deleted (guard against double-delete)",
          "Delete Table aggregate via Table port",
          "Return tableId and deleted=true confirmation",
          "If any mdmRef (Table master data) is referenced, read it by id via ctx.data.mdmDocument.get({ mdmId: tableId }) for validation before deletion"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default deleteTableUsecase;

export const pipeline = [
  {
    "id": "deleteTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/deleteTable.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
