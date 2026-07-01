/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteMenuItem",
  "pageName": "Remover Item de Cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:deleteMenuItem"
  ],
  "operationIds": [
    "deleteMenuItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "deleteMenuItem",
        "defPath": "_102048_/l4/operations/deleteMenuItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteMenuItem.defs.ts",
    "layoutId": "deleteMenuItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.deleteMenuItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.action.deleteMenuItem.status",
      "name": "deleteMenuItemState",
      "kind": "actionStatus",
      "actionRef": "deleteMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.menuItemId",
      "name": "deleteMenuItemMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.name",
      "name": "deleteMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.category",
      "name": "deleteMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.price",
      "name": "deleteMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.stockItemId",
      "name": "deleteMenuItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.status",
      "name": "deleteMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "deleteMenuItem",
      "kind": "command",
      "commandRef": "deleteMenuItem",
      "routeKey": "cafeFlow.deleteMenuItem.deleteMenuItem",
      "purpose": "Remover Item de Cardápio",
      "methodName": "deleteMenuItem",
      "handlerName": "handleDeleteMenuItemClick",
      "inputStateKeys": [
        "ui.deleteMenuItem.input.deleteMenuItem.menuItemId",
        "ui.deleteMenuItem.input.deleteMenuItem.name",
        "ui.deleteMenuItem.input.deleteMenuItem.category",
        "ui.deleteMenuItem.input.deleteMenuItem.price",
        "ui.deleteMenuItem.input.deleteMenuItem.stockItemId",
        "ui.deleteMenuItem.input.deleteMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.deleteMenuItem.action.deleteMenuItem.status"
    },
    {
      "actionId": "set.deleteMenuItemMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.menuItemId",
      "methodName": "setDeleteMenuItemMenuItemId",
      "handlerName": "handleDeleteMenuItemMenuItemIdChange"
    },
    {
      "actionId": "set.deleteMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.name",
      "methodName": "setDeleteMenuItemName",
      "handlerName": "handleDeleteMenuItemNameChange"
    },
    {
      "actionId": "set.deleteMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.category",
      "methodName": "setDeleteMenuItemCategory",
      "handlerName": "handleDeleteMenuItemCategoryChange"
    },
    {
      "actionId": "set.deleteMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.price",
      "methodName": "setDeleteMenuItemPrice",
      "handlerName": "handleDeleteMenuItemPriceChange"
    },
    {
      "actionId": "set.deleteMenuItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.stockItemId",
      "methodName": "setDeleteMenuItemStockItemId",
      "handlerName": "handleDeleteMenuItemStockItemIdChange"
    },
    {
      "actionId": "set.deleteMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.status",
      "methodName": "setDeleteMenuItemStatus",
      "handlerName": "handleDeleteMenuItemStatusChange"
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
    "deleteMenuItem.section.title": "Remover Item de Cardápio",
    "deleteMenuItem.organism.title": "Remover Item de Cardápio",
    "deleteMenuItem.intent.command.title": "Command Form",
    "deleteMenuItem.field.menuItemId": "Menu Item Id",
    "deleteMenuItem.field.name": "Name",
    "deleteMenuItem.field.category": "Category",
    "deleteMenuItem.field.price": "Price",
    "deleteMenuItem.field.stockItemId": "Stock Item Id",
    "deleteMenuItem.field.status": "Status",
    "deleteMenuItem.action.submit": "Delete Menu Item"
  },
  "automation": {
    "statePrefix": "ui.deleteMenuItem",
    "stateKeys": [
      "ui.deleteMenuItem.status",
      "ui.deleteMenuItem.action.deleteMenuItem.status",
      "ui.deleteMenuItem.input.deleteMenuItem.menuItemId",
      "ui.deleteMenuItem.input.deleteMenuItem.name",
      "ui.deleteMenuItem.input.deleteMenuItem.category",
      "ui.deleteMenuItem.input.deleteMenuItem.price",
      "ui.deleteMenuItem.input.deleteMenuItem.stockItemId",
      "ui.deleteMenuItem.input.deleteMenuItem.status"
    ],
    "actionIds": [
      "deleteMenuItem",
      "set.deleteMenuItemMenuItemId",
      "set.deleteMenuItemName",
      "set.deleteMenuItemCategory",
      "set.deleteMenuItemPrice",
      "set.deleteMenuItemStockItemId",
      "set.deleteMenuItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "deleteMenuItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/deleteMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/deleteMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "deleteMenuItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
