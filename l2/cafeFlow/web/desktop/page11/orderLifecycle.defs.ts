/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/orderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "orderLifecycle",
  "pageName": "Ciclo de Vida do Pedido",
  "actor": "attendant",
  "purpose": "Executar Ciclo de Vida do Pedido.",
  "capabilities": [
    "orderLifecycle",
    "launchOrder",
    "updateOrderStatus",
    "processPayment"
  ],
  "flowRefs": {
    "experienceFlows": [
      "orderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "orderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-orderLifecycle-main",
      "type": "section",
      "sectionName": "Ciclo de Vida do Pedido",
      "titleKey": "orderLifecycle.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-launchOrder",
          "type": "organism",
          "organismName": "LaunchOrder",
          "titleKey": "orderLifecycle.organism.launchOrder.title",
          "purpose": "Lançar Pedido (POS)",
          "userActions": [
            "launchOrder"
          ],
          "requiredEntities": [
            "Order",
            "MenuItem",
            "Table",
            "DailyShift",
            "StockItem",
            "StockLevel",
            "OrderItem",
            "OrderStatusEvent"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "stockConsumptionRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-launchOrder-form",
              "intent": "commandForm",
              "submitAction": "launchOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "org-updateOrderStatus",
          "type": "organism",
          "organismName": "UpdateOrderStatus",
          "titleKey": "orderLifecycle.organism.updateOrderStatus.title",
          "purpose": "Atualizar Status do Pedido",
          "userActions": [
            "updateOrderStatus"
          ],
          "requiredEntities": [
            "OrderStatusEvent",
            "Order"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-updateOrderStatus-form",
              "intent": "commandForm",
              "submitAction": "updateOrderStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org-processPayment",
          "type": "organism",
          "organismName": "ProcessPayment",
          "titleKey": "orderLifecycle.organism.processPayment.title",
          "purpose": "Processar Pagamento e Fechar Pedido",
          "userActions": [
            "processPayment"
          ],
          "requiredEntities": [
            "Order"
          ],
          "readsFields": [
            "Order.status",
            "Order.total"
          ],
          "writesFields": [
            "Order.status",
            "Order.updatedAt"
          ],
          "rulesApplied": [],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-processPayment-form",
              "intent": "commandForm",
              "submitAction": "processPayment",
              "order": 10
            }
          ]
        },
        {
          "id": "org-orderLifecycle-summary",
          "type": "organism",
          "organismName": "OrderLifecycleSummary",
          "titleKey": "orderLifecycle.organism.summary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página.",
          "userActions": [],
          "requiredEntities": [
            "Order"
          ],
          "readsFields": [
            "Order.status",
            "Order.total"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent-orderLifecycle-summary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "orderLifecycle.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-orderLifecycle-main",
        "type": "section",
        "sectionName": "Ciclo de Vida do Pedido",
        "titleKey": "orderLifecycle.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-launchOrder",
            "type": "organism",
            "organismName": "LaunchOrder",
            "titleKey": "orderLifecycle.organism.launchOrder.title",
            "purpose": "Lançar Pedido (POS)",
            "userActions": [
              "launchOrder"
            ],
            "requiredEntities": [
              "Order",
              "MenuItem",
              "Table",
              "DailyShift",
              "StockItem",
              "StockLevel",
              "OrderItem",
              "OrderStatusEvent"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "stockConsumptionRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-launchOrder-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "orderLifecycle.intent.launchOrder.form.title",
                "submitAction": "launchOrder",
                "fields": [
                  {
                    "id": "field-launchOrder-type",
                    "field": "type",
                    "labelKey": "orderLifecycle.field.launchOrder.type",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.orderLifecycle.input.launchOrder.type"
                  },
                  {
                    "id": "field-launchOrder-status",
                    "field": "status",
                    "labelKey": "orderLifecycle.field.launchOrder.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.orderLifecycle.input.launchOrder.status"
                  },
                  {
                    "id": "field-launchOrder-total",
                    "field": "total",
                    "labelKey": "orderLifecycle.field.launchOrder.total",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.orderLifecycle.input.launchOrder.total"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-launchOrder-submit",
                    "action": "launchOrder",
                    "labelKey": "orderLifecycle.action.launchOrder.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "launchOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-updateOrderStatus",
            "type": "organism",
            "organismName": "UpdateOrderStatus",
            "titleKey": "orderLifecycle.organism.updateOrderStatus.title",
            "purpose": "Atualizar Status do Pedido",
            "userActions": [
              "updateOrderStatus"
            ],
            "requiredEntities": [
              "OrderStatusEvent",
              "Order"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent-updateOrderStatus-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "orderLifecycle.intent.updateOrderStatus.form.title",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field-updateOrderStatus-orderStatusEventId",
                    "field": "orderStatusEventId",
                    "labelKey": "orderLifecycle.field.updateOrderStatus.orderStatusEventId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId"
                  },
                  {
                    "id": "field-updateOrderStatus-orderId",
                    "field": "orderId",
                    "labelKey": "orderLifecycle.field.updateOrderStatus.orderId",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.orderLifecycle.input.updateOrderStatus.orderId"
                  },
                  {
                    "id": "field-updateOrderStatus-previousStatus",
                    "field": "previousStatus",
                    "labelKey": "orderLifecycle.field.updateOrderStatus.previousStatus",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.orderLifecycle.input.updateOrderStatus.previousStatus"
                  },
                  {
                    "id": "field-updateOrderStatus-status",
                    "field": "status",
                    "labelKey": "orderLifecycle.field.updateOrderStatus.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.orderLifecycle.input.updateOrderStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-updateOrderStatus-submit",
                    "action": "updateOrderStatus",
                    "labelKey": "orderLifecycle.action.updateOrderStatus.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOrderStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-processPayment",
            "type": "organism",
            "organismName": "ProcessPayment",
            "titleKey": "orderLifecycle.organism.processPayment.title",
            "purpose": "Processar Pagamento e Fechar Pedido",
            "userActions": [
              "processPayment"
            ],
            "requiredEntities": [
              "Order"
            ],
            "readsFields": [
              "Order.status",
              "Order.total"
            ],
            "writesFields": [
              "Order.status",
              "Order.updatedAt"
            ],
            "rulesApplied": [],
            "order": 30,
            "intentions": [
              {
                "id": "intent-processPayment-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "orderLifecycle.intent.processPayment.form.title",
                "submitAction": "processPayment",
                "fields": [
                  {
                    "id": "field-processPayment-status",
                    "field": "status",
                    "labelKey": "orderLifecycle.field.processPayment.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.orderLifecycle.input.processPayment.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-processPayment-submit",
                    "action": "processPayment",
                    "labelKey": "orderLifecycle.action.processPayment.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "processPayment"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-orderLifecycle-summary",
            "type": "organism",
            "organismName": "OrderLifecycleSummary",
            "titleKey": "orderLifecycle.organism.summary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página.",
            "userActions": [],
            "requiredEntities": [
              "Order"
            ],
            "readsFields": [
              "Order.status",
              "Order.total"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 40,
            "intentions": [
              {
                "id": "intent-orderLifecycle-summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "orderLifecycle.intent.summary.title",
                "fields": [
                  {
                    "id": "field-summary-status",
                    "field": "status",
                    "labelKey": "orderLifecycle.field.summary.status",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "field-summary-total",
                    "field": "total",
                    "labelKey": "orderLifecycle.field.summary.total",
                    "order": 20,
                    "required": false
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "orderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/orderLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/orderLifecycle.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/orderLifecycle.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/orderLifecycle.ts",
      "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts"
    ],
    "dependsOn": [
      "orderLifecycle__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Limpo e prático, otimizado para toque em tablet/computador no caixa e na cozinha; cores quentes e acolhedoras (tons de café), tipografia legível em alta velocidade."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
