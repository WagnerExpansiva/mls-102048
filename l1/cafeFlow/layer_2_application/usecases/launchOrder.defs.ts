/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.defs.ts" enhancement="_blank"/>

export const launchOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "launchOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "launchOrder",
    "ports": [
      "Order",
      "DailyShift",
      "StockLevel",
      "OrderItem",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "launchOrder",
        "inputTypeName": "LaunchOrderInput",
        "outputTypeName": "LaunchOrderOutput",
        "input": [
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Order type: 'dineIn' or 'takeout'"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Table reference — required when type is 'dineIn'"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Active daily shift this order belongs to"
          },
          {
            "name": "items",
            "type": "array",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Array of order items: { menuItemId: string (MenuItem ref), quantity: number, observations?: string }"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Created order identifier"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial order status — 'pending'"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "description": "Calculated order total from all items"
          }
        ],
        "ports": [
          "Order",
          "DailyShift",
          "StockLevel",
          "OrderItem",
          "OrderStatusEvent"
        ],
        "rulesApplied": [
          "stockConsumptionRule"
        ],
        "transactional": true,
        "steps": [
          "1. Load DailyShift by dailyShiftId via DailyShift port; validate status === 'open' (reject if closed or not found).",
          "2. If type === 'dineIn', validate tableId is provided; read Table mdmRef via ctx.data.mdmDocument.get({ mdmId: tableId }); validate table.status === 'active'.",
          "3. For each item in items: read MenuItem mdmRef via ctx.data.mdmDocument.get({ mdmId: item.menuItemId }); validate menuItem.status === 'active'; capture menuItem.price as unitPrice and menuItem.stockItemId (if present).",
          "4. Apply stockConsumptionRule: for each item whose MenuItem has a stockItemId, load StockLevel by stockItemId via StockLevel port; validate currentQuantity >= item.quantity (reject if insufficient); decrement currentQuantity by item.quantity; recompute StockLevel.status (sufficient/low/depleted) based on currentQuantity vs minQuantity.",
          "5. Calculate order total = sum(unitPrice * quantity) across all items.",
          "6. Create Order aggregate root: generate orderId, set status='pending', type, tableId (if dineIn), dailyShiftId, total, createdAt=now, updatedAt=now.",
          "7. Create OrderItem children embedded in Order: for each item generate orderItemId, set orderId, menuItemId, quantity, unitPrice (from MenuItem), observations, createdAt=now, updatedAt=now.",
          "8. Create OrderStatusEvent: generate orderStatusEventId, set orderId, previousStatus=null, status='pending', createdAt=now, updatedAt=now; append via OrderStatusEvent port inside the same transaction.",
          "9. Save Order (with embedded OrderItems) via Order port.",
          "10. Save each updated StockLevel via StockLevel port.",
          "11. Return { orderId, status, total }."
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem",
      "Table",
      "StockItem"
    ]
  }
} as const;

export default launchOrderUsecase;

export const pipeline = [
  {
    "id": "launchOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/launchOrder.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts",
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
