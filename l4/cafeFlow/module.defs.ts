/// <mls fileReference="_102048_/l4/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const cafeFlowModule = {
  "module": {
    "moduleName": "cafeFlow",
    "purpose": "Agilizar o atendimento de pedidos via POS rápido, coordenar a cozinha em tempo real e manter controle simples de estoque para cafeterias e lanchonetes de pequeno porte (unidade única).",
    "businessDomain": "Food Service / Cafeteria & Lanchonete",
    "languages": [
      "pt-BR",
      "en"
    ],
    "visualStyle": "Limpo e prático, otimizado para toque em tablet/computador no caixa e na cozinha; cores quentes e acolhedoras (tons de café), tipografia legível em alta velocidade."
  },
  "designContext": {
    "initialPrompt": "Gere um app profissional chamado CafeFlow para cafeterias e lanchonetes pequenas.\nEntidades principais: Item do Cardápio (categoria, preço, ingredientes em estoque), Pedido (mesa ou takeout, itens, status), Turno Diário, Item de Estoque.\nTelas chave: Dashboard (vendas de hoje, itens mais vendidos, estoque baixo), Interface rápida de POS (lançamento de pedido + status cozinha), Gerenciamento de cardápio e estoque, Relatório de fechamento de turno.\nFuncionalidade LLM: Assistente IA que gera \"resumo de vendas do dia\" ou sugere \"quais itens promover com base nos últimos 7 dias\".\nFoco: Atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque para food service.\nlinguagem: en, pt-br",
    "userLanguage": "pt-BR",
    "openDetails": [
      {
        "title": "Integração do Assistente IA",
        "description": "Como implementar o LLM para gerar resumos de vendas e sugestões de promoção?"
      },
      {
        "title": "Suporte multilíngue",
        "description": "O app deve oferecer interface em inglês e português brasileiro?"
      }
    ],
    "decisions": [
      {
        "recommendationId": "menuCatalog",
        "artifactType": "mdm",
        "title": "Catálogo de Cardápio (Menu Catalog)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "stockItems",
        "artifactType": "mdm",
        "title": "Cadastro de Itens de Estoque (Stock Item Registry)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "tables",
        "artifactType": "mdm",
        "title": "Cadastro de Mesas (Table Registry)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "finance",
        "artifactType": "horizontalModule",
        "title": "Módulo Financeiro (Finance Horizontal)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "launchOrder",
        "artifactType": "operation",
        "title": "Lançar Pedido (Launch Order via POS)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "updateOrderStatus",
        "artifactType": "operation",
        "title": "Atualizar Status do Pedido (Update Order Status)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "manageMenuItem",
        "artifactType": "operation",
        "title": "Gerenciar Item de Cardápio (Manage Menu Item)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "manageStockItem",
        "artifactType": "operation",
        "title": "Gerenciar Item de Estoque (Manage Stock Item)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "viewDashboard",
        "artifactType": "operation",
        "title": "Visualizar Dashboard (View Dashboard)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "viewShiftReport",
        "artifactType": "operation",
        "title": "Visualizar Relatório de Fechamento de Turno (View Shift Close Report)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "orderLifecycle",
        "artifactType": "workflow",
        "title": "Ciclo de Vida do Pedido (Order Lifecycle Workflow)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "shiftLifecycle",
        "artifactType": "workflow",
        "title": "Ciclo de Vida do Turno Diário (Daily Shift Lifecycle Workflow)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "stockConsumptionRule",
        "artifactType": "rule",
        "title": "Regra de Consumo de Estoque (Stock Consumption Rule)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "lowStockAlertRule",
        "artifactType": "rule",
        "title": "Regra de Alerta de Estoque Baixo (Low-Stock Alert Rule)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dailySalesSummaryAgent",
        "artifactType": "agent",
        "title": "Agente de Resumo de Vendas Diárias (Daily Sales Summary Agent)",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "promotionSuggestionAgent",
        "artifactType": "agent",
        "title": "Agente de Sugestão de Promoções (Promotion Suggestion Agent)",
        "decidedPriority": "later",
        "accepted": true
      }
    ]
  },
  "ontology": {
    "entities": {
      "MenuItem": {
        "entityId": "MenuItem",
        "defPath": "l4/cafeFlow/ontology/MenuItem.defs.ts"
      },
      "StockItem": {
        "entityId": "StockItem",
        "defPath": "l4/cafeFlow/ontology/StockItem.defs.ts"
      },
      "Table": {
        "entityId": "Table",
        "defPath": "l4/cafeFlow/ontology/Table.defs.ts"
      },
      "Order": {
        "entityId": "Order",
        "defPath": "l4/cafeFlow/ontology/Order.defs.ts"
      },
      "OrderItem": {
        "entityId": "OrderItem",
        "defPath": "l4/cafeFlow/ontology/OrderItem.defs.ts"
      },
      "StockLevel": {
        "entityId": "StockLevel",
        "defPath": "l4/cafeFlow/ontology/StockLevel.defs.ts"
      },
      "DailyShift": {
        "entityId": "DailyShift",
        "defPath": "l4/cafeFlow/ontology/DailyShift.defs.ts"
      },
      "OrderStatusEvent": {
        "entityId": "OrderStatusEvent",
        "defPath": "l4/cafeFlow/ontology/OrderStatusEvent.defs.ts"
      },
      "ShiftCloseReport": {
        "entityId": "ShiftCloseReport",
        "defPath": "l4/cafeFlow/ontology/ShiftCloseReport.defs.ts"
      }
    }
  },
  "relationships": [
    {
      "relationshipId": "orderToTable",
      "fromEntity": "Order",
      "toEntity": "Table",
      "type": "references",
      "description": "Pedidos dine-in referenciam a mesa física; pedidos takeout não têm mesa."
    },
    {
      "relationshipId": "orderToOrderItem",
      "fromEntity": "Order",
      "toEntity": "OrderItem",
      "type": "contains",
      "description": "Um pedido contém múltiplos itens de pedido."
    },
    {
      "relationshipId": "orderItemToMenuItem",
      "fromEntity": "OrderItem",
      "toEntity": "MenuItem",
      "type": "references",
      "description": "Cada item do pedido referencia um item do cardápio."
    },
    {
      "relationshipId": "menuItemToStockItem",
      "fromEntity": "MenuItem",
      "toEntity": "StockItem",
      "type": "uses",
      "description": "A receita de um item do cardápio usa ingredientes cadastrados como itens de estoque."
    },
    {
      "relationshipId": "stockLevelToStockItem",
      "fromEntity": "StockLevel",
      "toEntity": "StockItem",
      "type": "tracks",
      "description": "O estado de estoque rastreia a quantidade live de um item de estoque cadastrado."
    },
    {
      "relationshipId": "orderStatusEventToOrder",
      "fromEntity": "OrderStatusEvent",
      "toEntity": "Order",
      "type": "belongsTo",
      "description": "Cada evento de status pertence a um pedido, registrando sua transição de estado."
    },
    {
      "relationshipId": "shiftToOrder",
      "fromEntity": "DailyShift",
      "toEntity": "Order",
      "type": "contains",
      "description": "Um turno contém todos os pedidos lançados durante seu período operacional."
    },
    {
      "relationshipId": "shiftCloseReportToShift",
      "fromEntity": "ShiftCloseReport",
      "toEntity": "DailyShift",
      "type": "belongsTo",
      "description": "O relatório de fechamento pertence a um turno específico."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Catálogo de Cardápio (Menu Catalog)",
        "reason": "Definições estáveis de itens do cardápio: nome, categoria, preço e receita/ingredientes. Dado cadastral mestre que o POS, cozinha e consumo de estoque dependem."
      },
      {
        "title": "Cadastro de Itens de Estoque (Stock Item Registry)",
        "reason": "Registro de ingredientes e suprimentos com unidades e parâmetros de estoque mínimo. Dado mestre cadastral; a quantidade atual é estado operacional em StockLevel."
      },
      {
        "title": "Cadastro de Mesas (Table Registry)",
        "reason": "Registro das mesas físicas da cafeteria para identificação em pedidos dine-in."
      }
    ],
    "horizontals": [
      {
        "title": "Módulo Financeiro (Finance Horizontal)",
        "reason": "Cálculo de totais de vendas, acompanhamento de pagamentos e consolidação financeira do turno. Capacidade de domínio não fornecida pela plataforma."
      }
    ],
    "plugins": [],
    "agents": [
      {
        "title": "Agente de Resumo de Vendas Diárias (Daily Sales Summary Agent)",
        "reason": "Agente autônomo que chama o proxy LLM para gerar um resumo em linguagem natural das vendas do dia ao final do turno. Prioridade soon — melhoria sobre o relatório de fechamento."
      },
      {
        "title": "Agente de Sugestão de Promoções (Promotion Suggestion Agent)",
        "reason": "Agente autônomo que analisa os últimos 7 dias de vendas via proxy LLM e sugere quais itens promover. Prioridade later — requer dados históricos acumulados."
      }
    ]
  }
} as const;

export default cafeFlowModule;
