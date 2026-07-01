/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryMenuItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryMenuItem",
    "bffName": "cafeFlow.queryMenuItem.queryMenuItem",
    "routeKey": "cafeFlow.queryMenuItem.queryMenuItem",
    "purpose": "Consultar Itens de Cardápio",
    "kind": "query",
    "input": [
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item de cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome do item exibido no cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": false,
        "description": "Categoria do item (ex: bebidas, entradas, pratos principais, sobremesas)"
      },
      {
        "name": "stockItemId",
        "type": "string",
        "required": false,
        "description": "Item de estoque vinculado como ingrediente/receita do item"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do item no cardápio"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item de cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do item exibido no cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "description": "Categoria do item (ex: bebidas, entradas, pratos principais, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço de venda do item"
      },
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Item de estoque vinculado como ingrediente/receita do item"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do item no cardápio"
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
      "ownerId": "operation:queryMenuItem",
      "operationId": "queryMenuItem",
      "defPath": "_102048_/l4/operations/queryMenuItem.defs.ts",
      "bffName": "cafeFlow.queryMenuItem.queryMenuItem"
    }
  }
];

export const pipeline = [
  {
    "id": "queryMenuItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
