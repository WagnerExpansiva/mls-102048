/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/shiftLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "shiftLifecycle",
  "pageName": "Ciclo de Vida do Turno Diário",
  "actor": "manager",
  "purpose": "Executar Ciclo de Vida do Turno Diário.",
  "capabilities": [
    "shiftLifecycle",
    "viewDashboard",
    "viewShiftReport"
  ],
  "flowRefs": {
    "experienceFlows": [
      "shiftLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "shiftLifecycle"
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
        "id": "shiftLifecycle",
        "defPath": "_102048_/l4/workflows/shiftLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewDashboard",
        "defPath": "_102048_/l4/operations/viewDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewShiftReport",
        "defPath": "_102048_/l4/operations/viewShiftReport.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.shiftLifecycle.main",
      "type": "section",
      "sectionName": "Ciclo de Vida do Turno Diário",
      "titleKey": "shiftLifecycle.section.main.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism.viewDashboard",
          "type": "query",
          "organismName": "ViewDashboard",
          "titleKey": "shiftLifecycle.organism.viewDashboard.title",
          "purpose": "Visualizar Dashboard",
          "userActions": [
            "viewDashboard"
          ],
          "requiredEntities": [
            "DailyShift",
            "Order",
            "OrderItem",
            "OrderStatusEvent"
          ],
          "readsFields": [
            "dailyShiftId",
            "date",
            "status",
            "openTime",
            "closeTime",
            "totalSales",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.viewDashboard.query",
              "intent": "queryList",
              "stateKey": "ui.shiftLifecycle.data.viewDashboard",
              "action": "viewDashboard",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.viewShiftReport",
          "type": "query",
          "organismName": "ViewShiftReport",
          "titleKey": "shiftLifecycle.organism.viewShiftReport.title",
          "purpose": "Visualizar Relatório de Fechamento de Turno",
          "userActions": [
            "viewShiftReport"
          ],
          "requiredEntities": [
            "ShiftCloseReport",
            "DailyShift"
          ],
          "readsFields": [
            "shiftCloseReportId",
            "dailyShiftId",
            "totalSales",
            "totalOrders",
            "bestSellingItems",
            "stockConsumptionSummary",
            "operationalMetrics",
            "createdAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention.viewShiftReport.query",
              "intent": "queryList",
              "stateKey": "ui.shiftLifecycle.data.viewShiftReport",
              "action": "viewShiftReport",
              "order": 10
            },
            {
              "id": "intention.shiftLifecycle.summary",
              "intent": "summary",
              "stateKey": "ui.shiftLifecycle.data.viewShiftReport",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "shiftLifecycle.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.shiftLifecycle.main",
        "type": "section",
        "sectionName": "Ciclo de Vida do Turno Diário",
        "titleKey": "shiftLifecycle.section.main.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism.viewDashboard",
            "type": "query",
            "organismName": "ViewDashboard",
            "titleKey": "shiftLifecycle.organism.viewDashboard.title",
            "purpose": "Visualizar Dashboard",
            "userActions": [
              "viewDashboard"
            ],
            "requiredEntities": [
              "DailyShift",
              "Order",
              "OrderItem",
              "OrderStatusEvent"
            ],
            "readsFields": [
              "dailyShiftId",
              "date",
              "status",
              "openTime",
              "closeTime",
              "totalSales",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intention.viewDashboard.query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "shiftLifecycle.intention.viewDashboard.query.title",
                "source": "viewDashboard",
                "action": "viewDashboard",
                "fields": [],
                "columns": [
                  {
                    "id": "col.viewDashboard.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "shiftLifecycle.field.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.date",
                    "field": "date",
                    "labelKey": "shiftLifecycle.field.date",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.openTime",
                    "field": "openTime",
                    "labelKey": "shiftLifecycle.field.openTime",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.closeTime",
                    "field": "closeTime",
                    "labelKey": "shiftLifecycle.field.closeTime",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.status",
                    "field": "status",
                    "labelKey": "shiftLifecycle.field.status",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.totalSales",
                    "field": "totalSales",
                    "labelKey": "shiftLifecycle.field.totalSales",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.createdAt",
                    "field": "createdAt",
                    "labelKey": "shiftLifecycle.field.createdAt",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  },
                  {
                    "id": "col.viewDashboard.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "shiftLifecycle.field.updatedAt",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewDashboard"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.viewDashboard.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "shiftLifecycle.field.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewDashboard.dailyShiftId"
                  },
                  {
                    "id": "filter.viewDashboard.date",
                    "field": "date",
                    "labelKey": "shiftLifecycle.field.date",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewDashboard.date"
                  },
                  {
                    "id": "filter.viewDashboard.status",
                    "field": "status",
                    "labelKey": "shiftLifecycle.field.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewDashboard.status"
                  },
                  {
                    "id": "filter.viewDashboard.createdAt",
                    "field": "createdAt",
                    "labelKey": "shiftLifecycle.field.createdAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewDashboard.createdAt"
                  },
                  {
                    "id": "filter.viewDashboard.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "shiftLifecycle.field.updatedAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewDashboard.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.viewDashboard.view",
                    "action": "viewDashboard",
                    "labelKey": "shiftLifecycle.action.viewDashboard",
                    "order": 10,
                    "actionKey": "viewDashboard"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.viewDashboard.view",
                    "action": "viewDashboard",
                    "labelKey": "shiftLifecycle.action.viewDashboard",
                    "order": 10,
                    "actionKey": "viewDashboard"
                  }
                ],
                "stateKey": "ui.shiftLifecycle.data.viewDashboard"
              }
            ]
          },
          {
            "id": "organism.viewShiftReport",
            "type": "query",
            "organismName": "ViewShiftReport",
            "titleKey": "shiftLifecycle.organism.viewShiftReport.title",
            "purpose": "Visualizar Relatório de Fechamento de Turno",
            "userActions": [
              "viewShiftReport"
            ],
            "requiredEntities": [
              "ShiftCloseReport",
              "DailyShift"
            ],
            "readsFields": [
              "shiftCloseReportId",
              "dailyShiftId",
              "totalSales",
              "totalOrders",
              "bestSellingItems",
              "stockConsumptionSummary",
              "operationalMetrics",
              "createdAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intention.viewShiftReport.query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "shiftLifecycle.intention.viewShiftReport.query.title",
                "source": "viewShiftReport",
                "action": "viewShiftReport",
                "fields": [],
                "columns": [
                  {
                    "id": "col.viewShiftReport.shiftCloseReportId",
                    "field": "shiftCloseReportId",
                    "labelKey": "shiftLifecycle.field.shiftCloseReportId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "shiftLifecycle.field.dailyShiftId",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.totalSales",
                    "field": "totalSales",
                    "labelKey": "shiftLifecycle.field.totalSales",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.totalOrders",
                    "field": "totalOrders",
                    "labelKey": "shiftLifecycle.field.totalOrders",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.bestSellingItems",
                    "field": "bestSellingItems",
                    "labelKey": "shiftLifecycle.field.bestSellingItems",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.stockConsumptionSummary",
                    "field": "stockConsumptionSummary",
                    "labelKey": "shiftLifecycle.field.stockConsumptionSummary",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.operationalMetrics",
                    "field": "operationalMetrics",
                    "labelKey": "shiftLifecycle.field.operationalMetrics",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "col.viewShiftReport.createdAt",
                    "field": "createdAt",
                    "labelKey": "shiftLifecycle.field.createdAt",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.viewShiftReport.shiftCloseReportId",
                    "field": "shiftCloseReportId",
                    "labelKey": "shiftLifecycle.field.shiftCloseReportId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId"
                  },
                  {
                    "id": "filter.viewShiftReport.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "shiftLifecycle.field.dailyShiftId",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewShiftReport.dailyShiftId"
                  },
                  {
                    "id": "filter.viewShiftReport.createdAt",
                    "field": "createdAt",
                    "labelKey": "shiftLifecycle.field.createdAt",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewShiftReport.createdAt"
                  },
                  {
                    "id": "filter.viewShiftReport.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "shiftLifecycle.field.updatedAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.input.viewShiftReport.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.viewShiftReport.view",
                    "action": "viewShiftReport",
                    "labelKey": "shiftLifecycle.action.viewShiftReport",
                    "order": 10,
                    "actionKey": "viewShiftReport"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.viewShiftReport.view",
                    "action": "viewShiftReport",
                    "labelKey": "shiftLifecycle.action.viewShiftReport",
                    "order": 10,
                    "actionKey": "viewShiftReport"
                  }
                ],
                "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
              },
              {
                "id": "intention.shiftLifecycle.summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "shiftLifecycle.intention.summary.title",
                "fields": [
                  {
                    "id": "field.summary.totalSales",
                    "field": "totalSales",
                    "labelKey": "shiftLifecycle.field.totalSales",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "field.summary.totalOrders",
                    "field": "totalOrders",
                    "labelKey": "shiftLifecycle.field.totalOrders",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "field.summary.bestSellingItems",
                    "field": "bestSellingItems",
                    "labelKey": "shiftLifecycle.field.bestSellingItems",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "field.summary.stockConsumptionSummary",
                    "field": "stockConsumptionSummary",
                    "labelKey": "shiftLifecycle.field.stockConsumptionSummary",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  },
                  {
                    "id": "field.summary.operationalMetrics",
                    "field": "operationalMetrics",
                    "labelKey": "shiftLifecycle.field.operationalMetrics",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
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
    "id": "shiftLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/shiftLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/shiftLifecycle.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/shiftLifecycle.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/shiftLifecycle.ts",
      "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts"
    ],
    "dependsOn": [
      "shiftLifecycle__l2_shared"
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
