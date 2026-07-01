/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createMenuItem.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createMenuItem",
    "bffName": "cafeFlow.createMenuItem.createMenuItem",
    "routeKey": "cafeFlow.createMenuItem.createMenuItem",
    "purpose": "Cadastrar Item de Cardápio",
    "kind": "command",
    "input": [
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
      "ownerId": "operation:createMenuItem",
      "operationId": "createMenuItem",
      "defPath": "_102048_/l4/operations/createMenuItem.defs.ts",
      "bffName": "cafeFlow.createMenuItem.createMenuItem"
    }
  }
];

export const pipeline = [
  {
    "id": "createMenuItem__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
