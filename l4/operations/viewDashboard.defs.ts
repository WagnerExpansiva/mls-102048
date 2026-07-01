/// <mls fileReference="_102048_/l4/operations/viewDashboard.defs.ts" enhancement="_blank"/>

export const operationViewDashboard = {
  "operationId": "viewDashboard",
  "title": "Visualizar Dashboard",
  "actor": "manager",
  "entity": "DailyShift",
  "kind": "query",
  "reads": [
    "DailyShift",
    "Order",
    "OrderItem",
    "OrderStatusEvent"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Acompanhar vendas e operação do turno em tempo real",
    "steps": [
      "Gerente acessa o dashboard",
      "Visualiza métricas de vendas, pedidos em andamento e status operacional"
    ],
    "outcome": "Visão consolidada do turno atual para tomada de decisão"
  },
  "capability": {
    "capabilityId": "viewDashboard",
    "title": "Visualizar Dashboard",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "shiftLifecycle",
  "commandName": "viewDashboard",
  "bffName": "cafeFlow.shiftLifecycle.viewDashboard",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationViewDashboard;
