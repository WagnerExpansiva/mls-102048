/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteMenuItem",
  "pageName": "Remover Item de Cardápio",
  "actor": "manager",
  "purpose": "Executar Remover Item de Cardápio.",
  "capabilities": [
    "manageMenuItem"
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
        "id": "deleteMenuItem",
        "defPath": "_102048_/l4/operations/deleteMenuItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec.deleteMenuItem.main",
      "type": "section",
      "sectionName": "Remover Item de Cardápio",
      "titleKey": "deleteMenuItem.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org.deleteMenuItem.form",
          "type": "form",
          "organismName": "DeleteMenuItem",
          "titleKey": "deleteMenuItem.organism.title",
          "purpose": "Remover Item de Cardápio",
          "userActions": [
            "deleteMenuItem"
          ],
          "requiredEntities": [
            "MenuItem",
            "OrderItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "stockConsumptionRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.deleteMenuItem.command",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "deleteMenuItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec.deleteMenuItem.main",
        "type": "section",
        "sectionName": "Remover Item de Cardápio",
        "titleKey": "deleteMenuItem.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org.deleteMenuItem.form",
            "type": "form",
            "organismName": "DeleteMenuItem",
            "titleKey": "deleteMenuItem.organism.title",
            "purpose": "Remover Item de Cardápio",
            "userActions": [
              "deleteMenuItem"
            ],
            "requiredEntities": [
              "MenuItem",
              "OrderItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "stockConsumptionRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.deleteMenuItem.command",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "deleteMenuItem.intent.command.title",
                "fields": [
                  {
                    "id": "field.deleteMenuItem.menuItemId",
                    "field": "menuItemId",
                    "labelKey": "deleteMenuItem.field.menuItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.menuItemId"
                  },
                  {
                    "id": "field.deleteMenuItem.name",
                    "field": "name",
                    "labelKey": "deleteMenuItem.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.name"
                  },
                  {
                    "id": "field.deleteMenuItem.category",
                    "field": "category",
                    "labelKey": "deleteMenuItem.field.category",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.category"
                  },
                  {
                    "id": "field.deleteMenuItem.price",
                    "field": "price",
                    "labelKey": "deleteMenuItem.field.price",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.price"
                  },
                  {
                    "id": "field.deleteMenuItem.stockItemId",
                    "field": "stockItemId",
                    "labelKey": "deleteMenuItem.field.stockItemId",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.stockItemId"
                  },
                  {
                    "id": "field.deleteMenuItem.status",
                    "field": "status",
                    "labelKey": "deleteMenuItem.field.status",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.deleteMenuItem.input.deleteMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.deleteMenuItem.submit",
                    "action": "deleteMenuItem",
                    "labelKey": "deleteMenuItem.action.submit",
                    "order": 10,
                    "actionKey": "deleteMenuItem"
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
    "id": "deleteMenuItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/deleteMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/deleteMenuItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts"
    ],
    "dependsOn": [
      "deleteMenuItem__l2_shared"
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
