/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/orderLifecycle.ts" enhancement="_blank"/>

export interface CafeFlowLaunchOrderInput {
  type: "dineIn" | "takeout";
  status: "pending" | "sent_to_kitchen" | "preparing" | "ready" | "delivered" | "paid" | "cancelled";
  total: number;
}

export interface CafeFlowLaunchOrderOutput {
  orderId: string;
}

export interface CafeFlowUpdateOrderStatusInput {
  orderStatusEventId?: string;
  orderId?: string;
  previousStatus?: string;
  status: string;
}

export interface CafeFlowUpdateOrderStatusOutput {
  orderStatusEventId: string;
}

export interface CafeFlowProcessPaymentInput {
  status: "pending" | "sent_to_kitchen" | "preparing" | "ready" | "delivered" | "paid" | "cancelled";
}

export interface CafeFlowProcessPaymentOutput {
  orderId: string;
}
