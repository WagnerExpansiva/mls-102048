/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryMenuItem.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "queryMenuItem",
  "pageName": "Consultar Itens de Cardápio",
  "actor": "manager",
  "purpose": "Executar Consultar Itens de Cardápio.",
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
        "id": "queryMenuItem",
        "defPath": "_102048_/l4/operations/queryMenuItem.defs.ts"
      }
    ]
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-consultar-itens-cardapio",
      "type": "section",
      "sectionName": "Consultar Itens de Cardápio",
      "titleKey": "section.consultarItensCardapio.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism-query-menu-item",
          "type": "data",
          "organismName": "QueryMenuItem",
          "titleKey": "organism.queryMenuItem.title",
          "purpose": "Consultar Itens de Cardápio",
          "userActions": [
            "queryMenuItem"
          ],
          "requiredEntities": [
            "MenuItem",
            "StockItem"
          ],
          "readsFields": [
            "menuItemId",
            "name",
            "category",
            "price",
            "stockItemId",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "stockConsumptionRule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-query-menu-item-list",
              "intent": "queryList",
              "stateKey": "ui.queryMenuItem.data.queryMenuItem",
              "action": "queryMenuItem",
              "submitAction": "queryMenuItem",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "queryMenuItem.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-consultar-itens-cardapio",
        "type": "section",
        "sectionName": "Consultar Itens de Cardápio",
        "titleKey": "section.consultarItensCardapio.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism-query-menu-item",
            "type": "data",
            "organismName": "QueryMenuItem",
            "titleKey": "organism.queryMenuItem.title",
            "purpose": "Consultar Itens de Cardápio",
            "userActions": [
              "queryMenuItem"
            ],
            "requiredEntities": [
              "MenuItem",
              "StockItem"
            ],
            "readsFields": [
              "menuItemId",
              "name",
              "category",
              "price",
              "stockItemId",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "stockConsumptionRule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention-query-menu-item-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intention.queryMenuItem.list.title",
                "action": "queryMenuItem",
                "submitAction": "queryMenuItem",
                "emptyKey": "intention.queryMenuItem.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-category",
                    "field": "category",
                    "labelKey": "field.category.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-stockItemId",
                    "field": "stockItemId",
                    "labelKey": "field.stockItemId.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.queryMenuItem.data.queryMenuItem"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.menuItemId"
                  },
                  {
                    "id": "filter-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.name"
                  },
                  {
                    "id": "filter-category",
                    "field": "category",
                    "labelKey": "field.category.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.category"
                  },
                  {
                    "id": "filter-stockItemId",
                    "field": "stockItemId",
                    "labelKey": "field.stockItemId.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.stockItemId"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 50,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.status"
                  },
                  {
                    "id": "filter-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.queryMenuItem.input.queryMenuItem.createdAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar-query-menu-item",
                    "action": "queryMenuItem",
                    "labelKey": "action.queryMenuItem.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "queryMenuItem"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.queryMenuItem.data.queryMenuItem"
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
    "id": "queryMenuItem__l2_page",
    "type": "l2_page",
    "outputPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryMenuItem.ts",
    "defPath": "_102048_/l2/cafeFlow/web/desktop/page11/queryMenuItem.defs.ts",
    "dependsFiles": [
      "_102048_/l2/cafeFlow/web/shared/queryMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/shared/queryMenuItem.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.defs.ts",
      "_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts"
    ],
    "dependsOn": [
      "queryMenuItem__l2_shared"
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
