/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateTable.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowUpdateTableBase } from './updateTable.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowUpdateTableBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_updateTableState = Assert<Assignable<typeof page.updateTableState, "idle" | "loading" | "success" | "error">>;
type _State_updateTableTableNumber = Assert<Assignable<typeof page.updateTableTableNumber, string>>;
type _State_updateTableCapacity = Assert<Assignable<typeof page.updateTableCapacity, string>>;
type _State_updateTableStatus = Assert<Assignable<typeof page.updateTableStatus, string>>;
type _Action_updateTable = Assert<Assignable<typeof page.updateTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateTableClick = Assert<Assignable<typeof page.handleUpdateTableClick, (...args: any[]) => void>>;
type _Action_setUpdateTableTableNumber = Assert<Assignable<typeof page.setUpdateTableTableNumber, (...args: any[]) => void>>;
type _Handler_handleUpdateTableTableNumberChange = Assert<Assignable<typeof page.handleUpdateTableTableNumberChange, (...args: any[]) => void>>;
type _Action_setUpdateTableCapacity = Assert<Assignable<typeof page.setUpdateTableCapacity, (...args: any[]) => void>>;
type _Handler_handleUpdateTableCapacityChange = Assert<Assignable<typeof page.handleUpdateTableCapacityChange, (...args: any[]) => void>>;
type _Action_setUpdateTableStatus = Assert<Assignable<typeof page.setUpdateTableStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateTableStatusChange = Assert<Assignable<typeof page.handleUpdateTableStatusChange, (...args: any[]) => void>>;

export {};