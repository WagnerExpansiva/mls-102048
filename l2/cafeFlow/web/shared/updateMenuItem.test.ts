/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateMenuItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowUpdateMenuItemBase } from './updateMenuItem.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowUpdateMenuItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_updateMenuItemState = Assert<Assignable<typeof page.updateMenuItemState, "idle" | "loading" | "success" | "error">>;
type _State_updateMenuItemName = Assert<Assignable<typeof page.updateMenuItemName, string>>;
type _State_updateMenuItemPrice = Assert<Assignable<typeof page.updateMenuItemPrice, string>>;
type _State_updateMenuItemStockItemId = Assert<Assignable<typeof page.updateMenuItemStockItemId, string>>;
type _State_updateMenuItemStatus = Assert<Assignable<typeof page.updateMenuItemStatus, string>>;
type _Action_updateMenuItem = Assert<Assignable<typeof page.updateMenuItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateMenuItemClick = Assert<Assignable<typeof page.handleUpdateMenuItemClick, (...args: any[]) => void>>;
type _Action_setUpdateMenuItemName = Assert<Assignable<typeof page.setUpdateMenuItemName, (...args: any[]) => void>>;
type _Handler_handleUpdateMenuItemNameChange = Assert<Assignable<typeof page.handleUpdateMenuItemNameChange, (...args: any[]) => void>>;
type _Action_setUpdateMenuItemPrice = Assert<Assignable<typeof page.setUpdateMenuItemPrice, (...args: any[]) => void>>;
type _Handler_handleUpdateMenuItemPriceChange = Assert<Assignable<typeof page.handleUpdateMenuItemPriceChange, (...args: any[]) => void>>;
type _Action_setUpdateMenuItemStockItemId = Assert<Assignable<typeof page.setUpdateMenuItemStockItemId, (...args: any[]) => void>>;
type _Handler_handleUpdateMenuItemStockItemIdChange = Assert<Assignable<typeof page.handleUpdateMenuItemStockItemIdChange, (...args: any[]) => void>>;
type _Action_setUpdateMenuItemStatus = Assert<Assignable<typeof page.setUpdateMenuItemStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateMenuItemStatusChange = Assert<Assignable<typeof page.handleUpdateMenuItemStatusChange, (...args: any[]) => void>>;

export {};