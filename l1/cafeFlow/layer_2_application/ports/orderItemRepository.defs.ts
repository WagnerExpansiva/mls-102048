/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.defs.ts" enhancement="_blank"/>

export const orderItemRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OrderItemRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderItem",
    "interfaceName": "IOrderItemRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "OrderItem | null",
        "params": [
          "id: OrderItemId"
        ]
      },
      {
        "name": "list",
        "returns": "OrderItem[]",
        "params": [
          "filter: OrderItemFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "aggregate: OrderItem"
        ]
      },
      {
        "name": "listByOrderId",
        "returns": "OrderItem[]",
        "params": [
          "orderId: OrderId"
        ]
      },
      {
        "name": "listByProductId",
        "returns": "OrderItem[]",
        "params": [
          "productId: ProductId"
        ]
      }
    ]
  }
} as const;

export default orderItemRepositoryPort;

export const pipeline = [
  {
    "id": "orderItemRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
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
