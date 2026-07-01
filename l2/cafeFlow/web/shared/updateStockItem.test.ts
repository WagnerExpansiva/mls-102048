/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateStockItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowUpdateStockItemBase } from './updateStockItem.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowUpdateStockItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_updateStockItemState = Assert<Assignable<typeof page.updateStockItemState, "idle" | "loading" | "success" | "error">>;
type _State_updateStockItemName = Assert<Assignable<typeof page.updateStockItemName, string>>;
type _State_updateStockItemUnitOfMeasure = Assert<Assignable<typeof page.updateStockItemUnitOfMeasure, string>>;
type _State_updateStockItemMinimumStockLevel = Assert<Assignable<typeof page.updateStockItemMinimumStockLevel, string>>;
type _State_updateStockItemStatus = Assert<Assignable<typeof page.updateStockItemStatus, string>>;
type _Action_updateStockItem = Assert<Assignable<typeof page.updateStockItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateStockItemClick = Assert<Assignable<typeof page.handleUpdateStockItemClick, (...args: any[]) => void>>;
type _Action_setUpdateStockItemName = Assert<Assignable<typeof page.setUpdateStockItemName, (...args: any[]) => void>>;
type _Handler_handleUpdateStockItemNameChange = Assert<Assignable<typeof page.handleUpdateStockItemNameChange, (...args: any[]) => void>>;
type _Action_setUpdateStockItemUnitOfMeasure = Assert<Assignable<typeof page.setUpdateStockItemUnitOfMeasure, (...args: any[]) => void>>;
type _Handler_handleUpdateStockItemUnitOfMeasureChange = Assert<Assignable<typeof page.handleUpdateStockItemUnitOfMeasureChange, (...args: any[]) => void>>;
type _Action_setUpdateStockItemMinimumStockLevel = Assert<Assignable<typeof page.setUpdateStockItemMinimumStockLevel, (...args: any[]) => void>>;
type _Handler_handleUpdateStockItemMinimumStockLevelChange = Assert<Assignable<typeof page.handleUpdateStockItemMinimumStockLevelChange, (...args: any[]) => void>>;
type _Action_setUpdateStockItemStatus = Assert<Assignable<typeof page.setUpdateStockItemStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateStockItemStatusChange = Assert<Assignable<typeof page.handleUpdateStockItemStatusChange, (...args: any[]) => void>>;

export {};