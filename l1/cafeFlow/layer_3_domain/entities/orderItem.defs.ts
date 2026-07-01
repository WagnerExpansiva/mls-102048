/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.defs.ts" enhancement="_blank"/>

export const orderItemDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "OrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderItem",
    "fields": [
      {
        "fieldId": "orderItemId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do item do pedido"
      },
      {
        "fieldId": "orderId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao pedido ao qual este item pertence"
      },
      {
        "fieldId": "menuItemId",
        "type": "uuid",
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
    "invariants": [
      "quantity must be > 0",
      "unitPrice must be >= 0",
      "orderId and menuItemId must not be null"
    ],
    "valueObjects": []
  }
} as const;

export default orderItemDomainEntity;

export const pipeline = [
  {
    "id": "orderItem__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.defs.ts",
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
