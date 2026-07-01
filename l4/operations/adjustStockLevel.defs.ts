/// <mls fileReference="_102048_/l4/operations/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const operationAdjustStockLevel = {
  "operationId": "adjustStockLevel",
  "title": "Registrar Entrada/Ajuste de Estoque",
  "actor": "attendant",
  "entity": "StockLevel",
  "kind": "update",
  "reads": [
    "StockLevel",
    "StockLevel.currentQuantity",
    "StockLevel.minQuantity",
    "StockLevel.status",
    "StockItem"
  ],
  "writes": [
    "StockLevel",
    "StockLevel.currentQuantity",
    "StockLevel.status",
    "StockLevel.updatedAt"
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Registrar entrada de mercadoria ou ajuste manual de quantidade de estoque",
    "steps": [
      "Atendente seleciona o item de estoque",
      "Informa a quantidade de entrada ou ajuste e o motivo",
      "Confirma o registro"
    ],
    "outcome": "Nível de estoque atualizado com histórico de movimentação"
  },
  "capability": {
    "capabilityId": "adjustStockLevel",
    "title": "Registrar Entrada/Ajuste de Estoque",
    "actor": "attendant",
    "priority": "now"
  },
  "pageId": "adjustStockLevel",
  "commandName": "adjustStockLevel",
  "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel",
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationAdjustStockLevel;
