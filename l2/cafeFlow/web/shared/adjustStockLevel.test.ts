/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/adjustStockLevel.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowAdjustStockLevelBase } from './adjustStockLevel.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowAdjustStockLevelBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_adjustStockLevelState = Assert<Assignable<typeof page.adjustStockLevelState, "idle" | "loading" | "success" | "error">>;
type _State_adjustStockLevelCurrentQuantity = Assert<Assignable<typeof page.adjustStockLevelCurrentQuantity, string>>;
type _State_adjustStockLevelStatus = Assert<Assignable<typeof page.adjustStockLevelStatus, string>>;
type _Action_adjustStockLevel = Assert<Assignable<typeof page.adjustStockLevel, (...args: any[]) => Promise<void>>>;
type _Handler_handleAdjustStockLevelClick = Assert<Assignable<typeof page.handleAdjustStockLevelClick, (...args: any[]) => void>>;
type _Action_setAdjustStockLevelCurrentQuantity = Assert<Assignable<typeof page.setAdjustStockLevelCurrentQuantity, (...args: any[]) => void>>;
type _Handler_handleAdjustStockLevelCurrentQuantityChange = Assert<Assignable<typeof page.handleAdjustStockLevelCurrentQuantityChange, (...args: any[]) => void>>;
type _Action_setAdjustStockLevelStatus = Assert<Assignable<typeof page.setAdjustStockLevelStatus, (...args: any[]) => void>>;
type _Handler_handleAdjustStockLevelStatusChange = Assert<Assignable<typeof page.handleAdjustStockLevelStatusChange, (...args: any[]) => void>>;

export {};