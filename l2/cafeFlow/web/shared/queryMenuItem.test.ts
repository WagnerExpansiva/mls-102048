/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryMenuItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowQueryMenuItemBase } from './queryMenuItem.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowQueryMenuItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_queryMenuItemState = Assert<Assignable<typeof page.queryMenuItemState, "idle" | "loading" | "success" | "error">>;
type _State_queryMenuItemMenuItemId = Assert<Assignable<typeof page.queryMenuItemMenuItemId, string>>;
type _State_queryMenuItemName = Assert<Assignable<typeof page.queryMenuItemName, string>>;
type _State_queryMenuItemCategory = Assert<Assignable<typeof page.queryMenuItemCategory, string>>;
type _State_queryMenuItemStockItemId = Assert<Assignable<typeof page.queryMenuItemStockItemId, string>>;
type _State_queryMenuItemStatus = Assert<Assignable<typeof page.queryMenuItemStatus, string>>;
type _State_queryMenuItemCreatedAt = Assert<Assignable<typeof page.queryMenuItemCreatedAt, string>>;
type _State_queryMenuItemData = Assert<Assignable<typeof page.queryMenuItemData, unknown[]>>;
type _Action_loadQueryMenuItem = Assert<Assignable<typeof page.loadQueryMenuItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleQueryMenuItemClick = Assert<Assignable<typeof page.handleQueryMenuItemClick, (...args: any[]) => void>>;
type _Action_setQueryMenuItemMenuItemId = Assert<Assignable<typeof page.setQueryMenuItemMenuItemId, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemMenuItemIdChange = Assert<Assignable<typeof page.handleQueryMenuItemMenuItemIdChange, (...args: any[]) => void>>;
type _Action_setQueryMenuItemName = Assert<Assignable<typeof page.setQueryMenuItemName, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemNameChange = Assert<Assignable<typeof page.handleQueryMenuItemNameChange, (...args: any[]) => void>>;
type _Action_setQueryMenuItemCategory = Assert<Assignable<typeof page.setQueryMenuItemCategory, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemCategoryChange = Assert<Assignable<typeof page.handleQueryMenuItemCategoryChange, (...args: any[]) => void>>;
type _Action_setQueryMenuItemStockItemId = Assert<Assignable<typeof page.setQueryMenuItemStockItemId, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemStockItemIdChange = Assert<Assignable<typeof page.handleQueryMenuItemStockItemIdChange, (...args: any[]) => void>>;
type _Action_setQueryMenuItemStatus = Assert<Assignable<typeof page.setQueryMenuItemStatus, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemStatusChange = Assert<Assignable<typeof page.handleQueryMenuItemStatusChange, (...args: any[]) => void>>;
type _Action_setQueryMenuItemCreatedAt = Assert<Assignable<typeof page.setQueryMenuItemCreatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryMenuItemCreatedAtChange = Assert<Assignable<typeof page.handleQueryMenuItemCreatedAtChange, (...args: any[]) => void>>;

export {};