/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createTable",
  "pageName": "Cadastrar Mesa",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:createTable"
  ],
  "operationIds": [
    "createTable"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "createTable",
        "defPath": "_102048_/l4/operations/createTable.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/createTable.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/createTable.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createTable.defs.ts",
    "layoutId": "createTable.default"
  },
  "states": [
    {
      "stateKey": "ui.createTable.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createTable.action.createTable.status",
      "name": "createTableState",
      "kind": "actionStatus",
      "actionRef": "createTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.createTable.input.createTable.tableNumber",
      "name": "createTableTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "tableNumber"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createTable.input.createTable.capacity",
      "name": "createTableCapacity",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "capacity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.createTable.input.createTable.status",
      "name": "createTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createTable",
      "kind": "command",
      "commandRef": "createTable",
      "routeKey": "cafeFlow.createTable.createTable",
      "purpose": "Cadastrar Mesa",
      "methodName": "createTable",
      "handlerName": "handleCreateTableClick",
      "inputStateKeys": [
        "ui.createTable.input.createTable.tableNumber",
        "ui.createTable.input.createTable.capacity",
        "ui.createTable.input.createTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.createTable.action.createTable.status"
    },
    {
      "actionId": "set.createTableTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.createTable.input.createTable.tableNumber",
      "methodName": "setCreateTableTableNumber",
      "handlerName": "handleCreateTableTableNumberChange"
    },
    {
      "actionId": "set.createTableCapacity",
      "kind": "stateSetter",
      "stateKey": "ui.createTable.input.createTable.capacity",
      "methodName": "setCreateTableCapacity",
      "handlerName": "handleCreateTableCapacityChange"
    },
    {
      "actionId": "set.createTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.createTable.input.createTable.status",
      "methodName": "setCreateTableStatus",
      "handlerName": "handleCreateTableStatusChange"
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
    "createTable.section.title": "Cadastrar Mesa",
    "createTable.organism.title": "Cadastrar Mesa",
    "createTable.intention.form.title": "Dados da Mesa",
    "createTable.field.tableNumber": "Número/Código da Mesa",
    "createTable.field.capacity": "Capacidade",
    "createTable.field.status": "Situação",
    "createTable.field.status.active": "Ativa",
    "createTable.field.status.inactive": "Inativa",
    "createTable.action.submit": "Salvar Mesa"
  },
  "automation": {
    "statePrefix": "ui.createTable",
    "stateKeys": [
      "ui.createTable.status",
      "ui.createTable.action.createTable.status",
      "ui.createTable.input.createTable.tableNumber",
      "ui.createTable.input.createTable.capacity",
      "ui.createTable.input.createTable.status"
    ],
    "actionIds": [
      "createTable",
      "set.createTableTableNumber",
      "set.createTableCapacity",
      "set.createTableStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "createTable__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/createTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/createTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/createTable.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "createTable__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
