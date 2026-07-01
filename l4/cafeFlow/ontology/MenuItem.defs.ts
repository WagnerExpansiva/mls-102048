/// <mls fileReference="_102048_/l4/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuItem = {
  "entityId": "MenuItem",
  "title": "Item de Cardápio",
  "description": "Definição cadastral de um item do cardápio: nome, categoria, preço e receita/ingredientes vinculados a itens de estoque.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de cardápio"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do item exibido no cardápio"
    },
    {
      "fieldId": "category",
      "type": "string",
      "required": true,
      "description": "Categoria do item (ex: bebidas, entradas, pratos principais, sobremesas)"
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço de venda do item"
    },
    {
      "fieldId": "stockItemId",
      "type": "StockItem",
      "required": false,
      "description": "Item de estoque vinculado como ingrediente/receita do item"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação do item no cardápio",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ]
} as const;

export default cafeFlowEntityMenuItem;
