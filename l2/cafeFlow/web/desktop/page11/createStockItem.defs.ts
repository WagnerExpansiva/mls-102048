/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createStockItem",
  "pageName": "Cadastrar Item de Estoque",
  "actor": "manager",
  "purpose": "Executar Cadastrar Item de Estoque.",
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
        "id": "createStockItem",
        "defPath": "_102048_/l4/operations/createStockItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.createStockItem",
      "type": "section",
      "sectionName": "Cadastrar Item de Estoque",
      "titleKey": "section.createStockItem.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createStockItem.form",
          "type": "form",
          "organismName": "CreateStockItem",
          "titleKey": "createStockItem.section.title",
          "purpose": "Cadastrar Item de Estoque",
          "userActions": [
            "createStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [
            "StockItem.stockItemId",
            "StockItem.name",
            "StockItem.unitOfMeasure",
            "StockItem.minimumStockLevel",
            "StockItem.status",
            "StockItem.createdAt",
            "StockItem.updatedAt"
          ],
          "rulesApplied": [
            "lowStockAlertRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.createStockItem.commandForm",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "createStockItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.createStockItem",
        "type": "section",
        "sectionName": "Cadastrar Item de Estoque",
        "titleKey": "section.createStockItem.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createStockItem.form",
            "type": "form",
            "organismName": "CreateStockItem",
            "titleKey": "createStockItem.section.title",
            "purpose": "Cadastrar Item de Estoque",
            "userActions": [
              "createStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [
              "StockItem.stockItemId",
              "StockItem.name",
              "StockItem.unitOfMeasure",
              "StockItem.minimumStockLevel",
              "StockItem.status",
              "StockItem.createdAt",
              "StockItem.updatedAt"
            ],
            "rulesApplied": [
              "lowStockAlertRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.createStockItem.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "createStockItem.form.title",
                "fields": [
                  {
                    "id": "field.stockItem.name",
                    "field": "name",
                    "labelKey": "stockItem.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.createStockItem.input.createStockItem.name"
                  },
                  {
                    "id": "field.stockItem.unitOfMeasure",
                    "field": "unitOfMeasure",
                    "labelKey": "stockItem.field.unitOfMeasure",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.createStockItem.input.createStockItem.unitOfMeasure"
                  },
                  {
                    "id": "field.stockItem.minimumStockLevel",
                    "field": "minimumStockLevel",
                    "labelKey": "stockItem.field.minimumStockLevel",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.createStockItem.input.createStockItem.minimumStockLevel"
                  },
                  {
                    "id": "field.stockItem.status",
                    "field": "status",
                    "labelKey": "stockItem.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.createStockItem.input.createStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createStockItem.submit",
                    "action": "createStockItem",
                    "labelKey": "createStockItem.action.submit",
                    "order": 10,
                    "actionKey": "createStockItem"
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
    "id": "createStockItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/createStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/createStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/createStockItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/createStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/createStockItem.ts"
    ],
    "dependsOn": [
      "createStockItem__l2_shared"
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
