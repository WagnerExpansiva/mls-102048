/// <mls fileReference="_102048_/l4/actors/cafeFlowActors.defs.ts" enhancement="_blank"/>

export const cafeFlowActors = {
  "moduleName": "cafeFlow",
  "actors": [
    {
      "actorId": "attendant",
      "title": "Atendente",
      "description": "Recebe clientes, lança pedidos no POS, registra entradas/ajustes de estoque operacional e atualiza status de entrega. Pode operar em smartphone ou tablet.",
      "roleScope": "cafeFlow:attendant"
    },
    {
      "actorId": "cashier",
      "title": "Caixa",
      "description": "Opera o POS no caixa, processa pagamentos, marca pedidos como pagos/entregues e finaliza atendimento.",
      "roleScope": "cafeFlow:cashier"
    },
    {
      "actorId": "cook",
      "title": "Cozinheiro",
      "description": "Visualiza pedidos na cozinha, prepara itens e marca pedidos como prontos para entrega.",
      "roleScope": "cafeFlow:cook"
    },
    {
      "actorId": "manager",
      "title": "Gerente / Dono",
      "description": "Gerencia cardápio, estoque e mesas, abre e fecha turnos, visualiza dashboard e relatórios de fechamento, e aciona o assistente de IA.",
      "roleScope": "cafeFlow:manager"
    }
  ]
} as const;

export default cafeFlowActors;
