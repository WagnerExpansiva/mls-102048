/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/viewShiftReport.defs.ts" enhancement="_blank"/>

export const viewShiftReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewShiftReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewShiftReport",
    "ports": [
      "ShiftCloseReport",
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "viewShiftReportById",
        "inputTypeName": "ViewShiftReportByIdInput",
        "outputTypeName": "ShiftReportView",
        "input": [
          {
            "name": "shiftCloseReportId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          }
        ],
        "output": [
          {
            "name": "shiftCloseReportId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "bestSellingItems",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "stockConsumptionSummary",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "operationalMetrics",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "dailyShiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftOpenTime",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftCloseTime",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftStatus",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftTotalSales",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          }
        ],
        "ports": [
          "ShiftCloseReport",
          "DailyShift"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load ShiftCloseReport by shiftCloseReportId via ShiftCloseReport port",
          "Extract dailyShiftId from the loaded report",
          "Load DailyShift by dailyShiftId via DailyShift port",
          "Project ShiftCloseReport fields and DailyShift fields into the combined view output"
        ]
      },
      {
        "functionName": "viewShiftReportByDailyShiftId",
        "inputTypeName": "ViewShiftReportByDailyShiftIdInput",
        "outputTypeName": "ShiftReportView",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          }
        ],
        "output": [
          {
            "name": "shiftCloseReportId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "bestSellingItems",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "stockConsumptionSummary",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "operationalMetrics",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftCloseReport"
          },
          {
            "name": "dailyShiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftOpenTime",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftCloseTime",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftStatus",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "dailyShiftTotalSales",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          }
        ],
        "ports": [
          "ShiftCloseReport",
          "DailyShift"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShift port",
          "Load ShiftCloseReport by dailyShiftId via ShiftCloseReport port",
          "Project ShiftCloseReport fields and DailyShift fields into the combined view output"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewShiftReportUsecase;

export const pipeline = [
  {
    "id": "viewShiftReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/viewShiftReport.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/viewShiftReport.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/shiftCloseReportRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/shiftCloseReport.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
