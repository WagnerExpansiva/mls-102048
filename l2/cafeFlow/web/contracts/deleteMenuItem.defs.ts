/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "deleteMenuItem",
    "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem",
    "routeKey": "cafeFlow.deleteMenuItem.deleteMenuItem",
    "purpose": "Remover Item de Cardápio",
    "kind": "command",
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
        "required": true,
        "description": "Nome do item exibido no cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": true,
        "description": "Categoria do item (ex: bebidas, entradas, pratos principais, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço de venda do item"
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
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do item no cardápio"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item de cardápio"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:deleteMenuItem",
      "operationId": "deleteMenuItem",
      "defPath": "_102048_/l4/operations/deleteMenuItem.defs.ts",
      "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem"
    }
  }
];

export const pipeline = [
  {
    "id": "deleteMenuItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
