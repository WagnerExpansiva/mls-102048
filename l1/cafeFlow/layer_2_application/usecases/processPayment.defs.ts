/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.defs.ts" enhancement="_blank"/>

export const processPaymentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "processPayment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "processPayment",
    "ports": [
      "Order",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "processPayment",
        "inputTypeName": "ProcessPaymentInput",
        "outputTypeName": "ProcessPaymentOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identifier of the order to process payment for"
          },
          {
            "name": "amountPaid",
            "type": "number",
            "required": true,
            "description": "Amount paid by the customer, must match order total"
          },
          {
            "name": "paymentMethod",
            "type": "string",
            "required": false,
            "description": "Method of payment (e.g. cash, card, pix)"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identifier of the paid order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status after payment processing"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "ofEntity": "Order",
            "description": "Order total amount that was paid"
          }
        ],
        "ports": [
          "Order",
          "OrderStatusEvent"
        ],
        "rulesApplied": [
          "ORDER_MUST_EXIST",
          "ORDER_STATUS_MUST_ALLOW_PAYMENT",
          "AMOUNT_PAID_MUST_MATCH_TOTAL",
          "ORDER_STATUS_EVENT_MUST_BE_APPENDED"
        ],
        "transactional": true,
        "steps": [
          "Load the Order aggregate by orderId through the Order port",
          "Validate the order exists (throw if not found)",
          "Validate the current status is 'delivered' or 'ready' — only orders in these states can be paid",
          "Validate that amountPaid equals the order total (throw on mismatch)",
          "Transition the order status to 'paid'",
          "Update the order updatedAt timestamp to current time",
          "Save the Order aggregate through the Order port",
          "Build an OrderStatusEvent record with orderId, previousStatus, newStatus 'paid', and timestamp",
          "Append the OrderStatusEvent through the OrderStatusEvent port inside the same transaction",
          "Return orderId, status, and total"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default processPaymentUsecase;

export const pipeline = [
  {
    "id": "processPayment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.ts",
    "defPath": "_102048_/l1/cafeFlow/layer_2_application/usecases/processPayment.defs.ts",
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
