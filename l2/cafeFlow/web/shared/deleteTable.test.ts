/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteTable.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowDeleteTableBase } from './deleteTable.js';
type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowDeleteTableBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_deleteTableState = Assert<Assignable<typeof page.deleteTableState, "idle" | "loading" | "success" | "error">>;
type _State_deleteTableTableId = Assert<Assignable<typeof page.deleteTableTableId, string>>;
type _State_deleteTableTableNumber = Assert<Assignable<typeof page.deleteTableTableNumber, string>>;
type _State_deleteTableCapacity = Assert<Assignable<typeof page.deleteTableCapacity, string>>;
type _State_deleteTableStatus = Assert<Assignable<typeof page.deleteTableStatus, string>>;
type _Action_deleteTable = Assert<Assignable<typeof page.deleteTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleDeleteTableClick = Assert<Assignable<typeof page.handleDeleteTableClick, (...args: any[]) => void>>;
type _Action_setDeleteTableTableId = Assert<Assignable<typeof page.setDeleteTableTableId, (...args: any[]) => void>>;
type _Handler_handleDeleteTableTableIdChange = Assert<Assignable<typeof page.handleDeleteTableTableIdChange, (...args: any[]) => void>>;
type _Action_setDeleteTableTableNumber = Assert<Assignable<typeof page.setDeleteTableTableNumber, (...args: any[]) => void>>;
type _Handler_handleDeleteTableTableNumberChange = Assert<Assignable<typeof page.handleDeleteTableTableNumberChange, (...args: any[]) => void>>;
type _Action_setDeleteTableCapacity = Assert<Assignable<typeof page.setDeleteTableCapacity, (...args: any[]) => void>>;
type _Handler_handleDeleteTableCapacityChange = Assert<Assignable<typeof page.handleDeleteTableCapacityChange, (...args: any[]) => void>>;
type _Action_setDeleteTableStatus = Assert<Assignable<typeof page.setDeleteTableStatus, (...args: any[]) => void>>;
type _Handler_handleDeleteTableStatusChange = Assert<Assignable<typeof page.handleDeleteTableStatusChange, (...args: any[]) => void>>;

export {};