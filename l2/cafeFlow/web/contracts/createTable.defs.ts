/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createTable.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createTable",
    "bffName": "cafeFlow.createTable.createTable",
    "routeKey": "cafeFlow.createTable.createTable",
    "purpose": "Cadastrar Mesa",
    "kind": "command",
    "input": [
      {
        "name": "tableNumber",
        "type": "string",
        "required": true,
        "description": "Número ou código identificador da mesa física."
      },
      {
        "name": "capacity",
        "type": "number",
        "required": false,
        "description": "Capacidade de assentos da mesa."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral da mesa."
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createTable",
      "operationId": "createTable",
      "defPath": "_102048_/l4/operations/createTable.defs.ts",
      "bffName": "cafeFlow.createTable.createTable"
    }
  }
];

export const pipeline = [
  {
    "id": "createTable__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/createTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createTable.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
