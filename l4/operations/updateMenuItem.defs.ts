/// <mls fileReference="_102048_/l4/operations/updateMenuItem.defs.ts" enhancement="_blank"/>

export const operationUpdateMenuItem = {
  "operationId": "updateMenuItem",
  "title": "Editar Item de Cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "update",
  "reads": [
    "MenuItem",
    "StockItem"
  ],
  "writes": [
    "MenuItem",
    "MenuItem.name",
    "MenuItem.price",
    "MenuItem.status",
    "MenuItem.stockItemId",
    "MenuItem.updatedAt"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Atualizar informações de um item do cardápio",
    "steps": [
      "Gerente localiza o item desejado",
      "Altera preço, nome, descrição ou disponibilidade",
      "Salva as alterações"
    ],
    "outcome": "Item de cardápio atualizado e refletido no POS"
  },
  "capability": {
    "capabilityId": "manageMenuItem",
    "title": "Gerenciar Item de Cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateMenuItem",
  "commandName": "updateMenuItem",
  "bffName": "cafeFlow.updateMenuItem.updateMenuItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationUpdateMenuItem;
