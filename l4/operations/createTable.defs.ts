/// <mls fileReference="_102048_/l4/operations/createTable.defs.ts" enhancement="_blank"/>

export const operationCreateTable = {
  "operationId": "createTable",
  "title": "Cadastrar Mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "create",
  "reads": [],
  "writes": [
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Adicionar uma nova mesa ao sistema",
    "steps": [
      "Gerente acessa o cadastro de mesas",
      "Informa número/nome da mesa e capacidade",
      "Salva a nova mesa"
    ],
    "outcome": "Nova mesa disponível para associação a pedidos"
  },
  "capability": {
    "capabilityId": "manageTable",
    "title": "Gerenciar Mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createTable",
  "commandName": "createTable",
  "bffName": "cafeFlow.createTable.createTable",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationCreateTable;
