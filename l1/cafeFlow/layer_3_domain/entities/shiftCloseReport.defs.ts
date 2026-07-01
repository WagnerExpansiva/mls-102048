/// <mls fileReference="_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.defs.ts" enhancement="_blank"/>

export const shiftCloseReportDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ShiftCloseReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftCloseReport",
    "fields": [
      {
        "fieldId": "shiftCloseReportId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do relatório de fechamento de turno"
      },
      {
        "fieldId": "dailyShiftId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao turno diário ao qual este relatório pertence"
      },
      {
        "fieldId": "totalSales",
        "type": "money",
        "required": true,
        "description": "Total de vendas consolidado no fechamento do turno"
      },
      {
        "fieldId": "totalOrders",
        "type": "number",
        "required": true,
        "description": "Quantidade total de pedidos processados no turno"
      },
      {
        "fieldId": "bestSellingItems",
        "type": "text",
        "required": true,
        "description": "Snapshot dos itens mais vendidos durante o turno"
      },
      {
        "fieldId": "stockConsumptionSummary",
        "type": "text",
        "required": true,
        "description": "Resumo consolidado do estoque consumido no turno"
      },
      {
        "fieldId": "operationalMetrics",
        "type": "text",
        "required": true,
        "description": "Métricas operacionais consolidadas do turno"
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do relatório"
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do relatório"
      }
    ],
    "invariants": [
      "totalSales must be >= 0",
      "totalOrders must be >= 0",
      "dailyShiftId must not be null",
      "A ShiftCloseReport can only be created when the referenced DailyShift status is 'closed'"
    ],
    "valueObjects": []
  }
} as const;

export default shiftCloseReportDomainEntity;

export const pipeline = [
  {
    "id": "shiftCloseReport__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.defs.ts",
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
