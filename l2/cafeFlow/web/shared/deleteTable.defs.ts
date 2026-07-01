/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteTable",
  "pageName": "Remover Mesa",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:deleteTable"
  ],
  "operationIds": [
    "deleteTable"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "deleteTable",
        "defPath": "_102048_/l4/operations/deleteTable.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/deleteTable.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/deleteTable.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteTable.defs.ts",
    "layoutId": "deleteTable.layout"
  },
  "states": [
    {
      "stateKey": "ui.deleteTable.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteTable.action.deleteTable.status",
      "name": "deleteTableState",
      "kind": "actionStatus",
      "actionRef": "deleteTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.deleteTable.input.deleteTable.tableId",
      "name": "deleteTableTableId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "tableId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteTable.input.deleteTable.tableNumber",
      "name": "deleteTableTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "tableNumber"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteTable.input.deleteTable.capacity",
      "name": "deleteTableCapacity",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "capacity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.deleteTable.input.deleteTable.status",
      "name": "deleteTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "deleteTable",
      "kind": "command",
      "commandRef": "deleteTable",
      "routeKey": "cafeFlow.deleteTable.deleteTable",
      "purpose": "Remover Mesa",
      "methodName": "deleteTable",
      "handlerName": "handleDeleteTableClick",
      "inputStateKeys": [
        "ui.deleteTable.input.deleteTable.tableId",
        "ui.deleteTable.input.deleteTable.tableNumber",
        "ui.deleteTable.input.deleteTable.capacity",
        "ui.deleteTable.input.deleteTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.deleteTable.action.deleteTable.status"
    },
    {
      "actionId": "set.deleteTableTableId",
      "kind": "stateSetter",
      "stateKey": "ui.deleteTable.input.deleteTable.tableId",
      "methodName": "setDeleteTableTableId",
      "handlerName": "handleDeleteTableTableIdChange"
    },
    {
      "actionId": "set.deleteTableTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.deleteTable.input.deleteTable.tableNumber",
      "methodName": "setDeleteTableTableNumber",
      "handlerName": "handleDeleteTableTableNumberChange"
    },
    {
      "actionId": "set.deleteTableCapacity",
      "kind": "stateSetter",
      "stateKey": "ui.deleteTable.input.deleteTable.capacity",
      "methodName": "setDeleteTableCapacity",
      "handlerName": "handleDeleteTableCapacityChange"
    },
    {
      "actionId": "set.deleteTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.deleteTable.input.deleteTable.status",
      "methodName": "setDeleteTableStatus",
      "handlerName": "handleDeleteTableStatusChange"
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
    "deleteTable.section.title": "Remover Mesa",
    "deleteTable.organism.title": "Remover Mesa",
    "deleteTable.intention.commandForm.title": "Command Form",
    "deleteTable.field.tableId": "Table Id",
    "deleteTable.field.tableNumber": "Table Number",
    "deleteTable.field.capacity": "Capacity",
    "deleteTable.field.status": "Status",
    "deleteTable.action.submit": "Delete Table"
  },
  "automation": {
    "statePrefix": "ui.deleteTable",
    "stateKeys": [
      "ui.deleteTable.status",
      "ui.deleteTable.action.deleteTable.status",
      "ui.deleteTable.input.deleteTable.tableId",
      "ui.deleteTable.input.deleteTable.tableNumber",
      "ui.deleteTable.input.deleteTable.capacity",
      "ui.deleteTable.input.deleteTable.status"
    ],
    "actionIds": [
      "deleteTable",
      "set.deleteTableTableId",
      "set.deleteTableTableNumber",
      "set.deleteTableCapacity",
      "set.deleteTableStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "deleteTable__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/deleteTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/deleteTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/deleteTable.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "deleteTable__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
