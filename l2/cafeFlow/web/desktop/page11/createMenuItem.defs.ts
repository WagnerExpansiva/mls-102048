/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createMenuItem",
  "pageName": "Cadastrar Item de Cardápio",
  "actor": "manager",
  "purpose": "Executar Cadastrar Item de Cardápio.",
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
        "id": "createMenuItem",
        "defPath": "_102048_/l4/operations/createMenuItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.createMenuItem",
      "type": "section",
      "sectionName": "Cadastrar Item de Cardápio",
      "titleKey": "createMenuItem.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createMenuItem.form",
          "type": "form",
          "organismName": "CreateMenuItem",
          "titleKey": "createMenuItem.organism.title",
          "purpose": "Cadastrar Item de Cardápio",
          "userActions": [
            "createMenuItem"
          ],
          "requiredEntities": [
            "MenuItem",
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [
            "name",
            "category",
            "price",
            "status"
          ],
          "rulesApplied": [
            "stockConsumptionRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.createMenuItem.commandForm",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "createMenuItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.createMenuItem",
        "type": "section",
        "sectionName": "Cadastrar Item de Cardápio",
        "titleKey": "createMenuItem.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createMenuItem.form",
            "type": "form",
            "organismName": "CreateMenuItem",
            "titleKey": "createMenuItem.organism.title",
            "purpose": "Cadastrar Item de Cardápio",
            "userActions": [
              "createMenuItem"
            ],
            "requiredEntities": [
              "MenuItem",
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [
              "name",
              "category",
              "price",
              "status"
            ],
            "rulesApplied": [
              "stockConsumptionRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.createMenuItem.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "createMenuItem.intent.commandForm.title",
                "fields": [
                  {
                    "id": "field.menuItem.name",
                    "field": "name",
                    "labelKey": "menuItem.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.createMenuItem.input.createMenuItem.name"
                  },
                  {
                    "id": "field.menuItem.category",
                    "field": "category",
                    "labelKey": "menuItem.field.category",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.createMenuItem.input.createMenuItem.category"
                  },
                  {
                    "id": "field.menuItem.price",
                    "field": "price",
                    "labelKey": "menuItem.field.price",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.createMenuItem.input.createMenuItem.price"
                  },
                  {
                    "id": "field.menuItem.status",
                    "field": "status",
                    "labelKey": "menuItem.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.createMenuItem.input.createMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createMenuItem.submit",
                    "action": "createMenuItem",
                    "labelKey": "createMenuItem.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createMenuItem"
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
    "id": "createMenuItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/createMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/createMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/createMenuItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/createMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts"
    ],
    "dependsOn": [
      "createMenuItem__l2_shared"
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
