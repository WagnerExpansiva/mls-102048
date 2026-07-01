/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryTable.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowQueryTableBase } from './queryTable.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowQueryTableBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_queryTableState = Assert<Assignable<typeof page.queryTableState, "idle" | "loading" | "success" | "error">>;
type _State_queryTableTableId = Assert<Assignable<typeof page.queryTableTableId, string>>;
type _State_queryTableStatus = Assert<Assignable<typeof page.queryTableStatus, string>>;
type _State_queryTableCreatedAt = Assert<Assignable<typeof page.queryTableCreatedAt, string>>;
type _State_queryTableUpdatedAt = Assert<Assignable<typeof page.queryTableUpdatedAt, string>>;
type _State_queryTableData = Assert<Assignable<typeof page.queryTableData, unknown[]>>;
type _Action_loadQueryTable = Assert<Assignable<typeof page.loadQueryTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleQueryTableClick = Assert<Assignable<typeof page.handleQueryTableClick, (...args: any[]) => void>>;
type _Action_setQueryTableTableId = Assert<Assignable<typeof page.setQueryTableTableId, (...args: any[]) => void>>;
type _Handler_handleQueryTableTableIdChange = Assert<Assignable<typeof page.handleQueryTableTableIdChange, (...args: any[]) => void>>;
type _Action_setQueryTableStatus = Assert<Assignable<typeof page.setQueryTableStatus, (...args: any[]) => void>>;
type _Handler_handleQueryTableStatusChange = Assert<Assignable<typeof page.handleQueryTableStatusChange, (...args: any[]) => void>>;
type _Action_setQueryTableCreatedAt = Assert<Assignable<typeof page.setQueryTableCreatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryTableCreatedAtChange = Assert<Assignable<typeof page.handleQueryTableCreatedAtChange, (...args: any[]) => void>>;
type _Action_setQueryTableUpdatedAt = Assert<Assignable<typeof page.setQueryTableUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryTableUpdatedAtChange = Assert<Assignable<typeof page.handleQueryTableUpdatedAtChange, (...args: any[]) => void>>;

export {};