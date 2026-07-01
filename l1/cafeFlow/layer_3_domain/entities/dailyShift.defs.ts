/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.defs.ts" enhancement="_blank"/>

export const dailyShiftDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "DailyShift",
    "fields": [
      {
        "fieldId": "dailyShiftId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do turno diário"
      },
      {
        "fieldId": "date",
        "type": "date",
        "required": true,
        "description": "Data do turno operacional"
      },
      {
        "fieldId": "openTime",
        "type": "datetime",
        "required": true,
        "description": "Horário de abertura do turno"
      },
      {
        "fieldId": "closeTime",
        "type": "datetime",
        "required": false,
        "description": "Horário de fechamento do turno"
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status atual do turno",
        "enum": [
          "open",
          "closed"
        ]
      },
      {
        "fieldId": "totalSales",
        "type": "money",
        "required": true,
        "description": "Valor acumulado de vendas do turno"
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
      "open",
      "closed"
    ],
    "invariants": [
      "totalSales must be >= 0",
      "When status is 'open', closeTime must be null",
      "When status is 'closed', closeTime must be set and must be after openTime",
      "openTime must be set and cannot be in the future"
    ],
    "valueObjects": []
  }
} as const;

export default dailyShiftDomainEntity;

export const pipeline = [
  {
    "id": "dailyShift__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.defs.ts",
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
