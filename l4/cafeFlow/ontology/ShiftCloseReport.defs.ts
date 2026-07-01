/// <mls fileReference="_102048_/l4/cafeFlow/ontology/ShiftCloseReport.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityShiftCloseReport = {
  "entityId": "ShiftCloseReport",
  "title": "Relatório de Fechamento de Turno",
  "description": "Snapshot consolidado gerado no fechamento do turno: total de vendas, itens mais vendidos, resumo de estoque consumido e métricas operacionais.",
  "ownership": "moduleOwned",
  "kind": "supporting",
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
  "rulesApplied": []
} as const;

export default cafeFlowEntityShiftCloseReport;
