/// <mls fileReference="_102048_/l4/operations/createStockItem.defs.ts" enhancement="_blank"/>

export const operationCreateStockItem = {
  "operationId": "createStockItem",
  "title": "Cadastrar Item de Estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "create",
  "reads": [],
  "writes": [
    "StockItem",
    "StockItem.stockItemId",
    "StockItem.name",
    "StockItem.unitOfMeasure",
    "StockItem.minimumStockLevel",
    "StockItem.status",
    "StockItem.createdAt",
    "StockItem.updatedAt"
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Cadastrar um novo insumo/produto no controle de estoque",
    "steps": [
      "Gerente acessa o cadastro de itens de estoque",
      "Preenche nome, unidade de medida e quantidade inicial",
      "Salva o novo item"
    ],
    "outcome": "Novo item de estoque disponível para controle de entradas e consumo"
  },
  "capability": {
    "capabilityId": "manageStockItem",
    "title": "Gerenciar Item de Estoque (Cadastro)",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createStockItem",
  "commandName": "createStockItem",
  "bffName": "cafeFlow.createStockItem.createStockItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationCreateStockItem;
