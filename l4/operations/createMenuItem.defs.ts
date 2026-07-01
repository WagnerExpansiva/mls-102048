/// <mls fileReference="_102048_/l4/operations/createMenuItem.defs.ts" enhancement="_blank"/>

export const operationCreateMenuItem = {
  "operationId": "createMenuItem",
  "title": "Cadastrar Item de Cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "create",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "MenuItem"
  ],
  "rulesApplied": [
    "stockConsumptionRule"
  ],
  "story": {
    "actor": "manager",
    "goal": "Adicionar um novo item ao cardápio da cafeteria",
    "steps": [
      "Gerente acessa o cadastro de itens de cardápio",
      "Preenche nome, preço, categoria e descrição",
      "Salva o novo item"
    ],
    "outcome": "Novo item de cardápio disponível para pedidos no POS"
  },
  "capability": {
    "capabilityId": "manageMenuItem",
    "title": "Gerenciar Item de Cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createMenuItem",
  "commandName": "createMenuItem",
  "bffName": "cafeFlow.createMenuItem.createMenuItem",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationCreateMenuItem;
