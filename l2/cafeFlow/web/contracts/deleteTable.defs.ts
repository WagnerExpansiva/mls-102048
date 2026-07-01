/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteTable.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "deleteTable",
    "bffName": "cafeFlow.deleteTable.deleteTable",
    "routeKey": "cafeFlow.deleteTable.deleteTable",
    "purpose": "Remover Mesa",
    "kind": "command",
    "input": [
      {
        "name": "tableId",
        "type": "string",
        "required": false,
        "description": "Identificador único da mesa."
      },
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
      "ownerId": "operation:deleteTable",
      "operationId": "deleteTable",
      "defPath": "_102048_/l4/operations/deleteTable.defs.ts",
      "bffName": "cafeFlow.deleteTable.deleteTable"
    }
  }
];

export const pipeline = [
  {
    "id": "deleteTable__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/deleteTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/deleteTable.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
