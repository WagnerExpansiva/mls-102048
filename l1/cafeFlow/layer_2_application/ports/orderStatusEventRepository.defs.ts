/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.defs.ts" enhancement="_blank"/>

export const orderStatusEventRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OrderStatusEventRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderStatusEvent",
    "interfaceName": "IOrderStatusEventRepository",
    "methods": [
      {
        "name": "append",
        "returns": "void",
        "params": [
          "record: OrderStatusEvent"
        ]
      },
      {
        "name": "listByOwnerId",
        "returns": "OrderStatusEvent[]",
        "params": [
          "ownerId: OrderId"
        ]
      },
      {
        "name": "listByPeriod",
        "returns": "OrderStatusEvent[]",
        "params": [
          "start: Instant",
          "end: Instant"
        ]
      }
    ]
  }
} as const;

export default orderStatusEventRepositoryPort;

export const pipeline = [
  {
    "id": "orderStatusEventRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
