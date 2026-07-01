/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const dailyShiftRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "DailyShiftRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "DailyShiftRepositoryAdapter",
    "entityId": "DailyShift",
    "portRef": "IDailyShiftRepository",
    "tableRef": "daily_shifts",
    "mdmReads": [],
    "notes": []
  }
} as const;

export default dailyShiftRepositoryAdapter;

export const pipeline = [
  {
    "id": "dailyShiftRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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
