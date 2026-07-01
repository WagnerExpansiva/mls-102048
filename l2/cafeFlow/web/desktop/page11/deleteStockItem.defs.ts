/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteStockItem",
  "pageName": "Remover Item de Estoque",
  "actor": "manager",
  "purpose": "Executar Remover Item de Estoque.",
  "capabilities": [
    "manageStockItem"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4",
    "sourceKind": "operation",
    "owners": [
      {
        "kind": "operation",
        "id": "deleteStockItem",
        "defPath": "_102048_/l4/operations/deleteStockItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-delete-stock-item",
      "type": "section",
      "sectionName": "Remover Item de Estoque",
      "titleKey": "deleteStockItem.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-delete-stock-item",
          "type": "formPanel",
          "organismName": "DeleteStockItem",
          "titleKey": "deleteStockItem.organism.delete.title",
          "purpose": "Remover Item de Estoque",
          "userActions": [
            "deleteStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [
            "stockItemId",
            "name",
            "unitOfMeasure",
            "minimumStockLevel",
            "status"
          ],
          "writesFields": [
            "stockItemId",
            "name",
            "unitOfMeasure",
            "minimumStockLevel",
            "status"
          ],
          "rulesApplied": [
            "lowStockAlertRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-delete-stock-item-command",
              "intent": "commandForm",
              "action": "deleteStockItem",
              "submitAction": "deleteStockItem",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "deleteStockItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-delete-stock-item",
        "type": "section",
        "sectionName": "Remover Item de Estoque",
        "titleKey": "deleteStockItem.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-delete-stock-item",
            "type": "formPanel",
            "organismName": "DeleteStockItem",
            "titleKey": "deleteStockItem.organism.delete.title",
            "purpose": "Remover Item de Estoque",
            "userActions": [
              "deleteStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [
              "stockItemId",
              "name",
              "unitOfMeasure",
              "minimumStockLevel",
              "status"
            ],
            "writesFields": [
              "stockItemId",
              "name",
              "unitOfMeasure",
              "minimumStockLevel",
              "status"
            ],
            "rulesApplied": [
              "lowStockAlertRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-delete-stock-item-command",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "deleteStockItem.intent.command.title",
                "action": "deleteStockItem",
                "submitAction": "deleteStockItem",
                "fields": [
                  {
                    "id": "fld-stockItemId",
                    "field": "stockItemId",
                    "labelKey": "deleteStockItem.field.stockItemId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.deleteStockItem.input.deleteStockItem.stockItemId"
                  },
                  {
                    "id": "fld-name",
                    "field": "name",
                    "labelKey": "deleteStockItem.field.name.label",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.deleteStockItem.input.deleteStockItem.name"
                  },
                  {
                    "id": "fld-unitOfMeasure",
                    "field": "unitOfMeasure",
                    "labelKey": "deleteStockItem.field.unitOfMeasure.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.deleteStockItem.input.deleteStockItem.unitOfMeasure"
                  },
                  {
                    "id": "fld-minimumStockLevel",
                    "field": "minimumStockLevel",
                    "labelKey": "deleteStockItem.field.minimumStockLevel.label",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.deleteStockItem.input.deleteStockItem.minimumStockLevel"
                  },
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "deleteStockItem.field.status.label",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.deleteStockItem.input.deleteStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-delete-stock-item",
                    "action": "deleteStockItem",
                    "labelKey": "deleteStockItem.action.delete.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "deleteStockItem"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "deleteStockItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/deleteStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/deleteStockItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteStockItem.ts"
    ],
    "dependsOn": [
      "deleteStockItem__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Limpo e prático, otimizado para toque em tablet/computador no caixa e na cozinha; cores quentes e acolhedoras (tons de café), tipografia legível em alta velocidade."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
