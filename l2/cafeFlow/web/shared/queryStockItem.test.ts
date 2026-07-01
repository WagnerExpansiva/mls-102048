/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryStockItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowQueryStockItemBase } from './queryStockItem.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowQueryStockItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_queryStockItemState = Assert<Assignable<typeof page.queryStockItemState, "idle" | "loading" | "success" | "error">>;
type _State_queryStockItemStockItemId = Assert<Assignable<typeof page.queryStockItemStockItemId, string>>;
type _State_queryStockItemName = Assert<Assignable<typeof page.queryStockItemName, string>>;
type _State_queryStockItemStatus = Assert<Assignable<typeof page.queryStockItemStatus, string>>;
type _State_queryStockItemCreatedAt = Assert<Assignable<typeof page.queryStockItemCreatedAt, string>>;
type _State_queryStockItemUpdatedAt = Assert<Assignable<typeof page.queryStockItemUpdatedAt, string>>;
type _State_queryStockItemData = Assert<Assignable<typeof page.queryStockItemData, unknown[]>>;
type _Action_loadQueryStockItem = Assert<Assignable<typeof page.loadQueryStockItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleQueryStockItemClick = Assert<Assignable<typeof page.handleQueryStockItemClick, (...args: any[]) => void>>;
type _Action_setQueryStockItemStockItemId = Assert<Assignable<typeof page.setQueryStockItemStockItemId, (...args: any[]) => void>>;
type _Handler_handleQueryStockItemStockItemIdChange = Assert<Assignable<typeof page.handleQueryStockItemStockItemIdChange, (...args: any[]) => void>>;
type _Action_setQueryStockItemName = Assert<Assignable<typeof page.setQueryStockItemName, (...args: any[]) => void>>;
type _Handler_handleQueryStockItemNameChange = Assert<Assignable<typeof page.handleQueryStockItemNameChange, (...args: any[]) => void>>;
type _Action_setQueryStockItemStatus = Assert<Assignable<typeof page.setQueryStockItemStatus, (...args: any[]) => void>>;
type _Handler_handleQueryStockItemStatusChange = Assert<Assignable<typeof page.handleQueryStockItemStatusChange, (...args: any[]) => void>>;
type _Action_setQueryStockItemCreatedAt = Assert<Assignable<typeof page.setQueryStockItemCreatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryStockItemCreatedAtChange = Assert<Assignable<typeof page.handleQueryStockItemCreatedAtChange, (...args: any[]) => void>>;
type _Action_setQueryStockItemUpdatedAt = Assert<Assignable<typeof page.setQueryStockItemUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryStockItemUpdatedAtChange = Assert<Assignable<typeof page.handleQueryStockItemUpdatedAtChange, (...args: any[]) => void>>;

export {};