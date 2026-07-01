/// <mls fileReference="_102048_/l4/operations/queryMenuItem.defs.ts" enhancement="_blank"/>

export const operationQueryMenuItem = {
  "operationId": "queryMenuItem",
  "title": "Consultar Itens de Cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "query",
  "reads": [
    "MenuItem",
    "StockItem"
  ],
  "writes": [],
  "rulesApplied": [
    "stockConsumptionRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar itens do cardápio",
    "steps": [
      "Gerente acessa a lista de itens de cardápio",
      "Filtra por categoria, nome ou disponibilidade"
    ],
    "outcome": "Lista de itens de cardápio exibida para gestão"
  },
  "capability": {
    "capabilityId": "manageMenuItem",
    "title": "Gerenciar Item de Cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryMenuItem",
  "commandName": "queryMenuItem",
  "bffName": "cafeFlow.queryMenuItem.queryMenuItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationQueryMenuItem;
