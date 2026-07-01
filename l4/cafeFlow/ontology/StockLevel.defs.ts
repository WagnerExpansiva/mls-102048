/// <mls fileReference="_102048_/l4/cafeFlow/ontology/StockLevel.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockLevel = {
  "entityId": "StockLevel",
  "title": "Estado de Estoque",
  "description": "Estado operacional live da quantidade atual de um item de estoque. Atualizado por consumo automático em pedidos e por entradas/ajustes manuais.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "stockLevelId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do estado de estoque."
    },
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de estoque rastreado."
    },
    {
      "fieldId": "currentQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade atual live disponível em estoque."
    },
    {
      "fieldId": "minQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade mínima configurada para disparar alerta de estoque baixo."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação operacional do estoque.",
      "enum": [
        "sufficient",
        "low",
        "depleted"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
    }
  ],
  "statusEnum": [
    "sufficient",
    "low",
    "depleted"
  ],
  "lifecycleStates": [
    "sufficient",
    "low",
    "depleted"
  ],
  "rulesApplied": [
    "stockConsumptionRule",
    "lowStockAlertRule"
  ]
} as const;

export default cafeFlowEntityStockLevel;
