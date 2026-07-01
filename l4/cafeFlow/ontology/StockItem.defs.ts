/// <mls fileReference="_102048_/l4/cafeFlow/ontology/StockItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockItem = {
  "entityId": "StockItem",
  "title": "Item de Estoque (Cadastro)",
  "description": "Registro cadastral de ingrediente/suprimento: nome, unidade de medida e parâmetro de estoque mínimo.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de estoque"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do ingrediente ou suprimento"
    },
    {
      "fieldId": "unitOfMeasure",
      "type": "string",
      "required": true,
      "description": "Unidade de medida do item (ex: kg, litro, unidade, etc.)"
    },
    {
      "fieldId": "minimumStockLevel",
      "type": "number",
      "required": true,
      "description": "Parâmetro de quantidade mínima em estoque para geração de alerta"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação cadastral do item de estoque",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ]
} as const;

export default cafeFlowEntityStockItem;
