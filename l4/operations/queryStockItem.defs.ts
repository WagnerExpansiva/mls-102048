/// <mls fileReference="_102048_/l4/operations/queryStockItem.defs.ts" enhancement="_blank"/>

export const operationQueryStockItem = {
  "operationId": "queryStockItem",
  "title": "Consultar Itens de Estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "query",
  "reads": [
    "StockItem"
  ],
  "writes": [],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar itens de estoque cadastrados",
    "steps": [
      "Gerente acessa a lista de itens de estoque",
      "Filtra por nome ou categoria"
    ],
    "outcome": "Lista de itens de estoque exibida para gestão"
  },
  "capability": {
    "capabilityId": "manageStockItem",
    "title": "Gerenciar Item de Estoque (Cadastro)",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryStockItem",
  "commandName": "queryStockItem",
  "bffName": "cafeFlow.queryStockItem.queryStockItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationQueryStockItem;
