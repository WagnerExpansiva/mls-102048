/// <mls fileReference="_102048_/l4/cafeFlow/ontology/OrderStatusEvent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderStatusEvent = {
  "entityId": "OrderStatusEvent",
  "title": "Evento de Status do Pedido",
  "description": "Registro imutável de cada transição de status do pedido (ex: enviado à cozinha, em preparo, pronto, entregue, pago). Auditoria do ciclo de vida do pedido.",
  "ownership": "moduleOwned",
  "kind": "event",
  "eventPolicy": {
    "purpose": "audit",
    "retentionDays": 90
  },
  "fields": [
    {
      "fieldId": "orderStatusEventId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do evento de status do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao pedido ao qual este evento de status pertence"
    },
    {
      "fieldId": "previousStatus",
      "type": "string",
      "required": false,
      "description": "Status anterior do pedido antes da transição (nulo para o primeiro evento)"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Novo status do pedido registrado por este evento"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro do evento"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro do evento"
    }
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityOrderStatusEvent;
