/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryTable.defs.ts" enhancement="_blank"/>

export const queryTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryTable",
    "ports": [],
    "functions": [
      {
        "functionName": "queryTableById",
        "inputTypeName": "QueryTableByIdInput",
        "outputTypeName": "TableView",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Unique identifier of the table to retrieve"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Unique identifier of the table"
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
            "description": "Table status: active or inactive"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Creation timestamp"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Last update timestamp"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Receive tableId from caller",
          "Read the Table master-data document via ctx.data.mdmDocument.get({ mdmId: tableId })",
          "If not found, return null/empty result",
          "Project the Table fields (tableId, tableNumber, capacity, status, createdAt, updatedAt) as the output view",
          "Return the projected TableView"
        ]
      },
      {
        "functionName": "queryTables",
        "inputTypeName": "QueryTablesInput",
        "outputTypeName": "TableViewList",
        "input": [
          {
            "name": "tableNumber",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Optional filter by table number (exact or partial match)"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Optional filter by status: active or inactive"
          }
        ],
        "output": [
          {
            "name": "items",
            "type": "Table[]",
            "required": true,
            "ofEntity": "Table",
            "description": "List of tables matching the filter criteria"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "description": "Total number of matching tables"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Receive optional filter criteria (tableNumber, status) from caller",
          "Query Table master-data documents via ctx.data.mdmDocument.search with the provided filters",
          "If no filters provided, return all Table documents",
          "Project each Table document to its view fields (tableId, tableNumber, capacity, status, createdAt, updatedAt)",
          "Return the projected list as items along with the total count"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default queryTableUsecase;

export const pipeline = [
  {
    "id": "queryTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryTable.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/queryTable.defs.ts",
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
