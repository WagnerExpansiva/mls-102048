/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryStockItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryStockItem",
  "pageName": "Consultar Itens de Estoque",
  "actor": "manager",
  "purpose": "Executar Consultar Itens de Estoque.",
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
        "id": "queryStockItem",
        "defPath": "_102048_/l4/operations/queryStockItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.queryStockItem.main",
      "type": "section",
      "sectionName": "Consultar Itens de Estoque",
      "titleKey": "queryStockItem.section.main.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism.queryStockItem.list",
          "type": "data",
          "organismName": "QueryStockItem",
          "titleKey": "queryStockItem.organism.list.title",
          "purpose": "Consultar Itens de Estoque",
          "userActions": [
            "queryStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [
            "stockItemId",
            "name",
            "unitOfMeasure",
            "minimumStockLevel",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "lowStockAlertRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.queryStockItem.list",
              "intent": "queryList",
              "stateKey": "ui.queryStockItem.data.queryStockItem",
              "action": "queryStockItem",
              "submitAction": "queryStockItem",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "queryStockItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.queryStockItem.main",
        "type": "section",
        "sectionName": "Consultar Itens de Estoque",
        "titleKey": "queryStockItem.section.main.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism.queryStockItem.list",
            "type": "data",
            "organismName": "QueryStockItem",
            "titleKey": "queryStockItem.organism.list.title",
            "purpose": "Consultar Itens de Estoque",
            "userActions": [
              "queryStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [
              "stockItemId",
              "name",
              "unitOfMeasure",
              "minimumStockLevel",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "lowStockAlertRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.queryStockItem.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "queryStockItem.intention.list.title",
                "action": "queryStockItem",
                "submitAction": "queryStockItem",
                "fields": [],
                "columns": [
                  {
                    "id": "col.stockItemId",
                    "field": "stockItemId",
                    "labelKey": "queryStockItem.field.stockItemId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.name",
                    "field": "name",
                    "labelKey": "queryStockItem.field.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.unitOfMeasure",
                    "field": "unitOfMeasure",
                    "labelKey": "queryStockItem.field.unitOfMeasure",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.minimumStockLevel",
                    "field": "minimumStockLevel",
                    "labelKey": "queryStockItem.field.minimumStockLevel",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.status",
                    "field": "status",
                    "labelKey": "queryStockItem.field.status",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.createdAt",
                    "field": "createdAt",
                    "labelKey": "queryStockItem.field.createdAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  },
                  {
                    "id": "col.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "queryStockItem.field.updatedAt",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.queryStockItem.data.queryStockItem"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.stockItemId",
                    "field": "stockItemId",
                    "labelKey": "queryStockItem.filter.stockItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryStockItem.input.queryStockItem.stockItemId"
                  },
                  {
                    "id": "filter.name",
                    "field": "name",
                    "labelKey": "queryStockItem.filter.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryStockItem.input.queryStockItem.name"
                  },
                  {
                    "id": "filter.status",
                    "field": "status",
                    "labelKey": "queryStockItem.filter.status",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.queryStockItem.input.queryStockItem.status"
                  },
                  {
                    "id": "filter.createdAt",
                    "field": "createdAt",
                    "labelKey": "queryStockItem.filter.createdAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.queryStockItem.input.queryStockItem.createdAt"
                  },
                  {
                    "id": "filter.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "queryStockItem.filter.updatedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.queryStockItem.input.queryStockItem.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.query",
                    "action": "queryStockItem",
                    "labelKey": "queryStockItem.action.query",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "queryStockItem"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.queryStockItem.data.queryStockItem"
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
    "id": "queryStockItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryStockItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryStockItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/queryStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/queryStockItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryStockItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts"
    ],
    "dependsOn": [
      "queryStockItem__l2_shared"
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
