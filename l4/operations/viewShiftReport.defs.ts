/// <mls fileReference="_102048_/l4/operations/viewShiftReport.defs.ts" enhancement="_blank"/>

export const operationViewShiftReport = {
  "operationId": "viewShiftReport",
  "title": "Visualizar Relatório de Fechamento de Turno",
  "actor": "manager",
  "entity": "ShiftCloseReport",
  "kind": "view",
  "reads": [
    "ShiftCloseReport",
    "DailyShift"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Consultar o relatório consolidado do turno ao final do expediente",
    "steps": [
      "Gerente acessa o relatório de fechamento do turno",
      "Visualiza totais de vendas, quantidade de pedidos, formas de pagamento e resumo operacional"
    ],
    "outcome": "Relatório do turno disponível para conferência e análise histórica"
  },
  "capability": {
    "capabilityId": "viewShiftReport",
    "title": "Visualizar Relatório de Fechamento de Turno",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "shiftLifecycle",
  "commandName": "viewShiftReport",
  "bffName": "cafeFlow.shiftLifecycle.viewShiftReport",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationViewShiftReport;
