/// <mls fileReference="_102048_/l4/operations/updateStockItem.defs.ts" enhancement="_blank"/>

export const operationUpdateStockItem = {
  "operationId": "updateStockItem",
  "title": "Editar Item de Estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "update",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "StockItem",
    "StockItem.name",
    "StockItem.unitOfMeasure",
    "StockItem.minimumStockLevel",
    "StockItem.status",
    "StockItem.updatedAt"
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Atualizar dados de um item de estoque",
    "steps": [
      "Gerente localiza o item de estoque",
      "Altera nome, unidade ou parâmetros de alerta",
      "Salva as alterações"
    ],
    "outcome": "Item de estoque atualizado para controle correto"
  },
  "capability": {
    "capabilityId": "manageStockItem",
    "title": "Gerenciar Item de Estoque (Cadastro)",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateStockItem",
  "commandName": "updateStockItem",
  "bffName": "cafeFlow.updateStockItem.updateStockItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationUpdateStockItem;
