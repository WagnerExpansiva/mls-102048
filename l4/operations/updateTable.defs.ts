/// <mls fileReference="_102048_/l4/operations/updateTable.defs.ts" enhancement="_blank"/>

export const operationUpdateTable = {
  "operationId": "updateTable",
  "title": "Editar Mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "update",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table.tableNumber",
    "Table.capacity",
    "Table.status",
    "Table.updatedAt"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Atualizar dados de uma mesa",
    "steps": [
      "Gerente localiza a mesa desejada",
      "Altera número, nome ou status",
      "Salva as alterações"
    ],
    "outcome": "Mesa atualizada no sistema"
  },
  "capability": {
    "capabilityId": "manageTable",
    "title": "Gerenciar Mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateTable",
  "commandName": "updateTable",
  "bffName": "cafeFlow.updateTable.updateTable",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationUpdateTable;
