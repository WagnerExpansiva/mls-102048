/// <mls fileReference="_102048_/l5/cafeFlow/process.defs.ts" enhancement="_blank"/>

export const cafeFlowProcess = {
  "schemaVersion": "2026-06-25",
  "moduleName": "cafeFlow",
  "runs": [
    {
      "runId": "newSolution2-cafeFlow",
      "kind": "newSolution2-behavior",
      "startedAt": "2026-07-01T12:57:01.294Z",
      "finishedAt": "2026-07-01T12:57:01.294Z",
      "sourceRefs": {
        "designContext": "l4/cafeFlow/module.defs.ts#designContext",
        "healthReport": "l4/trace/behavior-health-report.json#report",
        "workflows": "l4/workflows/*.defs.ts",
        "operations": "l4/operations/*.defs.ts",
        "ontology": "l4/cafeFlow/ontology/*.defs.ts"
      },
      "handoffNotes": [
        "l4/workflows carries pageId. l4/operations carries pageId, commandName and bffName. Stage 2 contracts and Stage 3 controllers must use bffName as the shared route key instead of deriving {module}.{page}.{command} independently."
      ],
      "nextSteps": [
        {
          "id": "stage2-experience",
          "kind": "workflowExperience",
          "title": "Etapa 2 — Experiencia",
          "description": "Telas + BFF a partir dos l4/workflows e l4/operations.",
          "status": "pending"
        },
        {
          "id": "stage3-backend",
          "kind": "backendImplementation",
          "title": "Etapa 3 — Backend",
          "description": "Persistencia + implementacao a partir das ontology/operations l4.",
          "status": "pending"
        }
      ]
    }
  ]
} as const;

export default cafeFlowProcess;
