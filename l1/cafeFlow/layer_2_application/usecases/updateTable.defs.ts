/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.defs.ts" enhancement="_blank"/>

export const updateTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateTable",
    "ports": [],
    "functions": [
      {
        "functionName": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "outputTypeName": "UpdateTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the Table master-data document to update"
          },
          {
            "name": "tableNumber",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Human-readable table number"
          },
          {
            "name": "capacity",
            "type": "number",
            "required": false,
            "ofEntity": "Table",
            "description": "Seating capacity of the table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Table lifecycle status — must be 'active' or 'inactive'"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the updated Table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Confirmed status after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "Table is master data (mdmRef) — read and write via ctx.data.mdmDocument by id, no repository port",
          "Validate status enum: must be 'active' or 'inactive'",
          "Validate table exists before applying changes",
          "updatedAt is refreshed to actualDate on every successful write"
        ],
        "transactional": true,
        "steps": [
          "Load the Table master-data document by tableId via ctx.data.mdmDocument.get({ mdmId: tableId })",
          "If the document is not found, fail with a not-found error",
          "Validate that status is one of 'active' or 'inactive'",
          "Apply the incoming field changes (tableNumber, capacity, status) onto the loaded document",
          "Set updatedAt to the current timestamp",
          "Persist the updated document back through ctx.data.mdmDocument within the same transaction",
          "Return tableId, status, and updatedAt of the persisted document"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default updateTableUsecase;

export const pipeline = [
  {
    "id": "updateTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.defs.ts",
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
