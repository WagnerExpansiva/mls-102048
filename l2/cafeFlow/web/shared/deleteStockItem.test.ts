/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteStockItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowDeleteStockItemBase } from './deleteStockItem.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowDeleteStockItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_deleteStockItemState = Assert<Assignable<typeof page.deleteStockItemState, "idle" | "loading" | "success" | "error">>;
type _State_deleteStockItemStockItemId = Assert<Assignable<typeof page.deleteStockItemStockItemId, string>>;
type _State_deleteStockItemName = Assert<Assignable<typeof page.deleteStockItemName, string>>;
type _State_deleteStockItemUnitOfMeasure = Assert<Assignable<typeof page.deleteStockItemUnitOfMeasure, string>>;
type _State_deleteStockItemMinimumStockLevel = Assert<Assignable<typeof page.deleteStockItemMinimumStockLevel, string | number>>;
type _State_deleteStockItemStatus = Assert<Assignable<typeof page.deleteStockItemStatus, string>>;
type _Action_deleteStockItem = Assert<Assignable<typeof page.deleteStockItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleDeleteStockItemClick = Assert<Assignable<typeof page.handleDeleteStockItemClick, (...args: any[]) => void>>;
type _Action_setDeleteStockItemStockItemId = Assert<Assignable<typeof page.setDeleteStockItemStockItemId, (...args: any[]) => void>>;
type _Handler_handleDeleteStockItemStockItemIdChange = Assert<Assignable<typeof page.handleDeleteStockItemStockItemIdChange, (...args: any[]) => void>>;
type _Action_setDeleteStockItemName = Assert<Assignable<typeof page.setDeleteStockItemName, (...args: any[]) => void>>;
type _Handler_handleDeleteStockItemNameChange = Assert<Assignable<typeof page.handleDeleteStockItemNameChange, (...args: any[]) => void>>;
type _Action_setDeleteStockItemUnitOfMeasure = Assert<Assignable<typeof page.setDeleteStockItemUnitOfMeasure, (...args: any[]) => void>>;
type _Handler_handleDeleteStockItemUnitOfMeasureChange = Assert<Assignable<typeof page.handleDeleteStockItemUnitOfMeasureChange, (...args: any[]) => void>>;
type _Action_setDeleteStockItemMinimumStockLevel = Assert<Assignable<typeof page.setDeleteStockItemMinimumStockLevel, (...args: any[]) => void>>;
type _Handler_handleDeleteStockItemMinimumStockLevelChange = Assert<Assignable<typeof page.handleDeleteStockItemMinimumStockLevelChange, (...args: any[]) => void>>;
type _Action_setDeleteStockItemStatus = Assert<Assignable<typeof page.setDeleteStockItemStatus, (...args: any[]) => void>>;
type _Handler_handleDeleteStockItemStatusChange = Assert<Assignable<typeof page.handleDeleteStockItemStatusChange, (...args: any[]) => void>>;

export {};