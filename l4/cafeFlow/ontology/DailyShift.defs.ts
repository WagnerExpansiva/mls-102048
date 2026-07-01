/// <mls fileReference="_102048_/l4/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityDailyShift = {
  "entityId": "DailyShift",
  "title": "Turno Diário",
  "description": "Turno operacional do dia: data, horário de abertura/fechamento, status, acumulação de vendas e vínculo aos pedidos do turno.",
  "ownership": "moduleOwned",
  "kind": "core",
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
  "lifecycleStates": [
    "open",
    "closed"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityDailyShift;
