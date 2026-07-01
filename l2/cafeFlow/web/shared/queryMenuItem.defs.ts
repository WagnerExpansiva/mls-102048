/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryMenuItem",
  "pageName": "Consultar Itens de Cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryMenuItem"
  ],
  "operationIds": [
    "queryMenuItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "queryMenuItem",
        "defPath": "_102048_/l4/operations/queryMenuItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryMenuItem.defs.ts",
    "layoutId": "queryMenuItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.queryMenuItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.action.queryMenuItem.status",
      "name": "queryMenuItemState",
      "kind": "actionStatus",
      "actionRef": "queryMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.menuItemId",
      "name": "queryMenuItemMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.name",
      "name": "queryMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.category",
      "name": "queryMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.stockItemId",
      "name": "queryMenuItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.status",
      "name": "queryMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.createdAt",
      "name": "queryMenuItemCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.queryMenuItem.data.queryMenuItem",
      "name": "queryMenuItemData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryMenuItem",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "queryMenuItem",
      "kind": "query",
      "commandRef": "queryMenuItem",
      "routeKey": "cafeFlow.queryMenuItem.queryMenuItem",
      "purpose": "Consultar Itens de Cardápio",
      "methodName": "loadQueryMenuItem",
      "handlerName": "handleQueryMenuItemClick",
      "inputStateKeys": [
        "ui.queryMenuItem.input.queryMenuItem.menuItemId",
        "ui.queryMenuItem.input.queryMenuItem.name",
        "ui.queryMenuItem.input.queryMenuItem.category",
        "ui.queryMenuItem.input.queryMenuItem.stockItemId",
        "ui.queryMenuItem.input.queryMenuItem.status",
        "ui.queryMenuItem.input.queryMenuItem.createdAt"
      ],
      "outputStateKeys": [
        "ui.queryMenuItem.data.queryMenuItem"
      ],
      "statusStateKey": "ui.queryMenuItem.action.queryMenuItem.status"
    },
    {
      "actionId": "set.queryMenuItemMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.menuItemId",
      "methodName": "setQueryMenuItemMenuItemId",
      "handlerName": "handleQueryMenuItemMenuItemIdChange"
    },
    {
      "actionId": "set.queryMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.name",
      "methodName": "setQueryMenuItemName",
      "handlerName": "handleQueryMenuItemNameChange"
    },
    {
      "actionId": "set.queryMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.category",
      "methodName": "setQueryMenuItemCategory",
      "handlerName": "handleQueryMenuItemCategoryChange"
    },
    {
      "actionId": "set.queryMenuItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.stockItemId",
      "methodName": "setQueryMenuItemStockItemId",
      "handlerName": "handleQueryMenuItemStockItemIdChange"
    },
    {
      "actionId": "set.queryMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.status",
      "methodName": "setQueryMenuItemStatus",
      "handlerName": "handleQueryMenuItemStatusChange"
    },
    {
      "actionId": "set.queryMenuItemCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.queryMenuItem.input.queryMenuItem.createdAt",
      "methodName": "setQueryMenuItemCreatedAt",
      "handlerName": "handleQueryMenuItemCreatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryMenuItem",
      "stateKey": "ui.queryMenuItem.data.queryMenuItem"
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
    "section.consultarItensCardapio.title": "Consultar Itens de Cardápio",
    "organism.queryMenuItem.title": "Itens de Cardápio",
    "intention.queryMenuItem.list.title": "Lista de Itens de Cardápio",
    "intention.queryMenuItem.list.empty": "Nenhum item de cardápio encontrado",
    "field.menuItemId.label": "ID do Item",
    "field.name.label": "Nome",
    "field.category.label": "Categoria",
    "field.price.label": "Preço",
    "field.stockItemId.label": "Item de Estoque",
    "field.status.label": "Status",
    "field.createdAt.label": "Criado em",
    "field.updatedAt.label": "Atualizado em",
    "action.queryMenuItem.label": "Buscar"
  },
  "automation": {
    "statePrefix": "ui.queryMenuItem",
    "stateKeys": [
      "ui.queryMenuItem.status",
      "ui.queryMenuItem.action.queryMenuItem.status",
      "ui.queryMenuItem.input.queryMenuItem.menuItemId",
      "ui.queryMenuItem.input.queryMenuItem.name",
      "ui.queryMenuItem.input.queryMenuItem.category",
      "ui.queryMenuItem.input.queryMenuItem.stockItemId",
      "ui.queryMenuItem.input.queryMenuItem.status",
      "ui.queryMenuItem.input.queryMenuItem.createdAt",
      "ui.queryMenuItem.data.queryMenuItem"
    ],
    "actionIds": [
      "queryMenuItem",
      "set.queryMenuItemMenuItemId",
      "set.queryMenuItemName",
      "set.queryMenuItemCategory",
      "set.queryMenuItemStockItemId",
      "set.queryMenuItemStatus",
      "set.queryMenuItemCreatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "queryMenuItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/queryMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/queryMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "queryMenuItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
