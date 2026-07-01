/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "deleteTable",
  "pageName": "Remover Mesa",
  "actor": "manager",
  "purpose": "Executar Remover Mesa.",
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
        "id": "deleteTable",
        "defPath": "_102048_/l4/operations/deleteTable.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.deleteTable",
      "type": "section",
      "sectionName": "Remover Mesa",
      "titleKey": "deleteTable.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.deleteTable",
          "type": "form",
          "organismName": "DeleteTable",
          "titleKey": "deleteTable.organism.title",
          "purpose": "Remover Mesa",
          "userActions": [
            "deleteTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.deleteTable.commandForm",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "deleteTable.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.deleteTable",
        "type": "section",
        "sectionName": "Remover Mesa",
        "titleKey": "deleteTable.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.deleteTable",
            "type": "form",
            "organismName": "DeleteTable",
            "titleKey": "deleteTable.organism.title",
            "purpose": "Remover Mesa",
            "userActions": [
              "deleteTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intention.deleteTable.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "deleteTable.intention.commandForm.title",
                "fields": [
                  {
                    "id": "field.deleteTable.tableId",
                    "field": "tableId",
                    "labelKey": "deleteTable.field.tableId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.deleteTable.input.deleteTable.tableId"
                  },
                  {
                    "id": "field.deleteTable.tableNumber",
                    "field": "tableNumber",
                    "labelKey": "deleteTable.field.tableNumber",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.deleteTable.input.deleteTable.tableNumber"
                  },
                  {
                    "id": "field.deleteTable.capacity",
                    "field": "capacity",
                    "labelKey": "deleteTable.field.capacity",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.deleteTable.input.deleteTable.capacity"
                  },
                  {
                    "id": "field.deleteTable.status",
                    "field": "status",
                    "labelKey": "deleteTable.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.deleteTable.input.deleteTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.deleteTable.submit",
                    "action": "deleteTable",
                    "labelKey": "deleteTable.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "deleteTable"
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
    "id": "deleteTable__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/deleteTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/deleteTable.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/deleteTable.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteTable.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/deleteTable.ts"
    ],
    "dependsOn": [
      "deleteTable__l2_shared"
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
