/// <mls fileReference="_102048_/l4/operations/processPayment.defs.ts" enhancement="_blank"/>

export const operationProcessPayment = {
  "operationId": "processPayment",
  "title": "Processar Pagamento e Fechar Pedido",
  "actor": "cashier",
  "entity": "Order",
  "kind": "update",
  "reads": [
    "Order",
    "Order.status",
    "Order.total"
  ],
  "writes": [
    "Order",
    "Order.status",
    "Order.updatedAt"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "Processar o pagamento do pedido e encerrá-lo",
    "steps": [
      "Caixa seleciona o pedido a ser fechado",
      "Registra a forma de pagamento e confirma o valor",
      "Sistema marca o pedido como pago/fechado"
    ],
    "outcome": "Pedido fechado com pagamento registrado e disponível para relatórios"
  },
  "capability": {
    "capabilityId": "processPayment",
    "title": "Processar Pagamento e Fechar Pedido",
    "actor": "cashier",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "processPayment",
  "bffName": "cafeFlow.orderLifecycle.processPayment",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationProcessPayment;
