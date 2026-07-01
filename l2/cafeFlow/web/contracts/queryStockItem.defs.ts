/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryStockItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryStockItem",
    "bffName": "cafeFlow.queryStockItem.queryStockItem",
    "routeKey": "cafeFlow.queryStockItem.queryStockItem",
    "purpose": "Consultar Itens de Estoque",
    "kind": "query",
    "input": [
      {
        "name": "stockItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item de estoque"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome do ingrediente ou suprimento"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral do item de estoque"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do ingrediente ou suprimento"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "description": "Unidade de medida do item (ex: kg, litro, unidade, etc.)"
      },
      {
        "name": "minimumStockLevel",
        "type": "number",
        "description": "Parâmetro de quantidade mínima em estoque para geração de alerta"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral do item de estoque"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:queryStockItem",
      "operationId": "queryStockItem",
      "defPath": "_102048_/l4/operations/queryStockItem.defs.ts",
      "bffName": "cafeFlow.queryStockItem.queryStockItem"
    }
  }
];

export const pipeline = [
  {
    "id": "queryStockItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryStockItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
