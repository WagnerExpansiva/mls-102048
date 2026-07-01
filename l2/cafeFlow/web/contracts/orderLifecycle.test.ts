/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/orderLifecycle.test.ts" enhancement="_blank"/>

import type { CafeFlowLaunchOrderInput, CafeFlowLaunchOrderOutput, CafeFlowProcessPaymentInput, CafeFlowProcessPaymentOutput, CafeFlowUpdateOrderStatusInput, CafeFlowUpdateOrderStatusOutput } from './orderLifecycle.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowLaunchOrderInput = {
  type: "dineIn" | "takeout";
  status: "pending" | "sent_to_kitchen" | "preparing" | "ready" | "delivered" | "paid" | "cancelled";
  total: number;
};
type ExpectedCafeFlowLaunchOrderOutput = {
  orderId: string;
};
type ExpectedCafeFlowUpdateOrderStatusInput = {
  orderStatusEventId?: string;
  orderId?: string;
  previousStatus?: string;
  status: string;
};
type ExpectedCafeFlowUpdateOrderStatusOutput = {
  orderStatusEventId: string;
};
type ExpectedCafeFlowProcessPaymentInput = {
  status: "pending" | "sent_to_kitchen" | "preparing" | "ready" | "delivered" | "paid" | "cancelled";
};
type ExpectedCafeFlowProcessPaymentOutput = {
  orderId: string;
};

type _CafeFlowLaunchOrderInput = Assert<Equal<CafeFlowLaunchOrderInput, ExpectedCafeFlowLaunchOrderInput>>;
type _CafeFlowLaunchOrderOutput = Assert<Equal<CafeFlowLaunchOrderOutput, ExpectedCafeFlowLaunchOrderOutput>>;
type _CafeFlowUpdateOrderStatusInput = Assert<Equal<CafeFlowUpdateOrderStatusInput, ExpectedCafeFlowUpdateOrderStatusInput>>;
type _CafeFlowUpdateOrderStatusOutput = Assert<Equal<CafeFlowUpdateOrderStatusOutput, ExpectedCafeFlowUpdateOrderStatusOutput>>;
type _CafeFlowProcessPaymentInput = Assert<Equal<CafeFlowProcessPaymentInput, ExpectedCafeFlowProcessPaymentInput>>;
type _CafeFlowProcessPaymentOutput = Assert<Equal<CafeFlowProcessPaymentOutput, ExpectedCafeFlowProcessPaymentOutput>>;

export {};