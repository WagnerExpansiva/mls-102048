/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateMenuItem",
  "pageName": "Editar Item de Cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:updateMenuItem"
  ],
  "operationIds": [
    "updateMenuItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "updateMenuItem",
        "defPath": "_102048_/l4/operations/updateMenuItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateMenuItem.defs.ts",
    "layoutId": "updateMenuItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.updateMenuItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateMenuItem.action.updateMenuItem.status",
      "name": "updateMenuItemState",
      "kind": "actionStatus",
      "actionRef": "updateMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.name",
      "name": "updateMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.price",
      "name": "updateMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.stockItemId",
      "name": "updateMenuItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.status",
      "name": "updateMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "updateMenuItem",
      "kind": "command",
      "commandRef": "updateMenuItem",
      "routeKey": "cafeFlow.updateMenuItem.updateMenuItem",
      "purpose": "Editar Item de Cardápio",
      "methodName": "updateMenuItem",
      "handlerName": "handleUpdateMenuItemClick",
      "inputStateKeys": [
        "ui.updateMenuItem.input.updateMenuItem.name",
        "ui.updateMenuItem.input.updateMenuItem.price",
        "ui.updateMenuItem.input.updateMenuItem.stockItemId",
        "ui.updateMenuItem.input.updateMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.updateMenuItem.action.updateMenuItem.status"
    },
    {
      "actionId": "set.updateMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.name",
      "methodName": "setUpdateMenuItemName",
      "handlerName": "handleUpdateMenuItemNameChange"
    },
    {
      "actionId": "set.updateMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.price",
      "methodName": "setUpdateMenuItemPrice",
      "handlerName": "handleUpdateMenuItemPriceChange"
    },
    {
      "actionId": "set.updateMenuItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.stockItemId",
      "methodName": "setUpdateMenuItemStockItemId",
      "handlerName": "handleUpdateMenuItemStockItemIdChange"
    },
    {
      "actionId": "set.updateMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.updateMenuItem.input.updateMenuItem.status",
      "methodName": "setUpdateMenuItemStatus",
      "handlerName": "handleUpdateMenuItemStatusChange"
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
    "updateMenuItem.section.title": "Editar Item de Cardápio",
    "updateMenuItem.organism.title": "Editar Item de Cardápio",
    "updateMenuItem.form.title": "Command Form",
    "updateMenuItem.field.name": "Name",
    "updateMenuItem.field.price": "Price",
    "updateMenuItem.field.stockItemId": "Stock Item Id",
    "updateMenuItem.field.status": "Status",
    "updateMenuItem.action.submit": "Update Menu Item"
  },
  "automation": {
    "statePrefix": "ui.updateMenuItem",
    "stateKeys": [
      "ui.updateMenuItem.status",
      "ui.updateMenuItem.action.updateMenuItem.status",
      "ui.updateMenuItem.input.updateMenuItem.name",
      "ui.updateMenuItem.input.updateMenuItem.price",
      "ui.updateMenuItem.input.updateMenuItem.stockItemId",
      "ui.updateMenuItem.input.updateMenuItem.status"
    ],
    "actionIds": [
      "updateMenuItem",
      "set.updateMenuItemName",
      "set.updateMenuItemPrice",
      "set.updateMenuItemStockItemId",
      "set.updateMenuItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "updateMenuItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/updateMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/updateMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "updateMenuItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
