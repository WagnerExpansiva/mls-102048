/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createMenuItem.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowCreateMenuItemBase } from './createMenuItem.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowCreateMenuItemBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createMenuItemState = Assert<Assignable<typeof page.createMenuItemState, "idle" | "loading" | "success" | "error">>;
type _State_createMenuItemName = Assert<Assignable<typeof page.createMenuItemName, string>>;
type _State_createMenuItemCategory = Assert<Assignable<typeof page.createMenuItemCategory, string>>;
type _State_createMenuItemPrice = Assert<Assignable<typeof page.createMenuItemPrice, string>>;
type _State_createMenuItemStatus = Assert<Assignable<typeof page.createMenuItemStatus, string>>;
type _Action_createMenuItem = Assert<Assignable<typeof page.createMenuItem, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateMenuItemClick = Assert<Assignable<typeof page.handleCreateMenuItemClick, (...args: any[]) => void>>;
type _Action_setCreateMenuItemName = Assert<Assignable<typeof page.setCreateMenuItemName, (...args: any[]) => void>>;
type _Handler_handleCreateMenuItemNameChange = Assert<Assignable<typeof page.handleCreateMenuItemNameChange, (...args: any[]) => void>>;
type _Action_setCreateMenuItemCategory = Assert<Assignable<typeof page.setCreateMenuItemCategory, (...args: any[]) => void>>;
type _Handler_handleCreateMenuItemCategoryChange = Assert<Assignable<typeof page.handleCreateMenuItemCategoryChange, (...args: any[]) => void>>;
type _Action_setCreateMenuItemPrice = Assert<Assignable<typeof page.setCreateMenuItemPrice, (...args: any[]) => void>>;
type _Handler_handleCreateMenuItemPriceChange = Assert<Assignable<typeof page.handleCreateMenuItemPriceChange, (...args: any[]) => void>>;
type _Action_setCreateMenuItemStatus = Assert<Assignable<typeof page.setCreateMenuItemStatus, (...args: any[]) => void>>;
type _Handler_handleCreateMenuItemStatusChange = Assert<Assignable<typeof page.handleCreateMenuItemStatusChange, (...args: any[]) => void>>;

export {};