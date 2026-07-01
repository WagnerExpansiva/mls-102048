/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/orderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "launchOrder",
    "bffName": "cafeFlow.orderLifecycle.launchOrder",
    "routeKey": "cafeFlow.orderLifecycle.launchOrder",
    "purpose": "Lançar Pedido (POS)",
    "kind": "command",
    "input": [
      {
        "name": "type",
        "type": "string",
        "required": true,
        "enum": [
          "dineIn",
          "takeout"
        ],
        "description": "Tipo do pedido: dine-in (mesa) ou takeout"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "pending",
          "sent_to_kitchen",
          "preparing",
          "ready",
          "delivered",
          "paid",
          "cancelled"
        ],
        "description": "Status atual do pedido no fluxo operacional"
      },
      {
        "name": "total",
        "type": "number",
        "required": true,
        "description": "Valor total do pedido"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:launchOrder",
      "operationId": "launchOrder",
      "defPath": "_102048_/l4/operations/launchOrder.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.launchOrder"
    }
  },
  {
    "commandName": "updateOrderStatus",
    "bffName": "cafeFlow.orderLifecycle.updateOrderStatus",
    "routeKey": "cafeFlow.orderLifecycle.updateOrderStatus",
    "purpose": "Atualizar Status do Pedido",
    "kind": "command",
    "input": [
      {
        "name": "orderStatusEventId",
        "type": "string",
        "required": false,
        "description": "Identificador único do evento de status do pedido"
      },
      {
        "name": "orderId",
        "type": "string",
        "required": false,
        "description": "Referência ao pedido ao qual este evento de status pertence"
      },
      {
        "name": "previousStatus",
        "type": "string",
        "required": false,
        "description": "Status anterior do pedido antes da transição (nulo para o primeiro evento)"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "description": "Novo status do pedido registrado por este evento"
      }
    ],
    "output": [
      {
        "name": "orderStatusEventId",
        "type": "string",
        "description": "Identificador único do evento de status do pedido"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateOrderStatus",
      "operationId": "updateOrderStatus",
      "defPath": "_102048_/l4/operations/updateOrderStatus.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.updateOrderStatus"
    }
  },
  {
    "commandName": "processPayment",
    "bffName": "cafeFlow.orderLifecycle.processPayment",
    "routeKey": "cafeFlow.orderLifecycle.processPayment",
    "purpose": "Processar Pagamento e Fechar Pedido",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "pending",
          "sent_to_kitchen",
          "preparing",
          "ready",
          "delivered",
          "paid",
          "cancelled"
        ],
        "description": "Status atual do pedido no fluxo operacional"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:processPayment",
      "operationId": "processPayment",
      "defPath": "_102048_/l4/operations/processPayment.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.processPayment"
    }
  }
];

export const pipeline = [
  {
    "id": "orderLifecycle__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
