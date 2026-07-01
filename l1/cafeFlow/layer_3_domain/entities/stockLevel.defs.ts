/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.defs.ts" enhancement="_blank"/>

export const stockLevelDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "StockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StockLevel",
    "fields": [
      {
        "fieldId": "stockLevelId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do estado de estoque."
      },
      {
        "fieldId": "stockItemId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao item de estoque rastreado."
      },
      {
        "fieldId": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual live disponível em estoque."
      },
      {
        "fieldId": "minQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade mínima configurada para disparar alerta de estoque baixo."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Situação operacional do estoque.",
        "enum": [
          "sufficient",
          "low",
          "depleted"
        ]
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "statusEnum": [
      "sufficient",
      "low",
      "depleted"
    ],
    "invariants": [
      "currentQuantity must be >= 0",
      "minQuantity must be >= 0",
      "When currentQuantity is 0, status must be 'depleted'",
      "When currentQuantity > 0 and currentQuantity < minQuantity, status must be 'low'",
      "When currentQuantity >= minQuantity, status must be 'sufficient'",
      "stockItemId must not be null"
    ],
    "valueObjects": []
  }
} as const;

export default stockLevelDomainEntity;

export const pipeline = [
  {
    "id": "stockLevel__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.defs.ts",
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
