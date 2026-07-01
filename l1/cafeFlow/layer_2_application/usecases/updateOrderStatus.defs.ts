/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.defs.ts" enhancement="_blank"/>

export const updateOrderStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateOrderStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateOrderStatus",
    "ports": [
      "Order",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "updateOrderStatus",
        "inputTypeName": "UpdateOrderStatusInput",
        "outputTypeName": "UpdateOrderStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order whose status is being updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The new status to transition the order to (pending, sent_to_kitchen, preparing, ready, delivered, paid, cancelled)"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The updated order id"
          },
          {
            "name": "previousStatus",
            "type": "string",
            "required": false,
            "ofEntity": "OrderStatusEvent",
            "description": "The status the order had before the transition"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The new status applied to the order"
          },
          {
            "name": "orderStatusEventId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "The id of the created audit event recording the status transition"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp of the order update"
          }
        ],
        "ports": [
          "Order",
          "OrderStatusEvent"
        ],
        "rulesApplied": [
          "Order status must be a valid enum value (pending, sent_to_kitchen, preparing, ready, delivered, paid, cancelled)",
          "OrderStatusEvent must capture previousStatus before applying the new status",
          "OrderStatusEvent is append-only audit record persisted in the same transaction as the Order update"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Order by orderId through the Order port",
          "2. Validate that the requested status is a valid Order status enum value",
          "3. Capture the Order's current status as previousStatus",
          "4. Update the Order's status field to the new status and set updatedAt to current datetime",
          "5. Create a new OrderStatusEvent with orderId, previousStatus, status (new), createdAt and updatedAt set to current datetime, and a generated orderStatusEventId",
          "6. Save the updated Order through the Order port",
          "7. Append the OrderStatusEvent through the OrderStatusEvent port (audit, persisted) inside the same transaction",
          "8. Return orderId, previousStatus, status, orderStatusEventId, and updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateOrderStatusUsecase;

export const pipeline = [
  {
    "id": "updateOrderStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.defs.ts",
    "dependsFiles": [
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102048_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
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
