/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryTable",
  "pageName": "Consultar Mesas",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryTable"
  ],
  "operationIds": [
    "queryTable"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "queryTable",
        "defPath": "_102048_/l4/operations/queryTable.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryTable.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/queryTable.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryTable.defs.ts",
    "layoutId": "queryTable.layout"
  },
  "states": [
    {
      "stateKey": "ui.queryTable.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryTable.action.queryTable.status",
      "name": "queryTableState",
      "kind": "actionStatus",
      "actionRef": "queryTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.queryTable.input.queryTable.tableId",
      "name": "queryTableTableId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTable",
        "direction": "input",
        "field": "tableId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryTable.input.queryTable.status",
      "name": "queryTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryTable.input.queryTable.createdAt",
      "name": "queryTableCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTable",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryTable.input.queryTable.updatedAt",
      "name": "queryTableUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTable",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryTable.data.queryTable",
      "name": "queryTableData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryTable",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "queryTable",
      "kind": "query",
      "commandRef": "queryTable",
      "routeKey": "cafeFlow.queryTable.queryTable",
      "purpose": "Consultar Mesas",
      "methodName": "loadQueryTable",
      "handlerName": "handleQueryTableClick",
      "inputStateKeys": [
        "ui.queryTable.input.queryTable.tableId",
        "ui.queryTable.input.queryTable.status",
        "ui.queryTable.input.queryTable.createdAt",
        "ui.queryTable.input.queryTable.updatedAt"
      ],
      "outputStateKeys": [
        "ui.queryTable.data.queryTable"
      ],
      "statusStateKey": "ui.queryTable.action.queryTable.status"
    },
    {
      "actionId": "set.queryTableTableId",
      "kind": "stateSetter",
      "stateKey": "ui.queryTable.input.queryTable.tableId",
      "methodName": "setQueryTableTableId",
      "handlerName": "handleQueryTableTableIdChange"
    },
    {
      "actionId": "set.queryTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.queryTable.input.queryTable.status",
      "methodName": "setQueryTableStatus",
      "handlerName": "handleQueryTableStatusChange"
    },
    {
      "actionId": "set.queryTableCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.queryTable.input.queryTable.createdAt",
      "methodName": "setQueryTableCreatedAt",
      "handlerName": "handleQueryTableCreatedAtChange"
    },
    {
      "actionId": "set.queryTableUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.queryTable.input.queryTable.updatedAt",
      "methodName": "setQueryTableUpdatedAt",
      "handlerName": "handleQueryTableUpdatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryTable",
      "stateKey": "ui.queryTable.data.queryTable"
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
    "queryTable.section.title": "Consultar Mesas",
    "queryTable.organism.title": "Consultar Mesas",
    "queryTable.intent.list.title": "Lista de mesas",
    "queryTable.field.tableId": "ID da mesa",
    "queryTable.field.tableNumber": "Número da mesa",
    "queryTable.field.capacity": "Capacidade",
    "queryTable.field.status": "Status",
    "queryTable.field.createdAt": "Criada em",
    "queryTable.field.updatedAt": "Atualizada em",
    "queryTable.filter.tableId": "ID da mesa",
    "queryTable.filter.status": "Status",
    "queryTable.filter.createdAt": "Criada em",
    "queryTable.filter.updatedAt": "Atualizada em",
    "queryTable.action.query": "Consultar"
  },
  "automation": {
    "statePrefix": "ui.queryTable",
    "stateKeys": [
      "ui.queryTable.status",
      "ui.queryTable.action.queryTable.status",
      "ui.queryTable.input.queryTable.tableId",
      "ui.queryTable.input.queryTable.status",
      "ui.queryTable.input.queryTable.createdAt",
      "ui.queryTable.input.queryTable.updatedAt",
      "ui.queryTable.data.queryTable"
    ],
    "actionIds": [
      "queryTable",
      "set.queryTableTableId",
      "set.queryTableStatus",
      "set.queryTableCreatedAt",
      "set.queryTableUpdatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "queryTable__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/queryTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/queryTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/queryTable.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "queryTable__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
