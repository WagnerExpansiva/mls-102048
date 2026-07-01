/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryStockItem",
  "pageName": "Consultar Itens de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryStockItem"
  ],
  "operationIds": [
    "queryStockItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "queryStockItem",
        "defPath": "_102048_/l4/operations/queryStockItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryStockItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryStockItem.defs.ts",
    "layoutId": "queryStockItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.queryStockItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.action.queryStockItem.status",
      "name": "queryStockItemState",
      "kind": "actionStatus",
      "actionRef": "queryStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.queryStockItem.input.queryStockItem.stockItemId",
      "name": "queryStockItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.input.queryStockItem.name",
      "name": "queryStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.input.queryStockItem.status",
      "name": "queryStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.input.queryStockItem.createdAt",
      "name": "queryStockItemCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.input.queryStockItem.updatedAt",
      "name": "queryStockItemUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryStockItem.data.queryStockItem",
      "name": "queryStockItemData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryStockItem",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "queryStockItem",
      "kind": "query",
      "commandRef": "queryStockItem",
      "routeKey": "cafeFlow.queryStockItem.queryStockItem",
      "purpose": "Consultar Itens de Estoque",
      "methodName": "loadQueryStockItem",
      "handlerName": "handleQueryStockItemClick",
      "inputStateKeys": [
        "ui.queryStockItem.input.queryStockItem.stockItemId",
        "ui.queryStockItem.input.queryStockItem.name",
        "ui.queryStockItem.input.queryStockItem.status",
        "ui.queryStockItem.input.queryStockItem.createdAt",
        "ui.queryStockItem.input.queryStockItem.updatedAt"
      ],
      "outputStateKeys": [
        "ui.queryStockItem.data.queryStockItem"
      ],
      "statusStateKey": "ui.queryStockItem.action.queryStockItem.status"
    },
    {
      "actionId": "set.queryStockItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.queryStockItem.input.queryStockItem.stockItemId",
      "methodName": "setQueryStockItemStockItemId",
      "handlerName": "handleQueryStockItemStockItemIdChange"
    },
    {
      "actionId": "set.queryStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.queryStockItem.input.queryStockItem.name",
      "methodName": "setQueryStockItemName",
      "handlerName": "handleQueryStockItemNameChange"
    },
    {
      "actionId": "set.queryStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.queryStockItem.input.queryStockItem.status",
      "methodName": "setQueryStockItemStatus",
      "handlerName": "handleQueryStockItemStatusChange"
    },
    {
      "actionId": "set.queryStockItemCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.queryStockItem.input.queryStockItem.createdAt",
      "methodName": "setQueryStockItemCreatedAt",
      "handlerName": "handleQueryStockItemCreatedAtChange"
    },
    {
      "actionId": "set.queryStockItemUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.queryStockItem.input.queryStockItem.updatedAt",
      "methodName": "setQueryStockItemUpdatedAt",
      "handlerName": "handleQueryStockItemUpdatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryStockItem",
      "stateKey": "ui.queryStockItem.data.queryStockItem"
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
    "queryStockItem.section.main.title": "Consultar Itens de Estoque",
    "queryStockItem.organism.list.title": "Consultar Itens de Estoque",
    "queryStockItem.intention.list.title": "Query List",
    "queryStockItem.field.stockItemId": "Stock Item Id",
    "queryStockItem.field.name": "Name",
    "queryStockItem.field.unitOfMeasure": "Unit Of Measure",
    "queryStockItem.field.minimumStockLevel": "Minimum Stock Level",
    "queryStockItem.field.status": "Status",
    "queryStockItem.field.createdAt": "Created At",
    "queryStockItem.field.updatedAt": "Updated At",
    "queryStockItem.filter.stockItemId": "Stock Item Id",
    "queryStockItem.filter.name": "Name",
    "queryStockItem.filter.status": "Status",
    "queryStockItem.filter.createdAt": "Created At",
    "queryStockItem.filter.updatedAt": "Updated At",
    "queryStockItem.action.query": "Query Stock Item"
  },
  "automation": {
    "statePrefix": "ui.queryStockItem",
    "stateKeys": [
      "ui.queryStockItem.status",
      "ui.queryStockItem.action.queryStockItem.status",
      "ui.queryStockItem.input.queryStockItem.stockItemId",
      "ui.queryStockItem.input.queryStockItem.name",
      "ui.queryStockItem.input.queryStockItem.status",
      "ui.queryStockItem.input.queryStockItem.createdAt",
      "ui.queryStockItem.input.queryStockItem.updatedAt",
      "ui.queryStockItem.data.queryStockItem"
    ],
    "actionIds": [
      "queryStockItem",
      "set.queryStockItemStockItemId",
      "set.queryStockItemName",
      "set.queryStockItemStatus",
      "set.queryStockItemCreatedAt",
      "set.queryStockItemUpdatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "queryStockItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/queryStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/queryStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "queryStockItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
