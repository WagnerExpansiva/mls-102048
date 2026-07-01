/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateTable",
  "pageName": "Editar Mesa",
  "actor": "manager",
  "purpose": "Executar Editar Mesa.",
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
        "id": "updateTable",
        "defPath": "_102048_/l4/operations/updateTable.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.editTable",
      "type": "section",
      "sectionName": "Editar Mesa",
      "titleKey": "updateTable.section.editTable.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.updateTableForm",
          "type": "form",
          "organismName": "UpdateTable",
          "titleKey": "updateTable.organism.updateTableForm.title",
          "purpose": "Editar Mesa",
          "userActions": [
            "updateTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [
            "Table.tableNumber",
            "Table.capacity",
            "Table.status",
            "Table.updatedAt"
          ],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.updateTable.commandForm",
              "intent": "commandForm",
              "submitAction": "updateTable",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "updateTable.default",
    "type": "page",
    "sections": [
      {
        "id": "section.editTable",
        "type": "section",
        "sectionName": "Editar Mesa",
        "titleKey": "updateTable.section.editTable.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.updateTableForm",
            "type": "form",
            "organismName": "UpdateTable",
            "titleKey": "updateTable.organism.updateTableForm.title",
            "purpose": "Editar Mesa",
            "userActions": [
              "updateTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [
              "Table.tableNumber",
              "Table.capacity",
              "Table.status",
              "Table.updatedAt"
            ],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intention.updateTable.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "updateTable.intention.commandForm.title",
                "submitAction": "updateTable",
                "fields": [
                  {
                    "id": "field.tableNumber",
                    "field": "tableNumber",
                    "labelKey": "updateTable.field.tableNumber.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.updateTable.input.updateTable.tableNumber"
                  },
                  {
                    "id": "field.capacity",
                    "field": "capacity",
                    "labelKey": "updateTable.field.capacity.label",
                    "order": 20,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.updateTable.input.updateTable.capacity"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "updateTable.field.status.label",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.updateTable.input.updateTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.updateTable.submit",
                    "action": "updateTable",
                    "labelKey": "updateTable.action.updateTable.submit.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateTable"
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
    "id": "updateTable__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/updateTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/updateTable.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/updateTable.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateTable.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/updateTable.ts"
    ],
    "dependsOn": [
      "updateTable__l2_shared"
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
