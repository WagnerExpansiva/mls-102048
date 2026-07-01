/// <mls fileReference="_102048_/l4/operations/launchOrder.defs.ts" enhancement="_blank"/>

export const operationLaunchOrder = {
  "operationId": "launchOrder",
  "title": "Lançar Pedido (POS)",
  "actor": "attendant",
  "entity": "Order",
  "kind": "create",
  "reads": [
    "MenuItem",
    "Table",
    "DailyShift",
    "StockItem",
    "StockLevel"
  ],
  "writes": [
    "Order",
    "OrderItem",
    "OrderStatusEvent",
    "StockLevel"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Registrar um novo pedido no sistema a partir do POS",
    "steps": [
      "Atendente seleciona os itens do cardápio",
      "Define a mesa ou tipo de consumo (balcão/mesa)",
      "Confirma o pedido que é enviado para a cozinha"
    ],
    "outcome": "Pedido criado com itens e status inicial, visível na cozinha"
  },
  "capability": {
    "capabilityId": "launchOrder",
    "title": "Lançar Pedido (POS)",
    "actor": "attendant",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "launchOrder",
  "bffName": "cafeFlow.orderLifecycle.launchOrder",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationLaunchOrder;
