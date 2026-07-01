/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "createTable",
  "pageName": "Cadastrar Mesa",
  "actor": "manager",
  "purpose": "Executar Cadastrar Mesa.",
  "capabilities": [
    "manageTable"
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
        "id": "createTable",
        "defPath": "_102048_/l4/operations/createTable.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.createTable",
      "type": "section",
      "sectionName": "Cadastrar Mesa",
      "titleKey": "createTable.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createTable.form",
          "type": "form",
          "organismName": "CreateTable",
          "titleKey": "createTable.organism.title",
          "purpose": "Cadastrar Mesa",
          "userActions": [
            "createTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [
            "tableNumber",
            "capacity",
            "status"
          ],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.createTable.form",
              "intent": "commandForm",
              "action": "createTable",
              "submitAction": "createTable",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "createTable.default",
    "type": "page",
    "sections": [
      {
        "id": "section.createTable",
        "type": "section",
        "sectionName": "Cadastrar Mesa",
        "titleKey": "createTable.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createTable.form",
            "type": "form",
            "organismName": "CreateTable",
            "titleKey": "createTable.organism.title",
            "purpose": "Cadastrar Mesa",
            "userActions": [
              "createTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [
              "tableNumber",
              "capacity",
              "status"
            ],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intention.createTable.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "createTable.intention.form.title",
                "action": "createTable",
                "submitAction": "createTable",
                "fields": [
                  {
                    "id": "field.tableNumber",
                    "field": "tableNumber",
                    "labelKey": "createTable.field.tableNumber",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.createTable.input.createTable.tableNumber"
                  },
                  {
                    "id": "field.capacity",
                    "field": "capacity",
                    "labelKey": "createTable.field.capacity",
                    "order": 20,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.createTable.input.createTable.capacity"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "createTable.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.createTable.input.createTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createTable.submit",
                    "action": "createTable",
                    "labelKey": "createTable.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createTable"
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
    "id": "createTable__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/createTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/createTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/createTable.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/createTable.ts",
      "_102048_/l2/cafeFlow/web/contracts/createTable.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/createTable.ts"
    ],
    "dependsOn": [
      "createTable__l2_shared"
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
