/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateTable.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "updateTable",
    "bffName": "cafeFlow.updateTable.updateTable",
    "routeKey": "cafeFlow.updateTable.updateTable",
    "purpose": "Editar Mesa",
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
      "ownerId": "operation:updateTable",
      "operationId": "updateTable",
      "defPath": "_102048_/l4/operations/updateTable.defs.ts",
      "bffName": "cafeFlow.updateTable.updateTable"
    }
  }
];

export const pipeline = [
  {
    "id": "updateTable__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/updateTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateTable.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
