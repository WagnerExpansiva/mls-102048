/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteMenuItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowDeleteMenuItemBase } from './deleteMenuItem.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowDeleteMenuItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_deleteMenuItemState = Assert<Assignable<typeof page.deleteMenuItemState, "idle" | "loading" | "success" | "error">>;
type _State_deleteMenuItemMenuItemId = Assert<Assignable<typeof page.deleteMenuItemMenuItemId, string>>;
type _State_deleteMenuItemName = Assert<Assignable<typeof page.deleteMenuItemName, string>>;
type _State_deleteMenuItemCategory = Assert<Assignable<typeof page.deleteMenuItemCategory, string>>;
type _State_deleteMenuItemPrice = Assert<Assignable<typeof page.deleteMenuItemPrice, string>>;
type _State_deleteMenuItemStockItemId = Assert<Assignable<typeof page.deleteMenuItemStockItemId, string>>;
type _State_deleteMenuItemStatus = Assert<Assignable<typeof page.deleteMenuItemStatus, string>>;
type _Action_deleteMenuItem = Assert<Assignable<typeof page.deleteMenuItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleDeleteMenuItemClick = Assert<Assignable<typeof page.handleDeleteMenuItemClick, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemMenuItemId = Assert<Assignable<typeof page.setDeleteMenuItemMenuItemId, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemMenuItemIdChange = Assert<Assignable<typeof page.handleDeleteMenuItemMenuItemIdChange, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemName = Assert<Assignable<typeof page.setDeleteMenuItemName, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemNameChange = Assert<Assignable<typeof page.handleDeleteMenuItemNameChange, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemCategory = Assert<Assignable<typeof page.setDeleteMenuItemCategory, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemCategoryChange = Assert<Assignable<typeof page.handleDeleteMenuItemCategoryChange, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemPrice = Assert<Assignable<typeof page.setDeleteMenuItemPrice, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemPriceChange = Assert<Assignable<typeof page.handleDeleteMenuItemPriceChange, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemStockItemId = Assert<Assignable<typeof page.setDeleteMenuItemStockItemId, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemStockItemIdChange = Assert<Assignable<typeof page.handleDeleteMenuItemStockItemIdChange, (...args: any[]) => void>>;
type _Action_setDeleteMenuItemStatus = Assert<Assignable<typeof page.setDeleteMenuItemStatus, (...args: any[]) => void>>;
type _Handler_handleDeleteMenuItemStatusChange = Assert<Assignable<typeof page.handleDeleteMenuItemStatusChange, (...args: any[]) => void>>;

export {};