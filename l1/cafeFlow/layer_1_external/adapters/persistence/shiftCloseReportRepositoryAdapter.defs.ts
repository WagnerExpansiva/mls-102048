/// <mls fileReference="_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReportRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const shiftCloseReportRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ShiftCloseReportRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ShiftCloseReportRepositoryAdapter",
    "entityId": "ShiftCloseReport",
    "portRef": "IShiftCloseReportRepository",
    "tableRef": "shift_close_reports",
    "mdmReads": [],
    "notes": []
  }
} as const;

export default shiftCloseReportRepositoryAdapter;

export const pipeline = [
  {
    "id": "shiftCloseReportRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReportRepositoryAdapter.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReportRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftCloseReport.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.d.ts"
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
