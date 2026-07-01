/// <mls fileReference="_102048_/l4/workflows/orderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowOrderLifecycle = {
  "workflowId": "orderLifecycle",
  "title": "Ciclo de Vida do Pedido",
  "executionMode": "sequential",
  "trigger": "Cliente seleciona itens e atendente lança o pedido no POS",
  "actors": [
    "attendant",
    "cook",
    "cashier"
  ],
  "states": [
    "pending",
    "sent_to_kitchen",
    "preparing",
    "ready",
    "delivered",
    "paid",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "pending",
      "to": "sent_to_kitchen",
      "on": "launchOrder",
      "by": "attendant"
    },
    {
      "from": "sent_to_kitchen",
      "to": "preparing",
      "on": "updateOrderStatus",
      "by": "cook"
    },
    {
      "from": "preparing",
      "to": "ready",
      "on": "updateOrderStatus",
      "by": "cook"
    },
    {
      "from": "ready",
      "to": "delivered",
      "on": "updateOrderStatus",
      "by": "attendant"
    },
    {
      "from": "delivered",
      "to": "paid",
      "on": "processPayment",
      "by": "cashier"
    },
    {
      "from": "pending",
      "to": "cancelled",
      "on": "updateOrderStatus",
      "by": "attendant"
    }
  ],
  "operationIds": [
    "launchOrder",
    "updateOrderStatus",
    "processPayment"
  ],
  "entities": [
    "Order",
    "OrderItem",
    "OrderStatusEvent"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "Garantir que o pedido percorra todas as etapas desde a criação até o fechamento com pagamento",
    "steps": [
      "Atendente lança o pedido no POS com os itens selecionados pelo cliente",
      "Cozinheiro visualiza o pedido na cozinha e atualiza o status conforme prepara (recebido → em preparo → pronto)",
      "Caixa processa o pagamento e fecha o pedido"
    ],
    "outcome": "Pedido completo, pago e entregue ao cliente, com rastro de status em cada etapa"
  },
  "capabilities": [
    {
      "capabilityId": "orderLifecycle",
      "title": "Ciclo de Vida do Pedido",
      "actor": "attendant",
      "priority": "now"
    }
  ],
  "pageId": "orderLifecycle",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default workflowOrderLifecycle;
