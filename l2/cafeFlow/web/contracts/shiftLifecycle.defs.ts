/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewDashboard",
    "bffName": "cafeFlow.shiftLifecycle.viewDashboard",
    "routeKey": "cafeFlow.shiftLifecycle.viewDashboard",
    "purpose": "Visualizar Dashboard",
    "kind": "query",
    "input": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "required": false,
        "description": "Identificador único do turno diário"
      },
      {
        "name": "date",
        "type": "date",
        "required": false,
        "description": "Data do turno operacional"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Identificador único do turno diário"
      },
      {
        "name": "date",
        "type": "date",
        "description": "Data do turno operacional"
      },
      {
        "name": "openTime",
        "type": "date",
        "description": "Horário de abertura do turno"
      },
      {
        "name": "closeTime",
        "type": "date",
        "description": "Horário de fechamento do turno"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno"
      },
      {
        "name": "totalSales",
        "type": "number",
        "description": "Valor acumulado de vendas do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewDashboard",
      "operationId": "viewDashboard",
      "defPath": "_102048_/l4/operations/viewDashboard.defs.ts",
      "bffName": "cafeFlow.shiftLifecycle.viewDashboard"
    }
  },
  {
    "commandName": "viewShiftReport",
    "bffName": "cafeFlow.shiftLifecycle.viewShiftReport",
    "routeKey": "cafeFlow.shiftLifecycle.viewShiftReport",
    "purpose": "Visualizar Relatório de Fechamento de Turno",
    "kind": "query",
    "input": [
      {
        "name": "shiftCloseReportId",
        "type": "string",
        "required": false,
        "description": "Identificador único do relatório de fechamento de turno"
      },
      {
        "name": "dailyShiftId",
        "type": "string",
        "required": false,
        "description": "Referência ao turno diário ao qual este relatório pertence"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do relatório"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do relatório"
      }
    ],
    "output": [
      {
        "name": "shiftCloseReportId",
        "type": "string",
        "description": "Identificador único do relatório de fechamento de turno"
      },
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Referência ao turno diário ao qual este relatório pertence"
      },
      {
        "name": "totalSales",
        "type": "number",
        "description": "Total de vendas consolidado no fechamento do turno"
      },
      {
        "name": "totalOrders",
        "type": "number",
        "description": "Quantidade total de pedidos processados no turno"
      },
      {
        "name": "bestSellingItems",
        "type": "string",
        "description": "Snapshot dos itens mais vendidos durante o turno"
      },
      {
        "name": "stockConsumptionSummary",
        "type": "string",
        "description": "Resumo consolidado do estoque consumido no turno"
      },
      {
        "name": "operationalMetrics",
        "type": "string",
        "description": "Métricas operacionais consolidadas do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do relatório"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewShiftReport",
      "operationId": "viewShiftReport",
      "defPath": "_102048_/l4/operations/viewShiftReport.defs.ts",
      "bffName": "cafeFlow.shiftLifecycle.viewShiftReport"
    }
  }
];

export const pipeline = [
  {
    "id": "shiftLifecycle__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts",
    "defPath": "_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
