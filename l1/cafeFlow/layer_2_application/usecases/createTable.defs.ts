/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.defs.ts" enhancement="_blank"/>

export const createTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createTable",
    "ports": [],
    "functions": [
      {
        "functionName": "createTable",
        "inputTypeName": "CreateTableInput",
        "outputTypeName": "CreateTableOutput",
        "input": [
          {
            "name": "tableNumber",
            "type": "string",
            "required": true,
            "description": "Human-readable table number/label",
            "ofEntity": "Table"
          },
          {
            "name": "capacity",
            "type": "number",
            "required": false,
            "description": "Seating capacity of the table",
            "ofEntity": "Table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial lifecycle status (active | inactive)",
            "ofEntity": "Table"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "description": "Generated unique identifier for the new table",
            "ofEntity": "Table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Confirmed status after creation",
            "ofEntity": "Table"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "Table is master data (mdmRef) — no repository port; created via ctx.data.mdmDocument in a single transaction wrapper",
          "Server-generated fields (tableId, createdAt, updatedAt) are assigned by the store, not by the caller",
          "status must be one of [active, inactive]"
        ],
        "transactional": true,
        "steps": [
          "Validate input: tableNumber is non-empty, status is 'active' or 'inactive', capacity (if provided) is a positive number",
          "Generate tableId (uuid), set createdAt and updatedAt to current timestamp",
          "Persist the Table master-data document via ctx.data.mdmDocument within a single transaction wrapper",
          "Return tableId and confirmed status"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default createTableUsecase;

export const pipeline = [
  {
    "id": "createTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.defs.ts",
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
