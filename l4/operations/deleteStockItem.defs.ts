/// <mls fileReference="_102048_/l4/operations/deleteStockItem.defs.ts" enhancement="_blank"/>

export const operationDeleteStockItem = {
  "operationId": "deleteStockItem",
  "title": "Remover Item de Estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "delete",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "StockItem"
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Remover um item de estoque que não é mais utilizado",
    "steps": [
      "Gerente seleciona o item a ser removido",
      "Confirma a exclusão"
    ],
    "outcome": "Item removido do controle de estoque"
  },
  "capability": {
    "capabilityId": "manageStockItem",
    "title": "Gerenciar Item de Estoque (Cadastro)",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteStockItem",
  "commandName": "deleteStockItem",
  "bffName": "cafeFlow.deleteStockItem.deleteStockItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationDeleteStockItem;
