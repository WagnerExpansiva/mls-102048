/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createStockItem",
  "pageName": "Cadastrar Item de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:createStockItem"
  ],
  "operationIds": [
    "createStockItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "createStockItem",
        "defPath": "_102048_/l4/operations/createStockItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createStockItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/createStockItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createStockItem.defs.ts",
    "layoutId": "createStockItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.createStockItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createStockItem.action.createStockItem.status",
      "name": "createStockItemState",
      "kind": "actionStatus",
      "actionRef": "createStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.createStockItem.input.createStockItem.name",
      "name": "createStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createStockItem.input.createStockItem.unitOfMeasure",
      "name": "createStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createStockItem.input.createStockItem.minimumStockLevel",
      "name": "createStockItemMinimumStockLevel",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "minimumStockLevel"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createStockItem.input.createStockItem.status",
      "name": "createStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createStockItem",
      "kind": "command",
      "commandRef": "createStockItem",
      "routeKey": "cafeFlow.createStockItem.createStockItem",
      "purpose": "Cadastrar Item de Estoque",
      "methodName": "createStockItem",
      "handlerName": "handleCreateStockItemClick",
      "inputStateKeys": [
        "ui.createStockItem.input.createStockItem.name",
        "ui.createStockItem.input.createStockItem.unitOfMeasure",
        "ui.createStockItem.input.createStockItem.minimumStockLevel",
        "ui.createStockItem.input.createStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.createStockItem.action.createStockItem.status"
    },
    {
      "actionId": "set.createStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.createStockItem.input.createStockItem.name",
      "methodName": "setCreateStockItemName",
      "handlerName": "handleCreateStockItemNameChange"
    },
    {
      "actionId": "set.createStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.createStockItem.input.createStockItem.unitOfMeasure",
      "methodName": "setCreateStockItemUnitOfMeasure",
      "handlerName": "handleCreateStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.createStockItemMinimumStockLevel",
      "kind": "stateSetter",
      "stateKey": "ui.createStockItem.input.createStockItem.minimumStockLevel",
      "methodName": "setCreateStockItemMinimumStockLevel",
      "handlerName": "handleCreateStockItemMinimumStockLevelChange"
    },
    {
      "actionId": "set.createStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.createStockItem.input.createStockItem.status",
      "methodName": "setCreateStockItemStatus",
      "handlerName": "handleCreateStockItemStatusChange"
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
    "createStockItem.section.title": "Cadastrar Item de Estoque",
    "createStockItem.form.title": "Dados do Item de Estoque",
    "createStockItem.action.submit": "Salvar Item de Estoque",
    "stockItem.field.name": "Nome do item",
    "stockItem.field.unitOfMeasure": "Unidade de medida",
    "stockItem.field.minimumStockLevel": "Estoque mínimo",
    "stockItem.field.status": "Status",
    "section.createStockItem.title": "Cadastrar Item de Estoque"
  },
  "automation": {
    "statePrefix": "ui.createStockItem",
    "stateKeys": [
      "ui.createStockItem.status",
      "ui.createStockItem.action.createStockItem.status",
      "ui.createStockItem.input.createStockItem.name",
      "ui.createStockItem.input.createStockItem.unitOfMeasure",
      "ui.createStockItem.input.createStockItem.minimumStockLevel",
      "ui.createStockItem.input.createStockItem.status"
    ],
    "actionIds": [
      "createStockItem",
      "set.createStockItemName",
      "set.createStockItemUnitOfMeasure",
      "set.createStockItemMinimumStockLevel",
      "set.createStockItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "createStockItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/createStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/createStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/createStockItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "createStockItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
