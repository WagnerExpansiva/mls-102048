/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItemRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const orderItemRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "OrderItemRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "OrderItemRepositoryAdapter",
    "entityId": "OrderItem",
    "portRef": "IOrderItemRepository",
    "tableRef": "order_items",
    "mdmReads": [
      "MenuItem"
    ],
    "notes": []
  }
} as const;

export default orderItemRepositoryAdapter;

export const pipeline = [
  {
    "id": "orderItemRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItemRepositoryAdapter.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItemRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
