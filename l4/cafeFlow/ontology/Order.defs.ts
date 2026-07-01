/// <mls fileReference="_102048_/l4/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrder = {
  "entityId": "Order",
  "title": "Pedido",
  "description": "Pedido lançado no POS: tipo (mesa ou takeout), itens, status atual, total e vínculo ao turno ativo.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido"
    },
    {
      "fieldId": "type",
      "type": "string",
      "required": true,
      "enum": [
        "dineIn",
        "takeout"
      ],
      "description": "Tipo do pedido: dine-in (mesa) ou takeout"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "pending",
        "sent_to_kitchen",
        "preparing",
        "ready",
        "delivered",
        "paid",
        "cancelled"
      ],
      "description": "Status atual do pedido no fluxo operacional"
    },
    {
      "fieldId": "total",
      "type": "money",
      "required": true,
      "description": "Valor total do pedido"
    },
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": false,
      "description": "Referência à mesa para pedidos dine-in; nulo para pedidos takeout"
    },
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao turno diário em que o pedido foi lançado"
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
    "pending",
    "sent_to_kitchen",
    "preparing",
    "ready",
    "delivered",
    "paid",
    "cancelled"
  ],
  "lifecycleStates": [
    "pending",
    "sent_to_kitchen",
    "preparing",
    "ready",
    "delivered",
    "paid",
    "cancelled"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ]
} as const;

export default cafeFlowEntityOrder;
