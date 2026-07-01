/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryTable.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryTable",
    "bffName": "cafeFlow.queryTable.queryTable",
    "routeKey": "cafeFlow.queryTable.queryTable",
    "purpose": "Consultar Mesas",
    "kind": "query",
    "input": [
      {
        "name": "tableId",
        "type": "string",
        "required": false,
        "description": "Identificador único da mesa."
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral da mesa."
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa."
      },
      {
        "name": "tableNumber",
        "type": "string",
        "description": "Número ou código identificador da mesa física."
      },
      {
        "name": "capacity",
        "type": "number",
        "description": "Capacidade de assentos da mesa."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral da mesa."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:queryTable",
      "operationId": "queryTable",
      "defPath": "_102048_/l4/operations/queryTable.defs.ts",
      "bffName": "cafeFlow.queryTable.queryTable"
    }
  }
];

export const pipeline = [
  {
    "id": "queryTable__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/queryTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryTable.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
