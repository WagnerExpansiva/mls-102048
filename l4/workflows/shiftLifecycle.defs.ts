/// <mls fileReference="_102048_/l4/workflows/shiftLifecycle.defs.ts" enhancement="_blank"/>

export const workflowShiftLifecycle = {
  "workflowId": "shiftLifecycle",
  "title": "Ciclo de Vida do Turno Diário",
  "executionMode": "sequential",
  "trigger": "Início do turno diário da cafeteria",
  "actors": [
    "manager"
  ],
  "states": [
    "open",
    "closed"
  ],
  "transitions": [
    {
      "from": "open",
      "to": "closed",
      "on": "closeShift",
      "by": "manager"
    }
  ],
  "operationIds": [
    "viewDashboard",
    "viewShiftReport"
  ],
  "entities": [
    "DailyShift",
    "ShiftCloseReport"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Acompanhar e fechar o turno diário da cafeteria com visibilidade total das vendas",
    "steps": [
      "Gerente monitora o dashboard durante o turno para acompanhar vendas e operação em tempo real",
      "Ao final do turno, gerente visualiza o relatório de fechamento com totais de vendas, pedidos e resumo operacional"
    ],
    "outcome": "Turno encerrado com relatório consolidado disponível para consulta e análise"
  },
  "capabilities": [
    {
      "capabilityId": "shiftLifecycle",
      "title": "Ciclo de Vida do Turno Diário",
      "actor": "manager",
      "priority": "now"
    }
  ],
  "pageId": "shiftLifecycle",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default workflowShiftLifecycle;
