/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts" enhancement="_blank"/>

export const orderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Order",
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
        "description": "Tipo do pedido: dine-in (mesa) ou takeout",
        "enum": [
          "dineIn",
          "takeout"
        ]
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status atual do pedido no fluxo operacional",
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
    "invariants": [
      "total must be >= 0",
      "When type is 'dineIn', tableId is required",
      "When type is 'takeout', tableId must be null",
      "Status transitions must follow: pending -> sent_to_kitchen -> preparing -> ready -> delivered -> paid; cancelled can occur from any non-paid/non-delivered status",
      "dailyShiftId must not be null"
    ],
    "valueObjects": []
  }
} as const;

export default orderDomainEntity;

export const pipeline = [
  {
    "id": "order__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/order.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts",
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
