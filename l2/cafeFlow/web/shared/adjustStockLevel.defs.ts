/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "adjustStockLevel",
  "pageName": "Registrar Entrada/Ajuste de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:adjustStockLevel"
  ],
  "operationIds": [
    "adjustStockLevel"
  ],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "adjustStockLevel",
        "defPath": "_102048_/l4/operations/adjustStockLevel.defs.ts"
      }
    ]
  },
  "contractRef": {
    "defPath": "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.defs.ts",
    "tsPath": "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.ts"
  },
  "layoutRef": {
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/adjustStockLevel.defs.ts",
    "layoutId": "adjustStockLevel.layout"
  },
  "states": [
    {
      "stateKey": "ui.adjustStockLevel.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adjustStockLevel.action.adjustStockLevel.status",
      "name": "adjustStockLevelState",
      "kind": "actionStatus",
      "actionRef": "adjustStockLevel",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.currentQuantity",
      "name": "adjustStockLevelCurrentQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "adjustStockLevel",
        "direction": "input",
        "field": "currentQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.status",
      "name": "adjustStockLevelStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "adjustStockLevel",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "adjustStockLevel",
      "kind": "command",
      "commandRef": "adjustStockLevel",
      "routeKey": "cafeFlow.adjustStockLevel.adjustStockLevel",
      "purpose": "Registrar Entrada/Ajuste de Estoque",
      "methodName": "adjustStockLevel",
      "handlerName": "handleAdjustStockLevelClick",
      "inputStateKeys": [
        "ui.adjustStockLevel.input.adjustStockLevel.currentQuantity",
        "ui.adjustStockLevel.input.adjustStockLevel.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.adjustStockLevel.action.adjustStockLevel.status"
    },
    {
      "actionId": "set.adjustStockLevelCurrentQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.currentQuantity",
      "methodName": "setAdjustStockLevelCurrentQuantity",
      "handlerName": "handleAdjustStockLevelCurrentQuantityChange"
    },
    {
      "actionId": "set.adjustStockLevelStatus",
      "kind": "stateSetter",
      "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.status",
      "methodName": "setAdjustStockLevelStatus",
      "handlerName": "handleAdjustStockLevelStatusChange"
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
    "adjustStockLevel.section.title": "Registrar Entrada/Ajuste de Estoque",
    "adjustStockLevel.organism.title": "Registrar Entrada/Ajuste de Estoque",
    "adjustStockLevel.intent.commandForm.title": "Registrar Entrada/Ajuste de Estoque",
    "adjustStockLevel.field.currentQuantity": "Quantidade atual",
    "adjustStockLevel.field.status": "Situação do estoque",
    "adjustStockLevel.action.submit": "Registrar ajuste"
  },
  "automation": {
    "statePrefix": "ui.adjustStockLevel",
    "stateKeys": [
      "ui.adjustStockLevel.status",
      "ui.adjustStockLevel.action.adjustStockLevel.status",
      "ui.adjustStockLevel.input.adjustStockLevel.currentQuantity",
      "ui.adjustStockLevel.input.adjustStockLevel.status"
    ],
    "actionIds": [
      "adjustStockLevel",
      "set.adjustStockLevelCurrentQuantity",
      "set.adjustStockLevelStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "adjustStockLevel__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102048_/l2/cafeFlow/web/shared/adjustStockLevel.ts",
    "defPath": "_102048_/l2/cafeFlow/web/shared/adjustStockLevel.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "adjustStockLevel__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
