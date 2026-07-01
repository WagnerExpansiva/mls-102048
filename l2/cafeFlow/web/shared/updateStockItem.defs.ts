/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateStockItem",
  "pageName": "Editar Item de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:updateStockItem"
  ],
  "operationIds": [
    "updateStockItem"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "updateStockItem",
        "defPath": "_102048_/l4/operations/updateStockItem.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateStockItem.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateStockItem.defs.ts",
    "layoutId": "updateStockItem.layout"
  },
  "states": [
    {
      "stateKey": "ui.updateStockItem.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateStockItem.action.updateStockItem.status",
      "name": "updateStockItemState",
      "kind": "actionStatus",
      "actionRef": "updateStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.updateStockItem.input.updateStockItem.name",
      "name": "updateStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateStockItem.input.updateStockItem.unitOfMeasure",
      "name": "updateStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateStockItem.input.updateStockItem.minimumStockLevel",
      "name": "updateStockItemMinimumStockLevel",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "minimumStockLevel"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateStockItem.input.updateStockItem.status",
      "name": "updateStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "updateStockItem",
      "kind": "command",
      "commandRef": "updateStockItem",
      "routeKey": "cafeFlow.updateStockItem.updateStockItem",
      "purpose": "Editar Item de Estoque",
      "methodName": "updateStockItem",
      "handlerName": "handleUpdateStockItemClick",
      "inputStateKeys": [
        "ui.updateStockItem.input.updateStockItem.name",
        "ui.updateStockItem.input.updateStockItem.unitOfMeasure",
        "ui.updateStockItem.input.updateStockItem.minimumStockLevel",
        "ui.updateStockItem.input.updateStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.updateStockItem.action.updateStockItem.status"
    },
    {
      "actionId": "set.updateStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.updateStockItem.input.updateStockItem.name",
      "methodName": "setUpdateStockItemName",
      "handlerName": "handleUpdateStockItemNameChange"
    },
    {
      "actionId": "set.updateStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.updateStockItem.input.updateStockItem.unitOfMeasure",
      "methodName": "setUpdateStockItemUnitOfMeasure",
      "handlerName": "handleUpdateStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.updateStockItemMinimumStockLevel",
      "kind": "stateSetter",
      "stateKey": "ui.updateStockItem.input.updateStockItem.minimumStockLevel",
      "methodName": "setUpdateStockItemMinimumStockLevel",
      "handlerName": "handleUpdateStockItemMinimumStockLevelChange"
    },
    {
      "actionId": "set.updateStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.updateStockItem.input.updateStockItem.status",
      "methodName": "setUpdateStockItemStatus",
      "handlerName": "handleUpdateStockItemStatusChange"
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
    "section.editStockItem.title": "Editar Item de Estoque",
    "organism.updateStockItem.title": "Editar Item de Estoque",
    "intention.updateStockItemForm.title": "Dados do item de estoque",
    "field.name.label": "Nome",
    "field.unitOfMeasure.label": "Unidade de medida",
    "field.minimumStockLevel.label": "Estoque mínimo",
    "field.status.label": "Status",
    "action.updateStockItem.label": "Salvar alterações"
  },
  "automation": {
    "statePrefix": "ui.updateStockItem",
    "stateKeys": [
      "ui.updateStockItem.status",
      "ui.updateStockItem.action.updateStockItem.status",
      "ui.updateStockItem.input.updateStockItem.name",
      "ui.updateStockItem.input.updateStockItem.unitOfMeasure",
      "ui.updateStockItem.input.updateStockItem.minimumStockLevel",
      "ui.updateStockItem.input.updateStockItem.status"
    ],
    "actionIds": [
      "updateStockItem",
      "set.updateStockItemName",
      "set.updateStockItemUnitOfMeasure",
      "set.updateStockItemMinimumStockLevel",
      "set.updateStockItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "updateStockItem__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/updateStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/updateStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "updateStockItem__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
