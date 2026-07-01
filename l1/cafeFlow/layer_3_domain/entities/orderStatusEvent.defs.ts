/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.defs.ts" enhancement="_blank"/>

export const orderStatusEventDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "OrderStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderStatusEvent",
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
        "description": "Status anterior do pedido antes da transição (nulo para o primeiro evento)",
        "enum": [
          "pending",
          "sent_to_kitchen",
          "preparing",
          "ready",
          "delivered",
          "paid",
          "cancelled"
        ]
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Novo status do pedido registrado por este evento",
        "enum": [
          "pending",
          "sent_to_kitchen",
          "preparing",
          "ready",
          "delivered",
          "paid",
          "cancelled"
        ]
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
    "invariants": [],
    "valueObjects": []
  }
} as const;

export default orderStatusEventDomainEntity;

export const pipeline = [
  {
    "id": "orderStatusEvent__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
