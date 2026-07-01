/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.defs.ts" enhancement="_blank"/>

export const viewDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewDashboard",
    "ports": [
      "DailyShift",
      "Order",
      "OrderItem",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "viewDashboard",
        "inputTypeName": "ViewDashboardInput",
        "outputTypeName": "ViewDashboardOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The daily shift to view the dashboard for"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The daily shift identifier"
          },
          {
            "name": "date",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Shift date"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Shift status: open or closed"
          },
          {
            "name": "openTime",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Shift opening timestamp"
          },
          {
            "name": "closeTime",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Shift closing timestamp, null if still open"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Total sales recorded for the shift"
          },
          {
            "name": "orderCount",
            "type": "number",
            "required": true,
            "description": "Total number of orders in the shift"
          },
          {
            "name": "pendingOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in pending status"
          },
          {
            "name": "preparingOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in preparing status"
          },
          {
            "name": "readyOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in ready status"
          },
          {
            "name": "deliveredOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in delivered status"
          },
          {
            "name": "paidOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in paid status"
          },
          {
            "name": "cancelledOrders",
            "type": "number",
            "required": true,
            "description": "Count of cancelled orders"
          },
          {
            "name": "dineInOrders",
            "type": "number",
            "required": true,
            "description": "Count of dine-in orders"
          },
          {
            "name": "takeoutOrders",
            "type": "number",
            "required": true,
            "description": "Count of takeout orders"
          },
          {
            "name": "totalOrderItems",
            "type": "number",
            "required": true,
            "description": "Total quantity of items across all orders"
          },
          {
            "name": "orders",
            "type": "string",
            "required": false,
            "description": "JSON array of order summaries with orderId, type, status, total, and item count"
          }
        ],
        "ports": [
          "DailyShift",
          "Order",
          "OrderItem"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load the DailyShift by dailyShiftId via DailyShift port",
          "Query all Orders for the given dailyShiftId via Order port",
          "For each Order, query its OrderItems via OrderItem port to compute item counts and total quantity",
          "Aggregate order counts grouped by status (pending, sent_to_kitchen, preparing, ready, delivered, paid, cancelled)",
          "Aggregate order counts grouped by type (dineIn, takeout)",
          "Sum total quantity of all OrderItems across orders",
          "Build the dashboard output combining shift details, aggregated metrics, and per-order summaries",
          "Return the assembled dashboard view"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewDashboardUsecase;

export const pipeline = [
  {
    "id": "viewDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/viewDashboard.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
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
