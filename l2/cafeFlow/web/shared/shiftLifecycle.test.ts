/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/shiftLifecycle.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowShiftLifecycleBase } from './shiftLifecycle.js'; 

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowShiftLifecycleBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_viewDashboardState = Assert<Assignable<typeof page.viewDashboardState, "idle" | "loading" | "success" | "error">>;
type _State_viewDashboardDailyShiftId = Assert<Assignable<typeof page.viewDashboardDailyShiftId, string>>;
type _State_viewDashboardDate = Assert<Assignable<typeof page.viewDashboardDate, string>>;
type _State_viewDashboardStatus = Assert<Assignable<typeof page.viewDashboardStatus, string>>;
type _State_viewDashboardCreatedAt = Assert<Assignable<typeof page.viewDashboardCreatedAt, string>>;
type _State_viewDashboardUpdatedAt = Assert<Assignable<typeof page.viewDashboardUpdatedAt, string>>;
type _State_viewDashboardData = Assert<Assignable<typeof page.viewDashboardData, unknown[]>>;
type _State_viewShiftReportState = Assert<Assignable<typeof page.viewShiftReportState, "idle" | "loading" | "success" | "error">>;
type _State_viewShiftReportShiftCloseReportId = Assert<Assignable<typeof page.viewShiftReportShiftCloseReportId, string>>;
type _State_viewShiftReportDailyShiftId = Assert<Assignable<typeof page.viewShiftReportDailyShiftId, string>>;
type _State_viewShiftReportCreatedAt = Assert<Assignable<typeof page.viewShiftReportCreatedAt, string>>;
type _State_viewShiftReportUpdatedAt = Assert<Assignable<typeof page.viewShiftReportUpdatedAt, string>>;
type _State_viewShiftReportData = Assert<Assignable<typeof page.viewShiftReportData, unknown[]>>;
type _Action_loadViewDashboard = Assert<Assignable<typeof page.loadViewDashboard, (...args: any[]) => Promise<void>>>;
type _Handler_handleViewDashboardClick = Assert<Assignable<typeof page.handleViewDashboardClick, (...args: any[]) => void>>;
type _Action_loadViewShiftReport = Assert<Assignable<typeof page.loadViewShiftReport, (...args: any[]) => Promise<void>>>;
type _Handler_handleViewShiftReportClick = Assert<Assignable<typeof page.handleViewShiftReportClick, (...args: any[]) => void>>;
type _Action_setViewDashboardDailyShiftId = Assert<Assignable<typeof page.setViewDashboardDailyShiftId, (...args: any[]) => void>>;
type _Handler_handleViewDashboardDailyShiftIdChange = Assert<Assignable<typeof page.handleViewDashboardDailyShiftIdChange, (...args: any[]) => void>>;
type _Action_setViewDashboardDate = Assert<Assignable<typeof page.setViewDashboardDate, (...args: any[]) => void>>;
type _Handler_handleViewDashboardDateChange = Assert<Assignable<typeof page.handleViewDashboardDateChange, (...args: any[]) => void>>;
type _Action_setViewDashboardStatus = Assert<Assignable<typeof page.setViewDashboardStatus, (...args: any[]) => void>>;
type _Handler_handleViewDashboardStatusChange = Assert<Assignable<typeof page.handleViewDashboardStatusChange, (...args: any[]) => void>>;
type _Action_setViewDashboardCreatedAt = Assert<Assignable<typeof page.setViewDashboardCreatedAt, (...args: any[]) => void>>;
type _Handler_handleViewDashboardCreatedAtChange = Assert<Assignable<typeof page.handleViewDashboardCreatedAtChange, (...args: any[]) => void>>;
type _Action_setViewDashboardUpdatedAt = Assert<Assignable<typeof page.setViewDashboardUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleViewDashboardUpdatedAtChange = Assert<Assignable<typeof page.handleViewDashboardUpdatedAtChange, (...args: any[]) => void>>;
type _Action_setViewShiftReportShiftCloseReportId = Assert<Assignable<typeof page.setViewShiftReportShiftCloseReportId, (...args: any[]) => void>>;
type _Handler_handleViewShiftReportShiftCloseReportIdChange = Assert<Assignable<typeof page.handleViewShiftReportShiftCloseReportIdChange, (...args: any[]) => void>>;
type _Action_setViewShiftReportDailyShiftId = Assert<Assignable<typeof page.setViewShiftReportDailyShiftId, (...args: any[]) => void>>;
type _Handler_handleViewShiftReportDailyShiftIdChange = Assert<Assignable<typeof page.handleViewShiftReportDailyShiftIdChange, (...args: any[]) => void>>;
type _Action_setViewShiftReportCreatedAt = Assert<Assignable<typeof page.setViewShiftReportCreatedAt, (...args: any[]) => void>>;
type _Handler_handleViewShiftReportCreatedAtChange = Assert<Assignable<typeof page.handleViewShiftReportCreatedAtChange, (...args: any[]) => void>>;
type _Action_setViewShiftReportUpdatedAt = Assert<Assignable<typeof page.setViewShiftReportUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleViewShiftReportUpdatedAtChange = Assert<Assignable<typeof page.handleViewShiftReportUpdatedAtChange, (...args: any[]) => void>>;

export {};