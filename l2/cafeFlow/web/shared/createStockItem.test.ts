/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createStockItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowCreateStockItemBase } from './createStockItem.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowCreateStockItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createStockItemState = Assert<Assignable<typeof page.createStockItemState, "idle" | "loading" | "success" | "error">>;
type _State_createStockItemName = Assert<Assignable<typeof page.createStockItemName, string>>;
type _State_createStockItemUnitOfMeasure = Assert<Assignable<typeof page.createStockItemUnitOfMeasure, string>>;
type _State_createStockItemMinimumStockLevel = Assert<Assignable<typeof page.createStockItemMinimumStockLevel, string>>;
type _State_createStockItemStatus = Assert<Assignable<typeof page.createStockItemStatus, string>>;
type _Action_createStockItem = Assert<Assignable<typeof page.createStockItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateStockItemClick = Assert<Assignable<typeof page.handleCreateStockItemClick, (...args: any[]) => void>>;
type _Action_setCreateStockItemName = Assert<Assignable<typeof page.setCreateStockItemName, (...args: any[]) => void>>;
type _Handler_handleCreateStockItemNameChange = Assert<Assignable<typeof page.handleCreateStockItemNameChange, (...args: any[]) => void>>;
type _Action_setCreateStockItemUnitOfMeasure = Assert<Assignable<typeof page.setCreateStockItemUnitOfMeasure, (...args: any[]) => void>>;
type _Handler_handleCreateStockItemUnitOfMeasureChange = Assert<Assignable<typeof page.handleCreateStockItemUnitOfMeasureChange, (...args: any[]) => void>>;
type _Action_setCreateStockItemMinimumStockLevel = Assert<Assignable<typeof page.setCreateStockItemMinimumStockLevel, (...args: any[]) => void>>;
type _Handler_handleCreateStockItemMinimumStockLevelChange = Assert<Assignable<typeof page.handleCreateStockItemMinimumStockLevelChange, (...args: any[]) => void>>;
type _Action_setCreateStockItemStatus = Assert<Assignable<typeof page.setCreateStockItemStatus, (...args: any[]) => void>>;
type _Handler_handleCreateStockItemStatusChange = Assert<Assignable<typeof page.handleCreateStockItemStatusChange, (...args: any[]) => void>>;

export {};