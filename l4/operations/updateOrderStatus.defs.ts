/// <mls fileReference="_102048_/l4/operations/updateOrderStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateOrderStatus = {
  "operationId": "updateOrderStatus",
  "title": "Atualizar Status do Pedido",
  "actor": "cook",
  "entity": "OrderStatusEvent",
  "kind": "update",
  "reads": [
    "Order",
    "OrderStatusEvent"
  ],
  "writes": [
    "Order",
    "OrderStatusEvent"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "Atualizar o status do pedido conforme avança o preparo",
    "steps": [
      "Cozinheiro visualiza pedidos pendentes na tela da cozinha",
      "Marca o pedido como 'em preparo' ao iniciar",
      "Marca como 'pronto' ao finalizar"
    ],
    "outcome": "Status do pedido atualizado em tempo real, visível para atendente e caixa"
  },
  "capability": {
    "capabilityId": "updateOrderStatus",
    "title": "Atualizar Status do Pedido",
    "actor": "cook",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "updateOrderStatus",
  "bffName": "cafeFlow.orderLifecycle.updateOrderStatus",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationUpdateOrderStatus;
