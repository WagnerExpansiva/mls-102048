/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createStockItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createStockItem",
    "bffName": "cafeFlow.createStockItem.createStockItem",
    "routeKey": "cafeFlow.createStockItem.createStockItem",
    "purpose": "Cadastrar Item de Estoque",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do ingrediente ou suprimento"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "required": true,
        "description": "Unidade de medida do item (ex: kg, litro, unidade, etc.)"
      },
      {
        "name": "minimumStockLevel",
        "type": "number",
        "required": true,
        "description": "Parâmetro de quantidade mínima em estoque para geração de alerta"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral do item de estoque"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createStockItem",
      "operationId": "createStockItem",
      "defPath": "_102048_/l4/operations/createStockItem.defs.ts",
      "bffName": "cafeFlow.createStockItem.createStockItem"
    }
  }
];

export const pipeline = [
  {
    "id": "createStockItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/createStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createStockItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
