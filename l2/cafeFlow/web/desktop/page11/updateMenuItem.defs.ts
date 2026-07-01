/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateMenuItem",
  "pageName": "Editar Item de Cardápio",
  "actor": "manager",
  "purpose": "Executar Editar Item de Cardápio.",
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
        "id": "updateMenuItem",
        "defPath": "_102048_/l4/operations/updateMenuItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.editMenuItem",
      "type": "section",
      "sectionName": "Editar Item de Cardápio",
      "titleKey": "updateMenuItem.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.updateMenuItem",
          "type": "form",
          "organismName": "UpdateMenuItem",
          "titleKey": "updateMenuItem.organism.title",
          "purpose": "Editar Item de Cardápio",
          "userActions": [
            "updateMenuItem"
          ],
          "requiredEntities": [
            "MenuItem",
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [
            "MenuItem.name",
            "MenuItem.price",
            "MenuItem.status",
            "MenuItem.stockItemId",
            "MenuItem.updatedAt"
          ],
          "rulesApplied": [
            "stockConsumptionRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.updateMenuItemForm",
              "intent": "commandForm",
              "submitAction": "updateMenuItem",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "updateMenuItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.editMenuItem",
        "type": "section",
        "sectionName": "Editar Item de Cardápio",
        "titleKey": "updateMenuItem.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.updateMenuItem",
            "type": "form",
            "organismName": "UpdateMenuItem",
            "titleKey": "updateMenuItem.organism.title",
            "purpose": "Editar Item de Cardápio",
            "userActions": [
              "updateMenuItem"
            ],
            "requiredEntities": [
              "MenuItem",
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [
              "MenuItem.name",
              "MenuItem.price",
              "MenuItem.status",
              "MenuItem.stockItemId",
              "MenuItem.updatedAt"
            ],
            "rulesApplied": [
              "stockConsumptionRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.updateMenuItemForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "updateMenuItem.form.title",
                "submitAction": "updateMenuItem",
                "fields": [
                  {
                    "id": "field.menuItem.name",
                    "field": "name",
                    "labelKey": "updateMenuItem.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.updateMenuItem.input.updateMenuItem.name"
                  },
                  {
                    "id": "field.menuItem.price",
                    "field": "price",
                    "labelKey": "updateMenuItem.field.price",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.updateMenuItem.input.updateMenuItem.price"
                  },
                  {
                    "id": "field.menuItem.stockItemId",
                    "field": "stockItemId",
                    "labelKey": "updateMenuItem.field.stockItemId",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.updateMenuItem.input.updateMenuItem.stockItemId"
                  },
                  {
                    "id": "field.menuItem.status",
                    "field": "status",
                    "labelKey": "updateMenuItem.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.updateMenuItem.input.updateMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.updateMenuItem.submit",
                    "action": "updateMenuItem",
                    "labelKey": "updateMenuItem.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateMenuItem"
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
    "id": "updateMenuItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/updateMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/updateMenuItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts"
    ],
    "dependsOn": [
      "updateMenuItem__l2_shared"
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
