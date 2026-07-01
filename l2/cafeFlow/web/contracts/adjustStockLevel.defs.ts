/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "adjustStockLevel",
    "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel",
    "routeKey": "cafeFlow.adjustStockLevel.adjustStockLevel",
    "purpose": "Registrar Entrada/Ajuste de Estoque",
    "kind": "command",
    "input": [
      {
        "name": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual live disponível em estoque."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "sufficient",
          "low",
          "depleted"
        ],
        "description": "Situação operacional do estoque."
      }
    ],
    "output": [
      {
        "name": "stockLevelId",
        "type": "string",
        "description": "Identificador único do estado de estoque."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:adjustStockLevel",
      "operationId": "adjustStockLevel",
      "defPath": "_102048_/l4/operations/adjustStockLevel.defs.ts",
      "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel"
    }
  }
];

export const pipeline = [
  {
    "id": "adjustStockLevel__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
