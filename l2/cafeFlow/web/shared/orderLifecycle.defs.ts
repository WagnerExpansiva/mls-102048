/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/orderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "orderLifecycle",
  "pageName": "Ciclo de Vida do Pedido",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:orderLifecycle",
    "operation:launchOrder",
    "operation:updateOrderStatus",
    "operation:processPayment"
  ],
  "operationIds": [
    "launchOrder",
    "updateOrderStatus",
    "processPayment"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "workflow",
    "owners": [
      {
        "kind": "workflow",
        "id": "orderLifecycle",
        "defPath": "_102048_/l4/workflows/orderLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "launchOrder",
        "defPath": "_102048_/l4/operations/launchOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateOrderStatus",
        "defPath": "_102048_/l4/operations/updateOrderStatus.defs.ts"
      },
      {
        "kind": "operation",
        "id": "processPayment",
        "defPath": "_102048_/l4/operations/processPayment.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/orderLifecycle.defs.ts",
    "layoutId": "orderLifecycle.layout"
  },
  "states": [
    {
      "stateKey": "ui.orderLifecycle.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.action.launchOrder.status",
      "name": "launchOrderState",
      "kind": "actionStatus",
      "actionRef": "launchOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.orderLifecycle.input.launchOrder.type",
      "name": "launchOrderType",
      "kind": "input",
      "contractRef": {
        "commandName": "launchOrder",
        "direction": "input",
        "field": "type"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.input.launchOrder.status",
      "name": "launchOrderStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "launchOrder",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.input.launchOrder.total",
      "name": "launchOrderTotal",
      "kind": "input",
      "contractRef": {
        "commandName": "launchOrder",
        "direction": "input",
        "field": "total"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.action.updateOrderStatus.status",
      "name": "updateOrderStatusState",
      "kind": "actionStatus",
      "actionRef": "updateOrderStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId",
      "name": "updateOrderStatusOrderStatusEventId",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "orderStatusEventId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderId",
      "name": "updateOrderStatusOrderId",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "orderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.previousStatus",
      "name": "updateOrderStatusPreviousStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "previousStatus"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.status",
      "name": "updateOrderStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.orderLifecycle.action.processPayment.status",
      "name": "processPaymentState",
      "kind": "actionStatus",
      "actionRef": "processPayment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.orderLifecycle.input.processPayment.status",
      "name": "processPaymentStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "processPayment",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "launchOrder",
      "kind": "command",
      "commandRef": "launchOrder",
      "routeKey": "cafeFlow.orderLifecycle.launchOrder",
      "purpose": "Lançar Pedido (POS)",
      "methodName": "launchOrder",
      "handlerName": "handleLaunchOrderClick",
      "inputStateKeys": [
        "ui.orderLifecycle.input.launchOrder.type",
        "ui.orderLifecycle.input.launchOrder.status",
        "ui.orderLifecycle.input.launchOrder.total"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.orderLifecycle.action.launchOrder.status"
    },
    {
      "actionId": "updateOrderStatus",
      "kind": "command",
      "commandRef": "updateOrderStatus",
      "routeKey": "cafeFlow.orderLifecycle.updateOrderStatus",
      "purpose": "Atualizar Status do Pedido",
      "methodName": "updateOrderStatus",
      "handlerName": "handleUpdateOrderStatusClick",
      "inputStateKeys": [
        "ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId",
        "ui.orderLifecycle.input.updateOrderStatus.orderId",
        "ui.orderLifecycle.input.updateOrderStatus.previousStatus",
        "ui.orderLifecycle.input.updateOrderStatus.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.orderLifecycle.action.updateOrderStatus.status"
    },
    {
      "actionId": "processPayment",
      "kind": "command",
      "commandRef": "processPayment",
      "routeKey": "cafeFlow.orderLifecycle.processPayment",
      "purpose": "Processar Pagamento e Fechar Pedido",
      "methodName": "processPayment",
      "handlerName": "handleProcessPaymentClick",
      "inputStateKeys": [
        "ui.orderLifecycle.input.processPayment.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.orderLifecycle.action.processPayment.status"
    },
    {
      "actionId": "set.launchOrderType",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.launchOrder.type",
      "methodName": "setLaunchOrderType",
      "handlerName": "handleLaunchOrderTypeChange"
    },
    {
      "actionId": "set.launchOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.launchOrder.status",
      "methodName": "setLaunchOrderStatus",
      "handlerName": "handleLaunchOrderStatusChange"
    },
    {
      "actionId": "set.launchOrderTotal",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.launchOrder.total",
      "methodName": "setLaunchOrderTotal",
      "handlerName": "handleLaunchOrderTotalChange"
    },
    {
      "actionId": "set.updateOrderStatusOrderStatusEventId",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId",
      "methodName": "setUpdateOrderStatusOrderStatusEventId",
      "handlerName": "handleUpdateOrderStatusOrderStatusEventIdChange"
    },
    {
      "actionId": "set.updateOrderStatusOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderId",
      "methodName": "setUpdateOrderStatusOrderId",
      "handlerName": "handleUpdateOrderStatusOrderIdChange"
    },
    {
      "actionId": "set.updateOrderStatusPreviousStatus",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.previousStatus",
      "methodName": "setUpdateOrderStatusPreviousStatus",
      "handlerName": "handleUpdateOrderStatusPreviousStatusChange"
    },
    {
      "actionId": "set.updateOrderStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.updateOrderStatus.status",
      "methodName": "setUpdateOrderStatusStatus",
      "handlerName": "handleUpdateOrderStatusStatusChange"
    },
    {
      "actionId": "set.processPaymentStatus",
      "kind": "stateSetter",
      "stateKey": "ui.orderLifecycle.input.processPayment.status",
      "methodName": "setProcessPaymentStatus",
      "handlerName": "handleProcessPaymentStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "orderLifecycle.section.main.title": "Ciclo de Vida do Pedido",
    "orderLifecycle.organism.launchOrder.title": "Lançar Pedido (POS)",
    "orderLifecycle.intent.launchOrder.form.title": "Command Form",
    "orderLifecycle.field.launchOrder.type": "Type",
    "orderLifecycle.field.launchOrder.status": "Status",
    "orderLifecycle.field.launchOrder.total": "Total",
    "orderLifecycle.action.launchOrder.submit": "Launch Order",
    "orderLifecycle.organism.updateOrderStatus.title": "Atualizar Status do Pedido",
    "orderLifecycle.intent.updateOrderStatus.form.title": "Command Form",
    "orderLifecycle.field.updateOrderStatus.orderStatusEventId": "Order Status Event Id",
    "orderLifecycle.field.updateOrderStatus.orderId": "Order Id",
    "orderLifecycle.field.updateOrderStatus.previousStatus": "Previous Status",
    "orderLifecycle.field.updateOrderStatus.status": "Status",
    "orderLifecycle.action.updateOrderStatus.submit": "Update Order Status",
    "orderLifecycle.organism.processPayment.title": "Processar Pagamento e Fechar Pedido",
    "orderLifecycle.intent.processPayment.form.title": "Command Form",
    "orderLifecycle.field.processPayment.status": "Status",
    "orderLifecycle.action.processPayment.submit": "Process Payment",
    "orderLifecycle.organism.summary.title": "Revisar o contexto e o resultado das ações principais da página",
    "orderLifecycle.intent.summary.title": "Summary",
    "orderLifecycle.field.summary.status": "Status",
    "orderLifecycle.field.summary.total": "Total"
  },
  "automation": {
    "statePrefix": "ui.orderLifecycle",
    "stateKeys": [
      "ui.orderLifecycle.status",
      "ui.orderLifecycle.action.launchOrder.status",
      "ui.orderLifecycle.input.launchOrder.type",
      "ui.orderLifecycle.input.launchOrder.status",
      "ui.orderLifecycle.input.launchOrder.total",
      "ui.orderLifecycle.action.updateOrderStatus.status",
      "ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId",
      "ui.orderLifecycle.input.updateOrderStatus.orderId",
      "ui.orderLifecycle.input.updateOrderStatus.previousStatus",
      "ui.orderLifecycle.input.updateOrderStatus.status",
      "ui.orderLifecycle.action.processPayment.status",
      "ui.orderLifecycle.input.processPayment.status"
    ],
    "actionIds": [
      "launchOrder",
      "updateOrderStatus",
      "processPayment",
      "set.launchOrderType",
      "set.launchOrderStatus",
      "set.launchOrderTotal",
      "set.updateOrderStatusOrderStatusEventId",
      "set.updateOrderStatusOrderId",
      "set.updateOrderStatusPreviousStatus",
      "set.updateOrderStatusStatus",
      "set.processPaymentStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "orderLifecycle__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/orderLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/orderLifecycle.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "orderLifecycle__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
