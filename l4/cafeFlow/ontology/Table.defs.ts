/// <mls fileReference="_102048_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa (Cadastro)",
  "description": "Registro cadastral de mesa física da cafeteria para identificação em pedidos dine-in.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mesa."
    },
    {
      "fieldId": "tableNumber",
      "type": "string",
      "required": true,
      "description": "Número ou código identificador da mesa física."
    },
    {
      "fieldId": "capacity",
      "type": "number",
      "required": false,
      "description": "Capacidade de assentos da mesa."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação cadastral da mesa.",
      "enum": [
        "active",
        "inactive"
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
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityTable;
