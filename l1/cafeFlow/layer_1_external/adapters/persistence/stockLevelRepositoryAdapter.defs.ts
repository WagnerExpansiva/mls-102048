/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const stockLevelRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "StockLevelRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "StockLevelRepositoryAdapter",
    "entityId": "StockLevel",
    "portRef": "IStockLevelRepository",
    "tableRef": "stock_levels",
    "mdmReads": [
      "StockItem"
    ],
    "notes": []
  }
} as const;

export default stockLevelRepositoryAdapter;

export const pipeline = [
  {
    "id": "stockLevelRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevel.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
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
