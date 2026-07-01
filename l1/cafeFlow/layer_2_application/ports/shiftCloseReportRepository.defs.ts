/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.defs.ts" enhancement="_blank"/>

export const shiftCloseReportRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ShiftCloseReportRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftCloseReport",
    "interfaceName": "IShiftCloseReportRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "ShiftCloseReport | null",
        "params": [
          "id: ShiftCloseReportId"
        ]
      },
      {
        "name": "list",
        "returns": "ShiftCloseReport[]",
        "params": [
          "filter: ShiftCloseReportFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "aggregate: ShiftCloseReport"
        ]
      },
      {
        "name": "findByShiftId",
        "returns": "ShiftCloseReport | null",
        "params": [
          "shiftId: DailyShiftId"
        ]
      },
      {
        "name": "listByPeriod",
        "returns": "ShiftCloseReport[]",
        "params": [
          "start: LocalDate",
          "end: LocalDate"
        ]
      }
    ]
  }
} as const;

export default shiftCloseReportRepositoryPort;

export const pipeline = [
  {
    "id": "shiftCloseReportRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.d.ts"
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
