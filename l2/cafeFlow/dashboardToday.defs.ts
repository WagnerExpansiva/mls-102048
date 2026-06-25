/// <mls fileReference="_102048_/l2/cafeFlow/dashboardToday.defs.ts" enhancement="_blank"/>

export const dashboardTodayPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dashboardToday",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 97,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dashboardToday",
      "pageName": "Dashboard (Hoje)",
      "actor": "managerOwner",
      "purpose": "Ver status do turno e acompanhar vendas de hoje, itens mais vendidos e alertas de estoque baixo para decidir ações operacionais.",
      "capabilities": [
        "dailyShiftOpenClose",
        "viewDashboardToday",
        "viewShiftCloseReport"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "dailyShiftLifecycle"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "shiftOpen",
          "trigger": "Tocar em \"Abrir turno\""
        },
        {
          "direction": "outbound",
          "pageId": "shiftClose",
          "trigger": "Tocar em \"Fechar turno\""
        },
        {
          "direction": "outbound",
          "pageId": "inventoryLowStock",
          "trigger": "Tocar no card \"Estoque baixo\""
        },
        {
          "direction": "outbound",
          "pageId": "ordersTracker",
          "trigger": "Ver/abrir lista de pedidos pendentes"
        }
      ],
      "sections": [
        {
          "sectionName": "Status do turno",
          "mode": "view",
          "organisms": [
            {
              "organismName": "shiftStatusCard",
              "purpose": "Mostrar se o turno de hoje está aberto ou fechado e permitir ação principal.",
              "userActions": [
                "Abrir turno",
                "Fechar turno"
              ],
              "requiredEntities": [
                "DailyShift"
              ],
              "readsFields": [
                "DailyShift.dailyShiftId",
                "DailyShift.shiftDate",
                "DailyShift.status",
                "DailyShift.openedAt",
                "DailyShift.closedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "metricsDerivedFromClosedOrders"
              ]
            }
          ]
        },
        {
          "sectionName": "Métricas de hoje",
          "mode": "view",
          "organisms": [
            {
              "organismName": "todaySalesMetricsCards",
              "purpose": "Exibir cartões de vendas do dia (receita, pedidos, ticket médio).",
              "userActions": [
                "Ver cartões de métricas do dia"
              ],
              "requiredEntities": [
                "Order"
              ],
              "readsFields": [
                "Order.totalAmount",
                "Order.status",
                "Order.closedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "metricsDerivedFromClosedOrders"
              ]
            },
            {
              "organismName": "topSellingItemsCard",
              "purpose": "Exibir itens mais vendidos do dia para decisão rápida.",
              "userActions": [
                "Ver cartões de métricas do dia"
              ],
              "requiredEntities": [
                "Order"
              ],
              "readsFields": [
                "Order.status",
                "Order.closedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "metricsDerivedFromClosedOrders"
              ]
            },
            {
              "organismName": "pendingOrdersSummary",
              "purpose": "Mostrar contagem de pedidos pendentes com acesso rápido ao tracker.",
              "userActions": [
                "Ver/abrir lista de pedidos pendentes"
              ],
              "requiredEntities": [
                "Order"
              ],
              "readsFields": [
                "Order.status",
                "Order.orderNumber"
              ],
              "writesFields": [],
              "rulesApplied": [
                "metricsDerivedFromClosedOrders"
              ]
            }
          ]
        },
        {
          "sectionName": "Alertas operacionais",
          "mode": "view",
          "organisms": [
            {
              "organismName": "lowStockAlertsCard",
              "purpose": "Exibir alertas de estoque baixo do dia e permitir abrir a lista completa.",
              "userActions": [
                "Abrir alertas (ex.: estoque baixo)"
              ],
              "requiredEntities": [
                "InventoryBalanceSnapshot"
              ],
              "readsFields": [
                "InventoryBalanceSnapshot.inventoryItemId",
                "InventoryBalanceSnapshot.quantityOnHand",
                "InventoryBalanceSnapshot.recordedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "metricsDerivedFromClosedOrders"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getTodayDashboardMetrics",
        "purpose": "Carregar métricas do dia e status do turno.",
        "kind": "query",
        "input": [],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "uuid"
          },
          {
            "name": "shiftDate",
            "type": "date"
          },
          {
            "name": "shiftStatus",
            "type": "string"
          },
          {
            "name": "openedAt",
            "type": "datetime"
          },
          {
            "name": "closedAt",
            "type": "datetime"
          },
          {
            "name": "totalRevenue",
            "type": "currency"
          },
          {
            "name": "totalOrders",
            "type": "number"
          },
          {
            "name": "totalItemsSold",
            "type": "number"
          },
          {
            "name": "averageTicket",
            "type": "currency"
          },
          {
            "name": "topItems",
            "type": "string"
          },
          {
            "name": "lowStockCount",
            "type": "number"
          },
          {
            "name": "pendingOrdersCount",
            "type": "number"
          }
        ],
        "readsEntities": [
          "DailyShift"
        ],
        "writesEntities": [],
        "readsTables": [
          "today_sales_metrics",
          "top_selling_items_metrics",
          "low_stock_metrics",
          "daily_shift"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "getTodayDashboardMetrics"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "metricsDerivedFromClosedOrders"
        ]
      }
    ]
  }
} as const;

export default dashboardTodayPagePlan;
