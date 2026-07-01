/// <mls fileReference="_102048_/l4/operations/queryTable.defs.ts" enhancement="_blank"/>

export const operationQueryTable = {
  "operationId": "queryTable",
  "title": "Consultar Mesas",
  "actor": "manager",
  "entity": "Table",
  "kind": "query",
  "reads": [
    "Table"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Listar e visualizar mesas cadastradas e seus status",
    "steps": [
      "Gerente acessa a lista de mesas",
      "Visualiza status (livre/ocupada) e detalhes"
    ],
    "outcome": "Lista de mesas exibida para gestão e controle"
  },
  "capability": {
    "capabilityId": "manageTable",
    "title": "Gerenciar Mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryTable",
  "commandName": "queryTable",
  "bffName": "cafeFlow.queryTable.queryTable",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationQueryTable;
