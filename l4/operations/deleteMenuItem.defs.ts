/// <mls fileReference="_102048_/l4/operations/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const operationDeleteMenuItem = {
  "operationId": "deleteMenuItem",
  "title": "Remover Item de Cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "delete",
  "reads": [
    "MenuItem",
    "OrderItem"
  ],
  "writes": [
    "MenuItem"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Remover um item que não será mais oferecido",
    "steps": [
      "Gerente seleciona o item a ser removido",
      "Confirma a exclusão"
    ],
    "outcome": "Item removido do cardápio e indisponível para novos pedidos"
  },
  "capability": {
    "capabilityId": "manageMenuItem",
    "title": "Gerenciar Item de Cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteMenuItem",
  "commandName": "deleteMenuItem",
  "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationDeleteMenuItem;
