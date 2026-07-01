/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/orderLifecycle.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowOrderLifecycleBase } from './orderLifecycle.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowOrderLifecycleBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_launchOrderState = Assert<Assignable<typeof page.launchOrderState, "idle" | "loading" | "success" | "error">>;
type _State_launchOrderType = Assert<Assignable<typeof page.launchOrderType, string>>;
type _State_launchOrderStatus = Assert<Assignable<typeof page.launchOrderStatus, string>>;
type _State_launchOrderTotal = Assert<Assignable<typeof page.launchOrderTotal, string>>;
type _State_updateOrderStatusState = Assert<Assignable<typeof page.updateOrderStatusState, "idle" | "loading" | "success" | "error">>;
type _State_updateOrderStatusOrderStatusEventId = Assert<Assignable<typeof page.updateOrderStatusOrderStatusEventId, string>>;
type _State_updateOrderStatusOrderId = Assert<Assignable<typeof page.updateOrderStatusOrderId, string>>;
type _State_updateOrderStatusPreviousStatus = Assert<Assignable<typeof page.updateOrderStatusPreviousStatus, string>>;
type _State_updateOrderStatusStatus = Assert<Assignable<typeof page.updateOrderStatusStatus, string>>;
type _State_processPaymentState = Assert<Assignable<typeof page.processPaymentState, "idle" | "loading" | "success" | "error">>;
type _State_processPaymentStatus = Assert<Assignable<typeof page.processPaymentStatus, string>>;
type _Action_launchOrder = Assert<Assignable<typeof page.launchOrder, (...args: any[]) => Promise<void>>>;
type _Handler_handleLaunchOrderClick = Assert<Assignable<typeof page.handleLaunchOrderClick, (...args: any[]) => void>>;
type _Action_updateOrderStatus = Assert<Assignable<typeof page.updateOrderStatus, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateOrderStatusClick = Assert<Assignable<typeof page.handleUpdateOrderStatusClick, (...args: any[]) => void>>;
type _Action_processPayment = Assert<Assignable<typeof page.processPayment, (...args: any[]) => Promise<void>>>;
type _Handler_handleProcessPaymentClick = Assert<Assignable<typeof page.handleProcessPaymentClick, (...args: any[]) => void>>;
type _Action_setLaunchOrderType = Assert<Assignable<typeof page.setLaunchOrderType, (...args: any[]) => void>>;
type _Handler_handleLaunchOrderTypeChange = Assert<Assignable<typeof page.handleLaunchOrderTypeChange, (...args: any[]) => void>>;
type _Action_setLaunchOrderStatus = Assert<Assignable<typeof page.setLaunchOrderStatus, (...args: any[]) => void>>;
type _Handler_handleLaunchOrderStatusChange = Assert<Assignable<typeof page.handleLaunchOrderStatusChange, (...args: any[]) => void>>;
type _Action_setLaunchOrderTotal = Assert<Assignable<typeof page.setLaunchOrderTotal, (...args: any[]) => void>>;
type _Handler_handleLaunchOrderTotalChange = Assert<Assignable<typeof page.handleLaunchOrderTotalChange, (...args: any[]) => void>>;
type _Action_setUpdateOrderStatusOrderStatusEventId = Assert<Assignable<typeof page.setUpdateOrderStatusOrderStatusEventId, (...args: any[]) => void>>;
type _Handler_handleUpdateOrderStatusOrderStatusEventIdChange = Assert<Assignable<typeof page.handleUpdateOrderStatusOrderStatusEventIdChange, (...args: any[]) => void>>;
type _Action_setUpdateOrderStatusOrderId = Assert<Assignable<typeof page.setUpdateOrderStatusOrderId, (...args: any[]) => void>>;
type _Handler_handleUpdateOrderStatusOrderIdChange = Assert<Assignable<typeof page.handleUpdateOrderStatusOrderIdChange, (...args: any[]) => void>>;
type _Action_setUpdateOrderStatusPreviousStatus = Assert<Assignable<typeof page.setUpdateOrderStatusPreviousStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateOrderStatusPreviousStatusChange = Assert<Assignable<typeof page.handleUpdateOrderStatusPreviousStatusChange, (...args: any[]) => void>>;
type _Action_setUpdateOrderStatusStatus = Assert<Assignable<typeof page.setUpdateOrderStatusStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateOrderStatusStatusChange = Assert<Assignable<typeof page.handleUpdateOrderStatusStatusChange, (...args: any[]) => void>>;
type _Action_setProcessPaymentStatus = Assert<Assignable<typeof page.setProcessPaymentStatus, (...args: any[]) => void>>;
type _Handler_handleProcessPaymentStatusChange = Assert<Assignable<typeof page.handleProcessPaymentStatusChange, (...args: any[]) => void>>;

export {};