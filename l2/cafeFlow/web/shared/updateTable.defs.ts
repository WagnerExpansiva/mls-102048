/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateTable",
  "pageName": "Editar Mesa",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:updateTable"
  ],
  "operationIds": [
    "updateTable"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "updateTable",
        "defPath": "_102048_/l4/operations/updateTable.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/updateTable.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/updateTable.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateTable.defs.ts",
    "layoutId": "updateTable.default"
  },
  "states": [
    {
      "stateKey": "ui.updateTable.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateTable.action.updateTable.status",
      "name": "updateTableState",
      "kind": "actionStatus",
      "actionRef": "updateTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.updateTable.input.updateTable.tableNumber",
      "name": "updateTableTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "tableNumber"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateTable.input.updateTable.capacity",
      "name": "updateTableCapacity",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "capacity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateTable.input.updateTable.status",
      "name": "updateTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "updateTable",
      "kind": "command",
      "commandRef": "updateTable",
      "routeKey": "cafeFlow.updateTable.updateTable",
      "purpose": "Editar Mesa",
      "methodName": "updateTable",
      "handlerName": "handleUpdateTableClick",
      "inputStateKeys": [
        "ui.updateTable.input.updateTable.tableNumber",
        "ui.updateTable.input.updateTable.capacity",
        "ui.updateTable.input.updateTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.updateTable.action.updateTable.status"
    },
    {
      "actionId": "set.updateTableTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.updateTable.input.updateTable.tableNumber",
      "methodName": "setUpdateTableTableNumber",
      "handlerName": "handleUpdateTableTableNumberChange"
    },
    {
      "actionId": "set.updateTableCapacity",
      "kind": "stateSetter",
      "stateKey": "ui.updateTable.input.updateTable.capacity",
      "methodName": "setUpdateTableCapacity",
      "handlerName": "handleUpdateTableCapacityChange"
    },
    {
      "actionId": "set.updateTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.updateTable.input.updateTable.status",
      "methodName": "setUpdateTableStatus",
      "handlerName": "handleUpdateTableStatusChange"
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
    "updateTable.section.editTable.title": "Editar Mesa",
    "updateTable.organism.updateTableForm.title": "Editar Mesa",
    "updateTable.intention.commandForm.title": "Editar Mesa",
    "updateTable.field.tableNumber.label": "Número da Mesa",
    "updateTable.field.capacity.label": "Capacidade",
    "updateTable.field.status.label": "Status",
    "updateTable.action.updateTable.submit.label": "Salvar Alterações"
  },
  "automation": {
    "statePrefix": "ui.updateTable",
    "stateKeys": [
      "ui.updateTable.status",
      "ui.updateTable.action.updateTable.status",
      "ui.updateTable.input.updateTable.tableNumber",
      "ui.updateTable.input.updateTable.capacity",
      "ui.updateTable.input.updateTable.status"
    ],
    "actionIds": [
      "updateTable",
      "set.updateTableTableNumber",
      "set.updateTableCapacity",
      "set.updateTableStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "updateTable__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/updateTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/updateTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/updateTable.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "updateTable__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
