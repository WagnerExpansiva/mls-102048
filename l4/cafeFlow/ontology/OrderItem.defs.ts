/// <mls fileReference="_102048_/l4/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderItem = {
  "entityId": "OrderItem",
  "title": "Item do Pedido",
  "description": "Linha de item dentro de um pedido: referência ao item de cardápio, quantidade e observações.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "Order",
      "required": true,
      "description": "Referência ao pedido ao qual este item pertence"
    },
    {
      "fieldId": "menuItemId",
      "type": "MenuItem",
      "required": true,
      "description": "Referência ao item do cardápio solicitado"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade solicitada do item"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário do item no momento do pedido"
    },
    {
      "fieldId": "observations",
      "type": "text",
      "required": false,
      "description": "Observações ou instruções especiais para o item"
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
  "rulesApplied": [
    "stockConsumptionRule"
  ]
} as const;

export default cafeFlowEntityOrderItem;
