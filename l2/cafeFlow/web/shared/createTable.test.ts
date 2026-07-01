/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createTable.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowCreateTableBase } from './createTable.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowCreateTableBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createTableState = Assert<Assignable<typeof page.createTableState, "idle" | "loading" | "success" | "error">>;
type _State_createTableTableNumber = Assert<Assignable<typeof page.createTableTableNumber, string>>;
type _State_createTableCapacity = Assert<Assignable<typeof page.createTableCapacity, string>>;
type _State_createTableStatus = Assert<Assignable<typeof page.createTableStatus, string>>;
type _Action_createTable = Assert<Assignable<typeof page.createTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateTableClick = Assert<Assignable<typeof page.handleCreateTableClick, (...args: any[]) => void>>;
type _Action_setCreateTableTableNumber = Assert<Assignable<typeof page.setCreateTableTableNumber, (...args: any[]) => void>>;
type _Handler_handleCreateTableTableNumberChange = Assert<Assignable<typeof page.handleCreateTableTableNumberChange, (...args: any[]) => void>>;
type _Action_setCreateTableCapacity = Assert<Assignable<typeof page.setCreateTableCapacity, (...args: any[]) => void>>;
type _Handler_handleCreateTableCapacityChange = Assert<Assignable<typeof page.handleCreateTableCapacityChange, (...args: any[]) => void>>;
type _Action_setCreateTableStatus = Assert<Assignable<typeof page.setCreateTableStatus, (...args: any[]) => void>>;
type _Handler_handleCreateTableStatusChange = Assert<Assignable<typeof page.handleCreateTableStatusChange, (...args: any[]) => void>>;

export {};