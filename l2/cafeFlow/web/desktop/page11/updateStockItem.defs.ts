/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateStockItem",
  "pageName": "Editar Item de Estoque",
  "actor": "manager",
  "purpose": "Executar Editar Item de Estoque.",
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
        "id": "updateStockItem",
        "defPath": "_102048_/l4/operations/updateStockItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-edit-stock-item",
      "type": "section",
      "sectionName": "Editar Item de Estoque",
      "titleKey": "section.editStockItem.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-update-stock-item",
          "type": "form",
          "organismName": "UpdateStockItem",
          "titleKey": "organism.updateStockItem.title",
          "purpose": "Editar Item de Estoque",
          "userActions": [
            "updateStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [
            "StockItem.name",
            "StockItem.unitOfMeasure",
            "StockItem.minimumStockLevel",
            "StockItem.status",
            "StockItem.updatedAt"
          ],
          "rulesApplied": [
            "lowStockAlertRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-update-stock-item-form",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "updateStockItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-edit-stock-item",
        "type": "section",
        "sectionName": "Editar Item de Estoque",
        "titleKey": "section.editStockItem.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-update-stock-item",
            "type": "form",
            "organismName": "UpdateStockItem",
            "titleKey": "organism.updateStockItem.title",
            "purpose": "Editar Item de Estoque",
            "userActions": [
              "updateStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [
              "StockItem.name",
              "StockItem.unitOfMeasure",
              "StockItem.minimumStockLevel",
              "StockItem.status",
              "StockItem.updatedAt"
            ],
            "rulesApplied": [
              "lowStockAlertRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention-update-stock-item-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.updateStockItemForm.title",
                "fields": [
                  {
                    "id": "field-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.updateStockItem.input.updateStockItem.name"
                  },
                  {
                    "id": "field-unit-of-measure",
                    "field": "unitOfMeasure",
                    "labelKey": "field.unitOfMeasure.label",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.updateStockItem.input.updateStockItem.unitOfMeasure"
                  },
                  {
                    "id": "field-minimum-stock-level",
                    "field": "minimumStockLevel",
                    "labelKey": "field.minimumStockLevel.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.updateStockItem.input.updateStockItem.minimumStockLevel"
                  },
                  {
                    "id": "field-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.updateStockItem.input.updateStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-stock-item",
                    "action": "updateStockItem",
                    "labelKey": "action.updateStockItem.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateStockItem"
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
    "id": "updateStockItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/updateStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/updateStockItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts"
    ],
    "dependsOn": [
      "updateStockItem__l2_shared"
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
