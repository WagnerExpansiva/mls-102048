/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateStockItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "updateStockItem",
    "bffName": "cafeFlow.updateStockItem.updateStockItem",
    "routeKey": "cafeFlow.updateStockItem.updateStockItem",
    "purpose": "Editar Item de Estoque",
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
      "ownerId": "operation:updateStockItem",
      "operationId": "updateStockItem",
      "defPath": "_102048_/l4/operations/updateStockItem.defs.ts",
      "bffName": "cafeFlow.updateStockItem.updateStockItem"
    }
  }
];

export const pipeline = [
  {
    "id": "updateStockItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateStockItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
