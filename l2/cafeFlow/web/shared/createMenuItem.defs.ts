/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createMenuItem",
  "pageName": "Cadastrar Item de Cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:createMenuItem"
  ],
  "operationIds": [
    "createMenuItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "createMenuItem",
        "defPath": "_102048_/l4/operations/createMenuItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createMenuItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createMenuItem.defs.ts",
    "layoutId": "createMenuItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.createMenuItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createMenuItem.action.createMenuItem.status",
      "name": "createMenuItemState",
      "kind": "actionStatus",
      "actionRef": "createMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.createMenuItem.input.createMenuItem.name",
      "name": "createMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createMenuItem.input.createMenuItem.category",
      "name": "createMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createMenuItem.input.createMenuItem.price",
      "name": "createMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createMenuItem.input.createMenuItem.status",
      "name": "createMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createMenuItem",
      "kind": "command",
      "commandRef": "createMenuItem",
      "routeKey": "cafeFlow.createMenuItem.createMenuItem",
      "purpose": "Cadastrar Item de Cardápio",
      "methodName": "createMenuItem",
      "handlerName": "handleCreateMenuItemClick",
      "inputStateKeys": [
        "ui.createMenuItem.input.createMenuItem.name",
        "ui.createMenuItem.input.createMenuItem.category",
        "ui.createMenuItem.input.createMenuItem.price",
        "ui.createMenuItem.input.createMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.createMenuItem.action.createMenuItem.status"
    },
    {
      "actionId": "set.createMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.createMenuItem.input.createMenuItem.name",
      "methodName": "setCreateMenuItemName",
      "handlerName": "handleCreateMenuItemNameChange"
    },
    {
      "actionId": "set.createMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.createMenuItem.input.createMenuItem.category",
      "methodName": "setCreateMenuItemCategory",
      "handlerName": "handleCreateMenuItemCategoryChange"
    },
    {
      "actionId": "set.createMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.createMenuItem.input.createMenuItem.price",
      "methodName": "setCreateMenuItemPrice",
      "handlerName": "handleCreateMenuItemPriceChange"
    },
    {
      "actionId": "set.createMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.createMenuItem.input.createMenuItem.status",
      "methodName": "setCreateMenuItemStatus",
      "handlerName": "handleCreateMenuItemStatusChange"
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
    "createMenuItem.section.title": "Cadastrar Item de Cardápio",
    "createMenuItem.organism.title": "Cadastrar Item de Cardápio",
    "createMenuItem.intent.commandForm.title": "Command Form",
    "menuItem.field.name": "Name",
    "menuItem.field.category": "Category",
    "menuItem.field.price": "Price",
    "menuItem.field.status": "Status",
    "createMenuItem.action.submit": "Create Menu Item"
  },
  "automation": {
    "statePrefix": "ui.createMenuItem",
    "stateKeys": [
      "ui.createMenuItem.status",
      "ui.createMenuItem.action.createMenuItem.status",
      "ui.createMenuItem.input.createMenuItem.name",
      "ui.createMenuItem.input.createMenuItem.category",
      "ui.createMenuItem.input.createMenuItem.price",
      "ui.createMenuItem.input.createMenuItem.status"
    ],
    "actionIds": [
      "createMenuItem",
      "set.createMenuItemName",
      "set.createMenuItemCategory",
      "set.createMenuItemPrice",
      "set.createMenuItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "createMenuItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/createMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/createMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "createMenuItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
