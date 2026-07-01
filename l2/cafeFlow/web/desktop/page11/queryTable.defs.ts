/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryTable.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryTable",
  "pageName": "Consultar Mesas",
  "actor": "manager",
  "purpose": "Executar Consultar Mesas.",
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
        "id": "queryTable",
        "defPath": "_102048_/l4/operations/queryTable.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-query-table",
      "type": "section",
      "sectionName": "Consultar Mesas",
      "titleKey": "queryTable.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-query-table",
          "type": "organism",
          "organismName": "QueryTable",
          "titleKey": "queryTable.organism.title",
          "purpose": "Consultar Mesas",
          "userActions": [
            "queryTable"
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
              "id": "intent-query-table-list",
              "intent": "queryList",
              "stateKey": "ui.queryTable.data.queryTable",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "queryTable.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-query-table",
        "type": "section",
        "sectionName": "Consultar Mesas",
        "titleKey": "queryTable.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-query-table",
            "type": "organism",
            "organismName": "QueryTable",
            "titleKey": "queryTable.organism.title",
            "purpose": "Consultar Mesas",
            "userActions": [
              "queryTable"
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
                "id": "intent-query-table-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "queryTable.intent.list.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-table-id",
                    "field": "tableId",
                    "labelKey": "queryTable.field.tableId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.queryTable.data.queryTable"
                  },
                  {
                    "id": "col-table-number",
                    "field": "tableNumber",
                    "labelKey": "queryTable.field.tableNumber",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.queryTable.data.queryTable"
                  },
                  {
                    "id": "col-capacity",
                    "field": "capacity",
                    "labelKey": "queryTable.field.capacity",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.queryTable.data.queryTable"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "queryTable.field.status",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.queryTable.data.queryTable"
                  },
                  {
                    "id": "col-created-at",
                    "field": "createdAt",
                    "labelKey": "queryTable.field.createdAt",
                    "order": 50,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.queryTable.data.queryTable"
                  },
                  {
                    "id": "col-updated-at",
                    "field": "updatedAt",
                    "labelKey": "queryTable.field.updatedAt",
                    "order": 60,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.queryTable.data.queryTable"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-table-id",
                    "field": "tableId",
                    "labelKey": "queryTable.filter.tableId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryTable.input.queryTable.tableId"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "queryTable.filter.status",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.queryTable.input.queryTable.status"
                  },
                  {
                    "id": "filter-created-at",
                    "field": "createdAt",
                    "labelKey": "queryTable.filter.createdAt",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.queryTable.input.queryTable.createdAt"
                  },
                  {
                    "id": "filter-updated-at",
                    "field": "updatedAt",
                    "labelKey": "queryTable.filter.updatedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.queryTable.input.queryTable.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar-query-table",
                    "action": "queryTable",
                    "labelKey": "queryTable.action.query",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "queryTable"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-query-table",
                    "action": "queryTable",
                    "labelKey": "queryTable.action.query",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "queryTable"
                  }
                ],
                "stateKey": "ui.queryTable.data.queryTable"
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
    "id": "queryTable__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryTable.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryTable.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/queryTable.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/queryTable.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryTable.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryTable.ts"
    ],
    "dependsOn": [
      "queryTable__l2_shared"
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
