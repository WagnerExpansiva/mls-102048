/// <mls fileReference="_102048_/l4/operations/deleteTable.defs.ts" enhancement="_blank"/>

export const operationDeleteTable = {
  "operationId": "deleteTable",
  "title": "Remover Mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "delete",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Remover uma mesa que não será mais utilizada",
    "steps": [
      "Gerente seleciona a mesa a ser removida",
      "Confirma a exclusão"
    ],
    "outcome": "Mesa removida e indisponível para novos pedidos"
  },
  "capability": {
    "capabilityId": "manageTable",
    "title": "Gerenciar Mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteTable",
  "commandName": "deleteTable",
  "bffName": "cafeFlow.deleteTable.deleteTable",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationDeleteTable;
