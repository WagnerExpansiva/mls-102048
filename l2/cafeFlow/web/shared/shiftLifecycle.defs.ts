/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/shiftLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "shiftLifecycle",
  "pageName": "Ciclo de Vida do Turno Diário",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:shiftLifecycle",
    "operation:viewDashboard",
    "operation:viewShiftReport"
  ],
  "operationIds": [
    "viewDashboard",
    "viewShiftReport"
  ],
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
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/shiftLifecycle.defs.ts",
    "layoutId": "shiftLifecycle.layout"
  },
  "states": [
    {
      "stateKey": "ui.shiftLifecycle.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.action.viewDashboard.status",
      "name": "viewDashboardState",
      "kind": "actionStatus",
      "actionRef": "viewDashboard",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.dailyShiftId",
      "name": "viewDashboardDailyShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "input",
        "field": "dailyShiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.date",
      "name": "viewDashboardDate",
      "kind": "input",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "input",
        "field": "date"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.status",
      "name": "viewDashboardStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.createdAt",
      "name": "viewDashboardCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.updatedAt",
      "name": "viewDashboardUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.data.viewDashboard",
      "name": "viewDashboardData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewDashboard",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.shiftLifecycle.action.viewShiftReport.status",
      "name": "viewShiftReportState",
      "kind": "actionStatus",
      "actionRef": "viewShiftReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId",
      "name": "viewShiftReportShiftCloseReportId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewShiftReport",
        "direction": "input",
        "field": "shiftCloseReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.dailyShiftId",
      "name": "viewShiftReportDailyShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewShiftReport",
        "direction": "input",
        "field": "dailyShiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.createdAt",
      "name": "viewShiftReportCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewShiftReport",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.updatedAt",
      "name": "viewShiftReportUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewShiftReport",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftLifecycle.data.viewShiftReport",
      "name": "viewShiftReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewShiftReport",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "viewDashboard",
      "kind": "query",
      "commandRef": "viewDashboard",
      "routeKey": "cafeFlow.shiftLifecycle.viewDashboard",
      "purpose": "Visualizar Dashboard",
      "methodName": "loadViewDashboard",
      "handlerName": "handleViewDashboardClick",
      "inputStateKeys": [
        "ui.shiftLifecycle.input.viewDashboard.dailyShiftId",
        "ui.shiftLifecycle.input.viewDashboard.date",
        "ui.shiftLifecycle.input.viewDashboard.status",
        "ui.shiftLifecycle.input.viewDashboard.createdAt",
        "ui.shiftLifecycle.input.viewDashboard.updatedAt"
      ],
      "outputStateKeys": [
        "ui.shiftLifecycle.data.viewDashboard"
      ],
      "statusStateKey": "ui.shiftLifecycle.action.viewDashboard.status"
    },
    {
      "actionId": "viewShiftReport",
      "kind": "query",
      "commandRef": "viewShiftReport",
      "routeKey": "cafeFlow.shiftLifecycle.viewShiftReport",
      "purpose": "Visualizar Relatório de Fechamento de Turno",
      "methodName": "loadViewShiftReport",
      "handlerName": "handleViewShiftReportClick",
      "inputStateKeys": [
        "ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId",
        "ui.shiftLifecycle.input.viewShiftReport.dailyShiftId",
        "ui.shiftLifecycle.input.viewShiftReport.createdAt",
        "ui.shiftLifecycle.input.viewShiftReport.updatedAt"
      ],
      "outputStateKeys": [
        "ui.shiftLifecycle.data.viewShiftReport"
      ],
      "statusStateKey": "ui.shiftLifecycle.action.viewShiftReport.status"
    },
    {
      "actionId": "set.viewDashboardDailyShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.dailyShiftId",
      "methodName": "setViewDashboardDailyShiftId",
      "handlerName": "handleViewDashboardDailyShiftIdChange"
    },
    {
      "actionId": "set.viewDashboardDate",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.date",
      "methodName": "setViewDashboardDate",
      "handlerName": "handleViewDashboardDateChange"
    },
    {
      "actionId": "set.viewDashboardStatus",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.status",
      "methodName": "setViewDashboardStatus",
      "handlerName": "handleViewDashboardStatusChange"
    },
    {
      "actionId": "set.viewDashboardCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.createdAt",
      "methodName": "setViewDashboardCreatedAt",
      "handlerName": "handleViewDashboardCreatedAtChange"
    },
    {
      "actionId": "set.viewDashboardUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewDashboard.updatedAt",
      "methodName": "setViewDashboardUpdatedAt",
      "handlerName": "handleViewDashboardUpdatedAtChange"
    },
    {
      "actionId": "set.viewShiftReportShiftCloseReportId",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId",
      "methodName": "setViewShiftReportShiftCloseReportId",
      "handlerName": "handleViewShiftReportShiftCloseReportIdChange"
    },
    {
      "actionId": "set.viewShiftReportDailyShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.dailyShiftId",
      "methodName": "setViewShiftReportDailyShiftId",
      "handlerName": "handleViewShiftReportDailyShiftIdChange"
    },
    {
      "actionId": "set.viewShiftReportCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.createdAt",
      "methodName": "setViewShiftReportCreatedAt",
      "handlerName": "handleViewShiftReportCreatedAtChange"
    },
    {
      "actionId": "set.viewShiftReportUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.shiftLifecycle.input.viewShiftReport.updatedAt",
      "methodName": "setViewShiftReportUpdatedAt",
      "handlerName": "handleViewShiftReportUpdatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewDashboard",
      "stateKey": "ui.shiftLifecycle.data.viewDashboard"
    },
    {
      "actionId": "viewShiftReport",
      "stateKey": "ui.shiftLifecycle.data.viewShiftReport"
    }
  ],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "shiftLifecycle.section.main.title": "Ciclo de Vida do Turno Diário",
    "shiftLifecycle.organism.viewDashboard.title": "Visualizar Dashboard",
    "shiftLifecycle.intention.viewDashboard.query.title": "Query List",
    "shiftLifecycle.field.dailyShiftId": "Daily Shift Id",
    "shiftLifecycle.field.date": "Date",
    "shiftLifecycle.field.openTime": "Open Time",
    "shiftLifecycle.field.closeTime": "Close Time",
    "shiftLifecycle.field.status": "Status",
    "shiftLifecycle.field.totalSales": "Total Sales",
    "shiftLifecycle.field.createdAt": "Created At",
    "shiftLifecycle.field.updatedAt": "Updated At",
    "shiftLifecycle.action.viewDashboard": "View Dashboard",
    "shiftLifecycle.organism.viewShiftReport.title": "Visualizar Relatório de Fechamento de Turno",
    "shiftLifecycle.intention.viewShiftReport.query.title": "Query List",
    "shiftLifecycle.field.shiftCloseReportId": "Shift Close Report Id",
    "shiftLifecycle.field.totalOrders": "Total Orders",
    "shiftLifecycle.field.bestSellingItems": "Best Selling Items",
    "shiftLifecycle.field.stockConsumptionSummary": "Stock Consumption Summary",
    "shiftLifecycle.field.operationalMetrics": "Operational Metrics",
    "shiftLifecycle.action.viewShiftReport": "View Shift Report",
    "shiftLifecycle.intention.summary.title": "Summary"
  },
  "automation": {
    "statePrefix": "ui.shiftLifecycle",
    "stateKeys": [
      "ui.shiftLifecycle.status",
      "ui.shiftLifecycle.action.viewDashboard.status",
      "ui.shiftLifecycle.input.viewDashboard.dailyShiftId",
      "ui.shiftLifecycle.input.viewDashboard.date",
      "ui.shiftLifecycle.input.viewDashboard.status",
      "ui.shiftLifecycle.input.viewDashboard.createdAt",
      "ui.shiftLifecycle.input.viewDashboard.updatedAt",
      "ui.shiftLifecycle.data.viewDashboard",
      "ui.shiftLifecycle.action.viewShiftReport.status",
      "ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId",
      "ui.shiftLifecycle.input.viewShiftReport.dailyShiftId",
      "ui.shiftLifecycle.input.viewShiftReport.createdAt",
      "ui.shiftLifecycle.input.viewShiftReport.updatedAt",
      "ui.shiftLifecycle.data.viewShiftReport"
    ],
    "actionIds": [
      "viewDashboard",
      "viewShiftReport",
      "set.viewDashboardDailyShiftId",
      "set.viewDashboardDate",
      "set.viewDashboardStatus",
      "set.viewDashboardCreatedAt",
      "set.viewDashboardUpdatedAt",
      "set.viewShiftReportShiftCloseReportId",
      "set.viewShiftReportDailyShiftId",
      "set.viewShiftReportCreatedAt",
      "set.viewShiftReportUpdatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "shiftLifecycle__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/shiftLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/shiftLifecycle.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "shiftLifecycle__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
