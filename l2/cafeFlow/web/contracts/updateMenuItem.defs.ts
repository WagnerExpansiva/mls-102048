/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateMenuItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "updateMenuItem",
    "bffName": "cafeFlow.updateMenuItem.updateMenuItem",
    "routeKey": "cafeFlow.updateMenuItem.updateMenuItem",
    "purpose": "Editar Item de Cardápio",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do item exibido no cardápio"
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
      "ownerId": "operation:updateMenuItem",
      "operationId": "updateMenuItem",
      "defPath": "_102048_/l4/operations/updateMenuItem.defs.ts",
      "bffName": "cafeFlow.updateMenuItem.updateMenuItem"
    }
  }
];

export const pipeline = [
  {
    "id": "updateMenuItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
