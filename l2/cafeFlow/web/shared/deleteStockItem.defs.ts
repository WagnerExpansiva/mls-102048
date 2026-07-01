/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteStockItem",
  "pageName": "Remover Item de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:deleteStockItem"
  ],
  "operationIds": [
    "deleteStockItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "deleteStockItem",
        "defPath": "_102048_/l4/operations/deleteStockItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteStockItem.defs.ts",
    "layoutId": "deleteStockItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.deleteStockItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteStockItem.action.deleteStockItem.status",
      "name": "deleteStockItemState",
      "kind": "actionStatus",
      "actionRef": "deleteStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.stockItemId",
      "name": "deleteStockItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.name",
      "name": "deleteStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.unitOfMeasure",
      "name": "deleteStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.minimumStockLevel",
      "name": "deleteStockItemMinimumStockLevel",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "minimumStockLevel"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.status",
      "name": "deleteStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "deleteStockItem",
      "kind": "command",
      "commandRef": "deleteStockItem",
      "routeKey": "cafeFlow.deleteStockItem.deleteStockItem",
      "purpose": "Remover Item de Estoque",
      "methodName": "deleteStockItem",
      "handlerName": "handleDeleteStockItemClick",
      "inputStateKeys": [
        "ui.deleteStockItem.input.deleteStockItem.stockItemId",
        "ui.deleteStockItem.input.deleteStockItem.name",
        "ui.deleteStockItem.input.deleteStockItem.unitOfMeasure",
        "ui.deleteStockItem.input.deleteStockItem.minimumStockLevel",
        "ui.deleteStockItem.input.deleteStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.deleteStockItem.action.deleteStockItem.status"
    },
    {
      "actionId": "set.deleteStockItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.stockItemId",
      "methodName": "setDeleteStockItemStockItemId",
      "handlerName": "handleDeleteStockItemStockItemIdChange"
    },
    {
      "actionId": "set.deleteStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.name",
      "methodName": "setDeleteStockItemName",
      "handlerName": "handleDeleteStockItemNameChange"
    },
    {
      "actionId": "set.deleteStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.unitOfMeasure",
      "methodName": "setDeleteStockItemUnitOfMeasure",
      "handlerName": "handleDeleteStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.deleteStockItemMinimumStockLevel",
      "kind": "stateSetter",
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.minimumStockLevel",
      "methodName": "setDeleteStockItemMinimumStockLevel",
      "handlerName": "handleDeleteStockItemMinimumStockLevelChange"
    },
    {
      "actionId": "set.deleteStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.deleteStockItem.input.deleteStockItem.status",
      "methodName": "setDeleteStockItemStatus",
      "handlerName": "handleDeleteStockItemStatusChange"
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
    "deleteStockItem.page.title": "Remover Item de Estoque",
    "deleteStockItem.section.main.title": "Remover Item de Estoque",
    "deleteStockItem.organism.delete.title": "Remover Item de Estoque",
    "deleteStockItem.intent.command.title": "Confirmar remoção do item",
    "deleteStockItem.field.stockItemId.label": "Identificador do item",
    "deleteStockItem.field.name.label": "Nome do item",
    "deleteStockItem.field.unitOfMeasure.label": "Unidade de medida",
    "deleteStockItem.field.minimumStockLevel.label": "Nível mínimo em estoque",
    "deleteStockItem.field.status.label": "Status",
    "deleteStockItem.action.delete.label": "Remover item"
  },
  "automation": {
    "statePrefix": "ui.deleteStockItem",
    "stateKeys": [
      "ui.deleteStockItem.status",
      "ui.deleteStockItem.action.deleteStockItem.status",
      "ui.deleteStockItem.input.deleteStockItem.stockItemId",
      "ui.deleteStockItem.input.deleteStockItem.name",
      "ui.deleteStockItem.input.deleteStockItem.unitOfMeasure",
      "ui.deleteStockItem.input.deleteStockItem.minimumStockLevel",
      "ui.deleteStockItem.input.deleteStockItem.status"
    ],
    "actionIds": [
      "deleteStockItem",
      "set.deleteStockItemStockItemId",
      "set.deleteStockItemName",
      "set.deleteStockItemUnitOfMeasure",
      "set.deleteStockItemMinimumStockLevel",
      "set.deleteStockItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "deleteStockItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/deleteStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/deleteStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "deleteStockItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
