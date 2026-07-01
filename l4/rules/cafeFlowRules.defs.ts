/// <mls fileReference="_102048_/l4/rules/cafeFlowRules.defs.ts" enhancement="_blank"/>

export const cafeFlowRules = {
  "ruleSetId": "cafeFlowRules",
  "rules": [
    {
      "ruleId": "stockConsumptionRule",
      "title": "Regra de Consumo de Estoque",
      "description": "Ao confirmar um pedido enviado à cozinha, o sistema deduz automaticamente as quantidades de ingredientes conforme a receita de cada item do cardápio. Se um ingrediente estiver esgotado, o item correspondente não pode ser pedido.",
      "appliesTo": [
        "Order",
        "OrderItem",
        "StockLevel",
        "MenuItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "lowStockAlertRule",
      "title": "Regra de Alerta de Estoque Baixo",
      "description": "Quando a quantidade atual de um item de estoque atinge ou fica abaixo do parâmetro de estoque mínimo, o sistema marca o estado como 'low' e exibe o alerta no dashboard do Gerente.",
      "appliesTo": [
        "StockLevel",
        "StockItem"
      ],
      "layer": "domain"
    }
  ]
} as const;

export default cafeFlowRules;
