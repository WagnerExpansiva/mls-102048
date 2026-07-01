/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "adjustStockLevel",
  "pageName": "Registrar Entrada/Ajuste de Estoque",
  "actor": "attendant",
  "purpose": "Executar Registrar Entrada/Ajuste de Estoque.",
  "capabilities": [
    "adjustStockLevel"
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
        "id": "adjustStockLevel",
        "defPath": "_102048_/l4/operations/adjustStockLevel.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.adjustStockLevel",
      "type": "section",
      "sectionName": "Registrar Entrada/Ajuste de Estoque",
      "titleKey": "adjustStockLevel.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.adjustStockLevel",
          "type": "form",
          "organismName": "AdjustStockLevel",
          "titleKey": "adjustStockLevel.organism.title",
          "purpose": "Registrar Entrada/Ajuste de Estoque",
          "userActions": [
            "adjustStockLevel"
          ],
          "requiredEntities": [
            "StockLevel",
            "StockItem"
          ],
          "readsFields": [
            "StockLevel.currentQuantity",
            "StockLevel.minQuantity",
            "StockLevel.status"
          ],
          "writesFields": [
            "StockLevel.currentQuantity",
            "StockLevel.status",
            "StockLevel.updatedAt"
          ],
          "rulesApplied": [
            "lowStockAlertRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.adjustStockLevel.commandForm",
              "intent": "commandForm",
              "action": "adjustStockLevel",
              "submitAction": "adjustStockLevel",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "adjustStockLevel.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.adjustStockLevel",
        "type": "section",
        "sectionName": "Registrar Entrada/Ajuste de Estoque",
        "titleKey": "adjustStockLevel.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.adjustStockLevel",
            "type": "form",
            "organismName": "AdjustStockLevel",
            "titleKey": "adjustStockLevel.organism.title",
            "purpose": "Registrar Entrada/Ajuste de Estoque",
            "userActions": [
              "adjustStockLevel"
            ],
            "requiredEntities": [
              "StockLevel",
              "StockItem"
            ],
            "readsFields": [
              "StockLevel.currentQuantity",
              "StockLevel.minQuantity",
              "StockLevel.status"
            ],
            "writesFields": [
              "StockLevel.currentQuantity",
              "StockLevel.status",
              "StockLevel.updatedAt"
            ],
            "rulesApplied": [
              "lowStockAlertRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.adjustStockLevel.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "adjustStockLevel.intent.commandForm.title",
                "action": "adjustStockLevel",
                "submitAction": "adjustStockLevel",
                "fields": [
                  {
                    "id": "field.currentQuantity",
                    "field": "currentQuantity",
                    "labelKey": "adjustStockLevel.field.currentQuantity",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.currentQuantity"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "adjustStockLevel.field.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.adjustStockLevel.input.adjustStockLevel.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.adjustStockLevel.submit",
                    "action": "adjustStockLevel",
                    "labelKey": "adjustStockLevel.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "adjustStockLevel"
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
    "id": "adjustStockLevel__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/adjustStockLevel.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/adjustStockLevel.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/adjustStockLevel.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/adjustStockLevel.ts",
      "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.ts"
    ],
    "dependsOn": [
      "adjustStockLevel__l2_shared"
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
