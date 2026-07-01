/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.test.ts" enhancement="_blank"/>

import type { CafeFlowViewDashboardInput, CafeFlowViewDashboardOutput, CafeFlowViewDashboardOutputItem, CafeFlowViewShiftReportInput, CafeFlowViewShiftReportOutput, CafeFlowViewShiftReportOutputItem } from './shiftLifecycle.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowViewDashboardInput = {
  dailyShiftId?: string;
  date?: string;
  status?: "open" | "closed";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowViewDashboardOutputItem = {
  dailyShiftId: string;
  date: string;
  openTime: string;
  closeTime: string;
  status: "open" | "closed";
  totalSales: number;
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowViewDashboardOutput = ExpectedCafeFlowViewDashboardOutputItem[];
type ExpectedCafeFlowViewShiftReportInput = {
  shiftCloseReportId?: string;
  dailyShiftId?: string;
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowViewShiftReportOutputItem = {
  shiftCloseReportId: string;
  dailyShiftId: string;
  totalSales: number;
  totalOrders: number;
  bestSellingItems: string;
  stockConsumptionSummary: string;
  operationalMetrics: string;
  createdAt: string;
};
type ExpectedCafeFlowViewShiftReportOutput = ExpectedCafeFlowViewShiftReportOutputItem[];

type _CafeFlowViewDashboardInput = Assert<Equal<CafeFlowViewDashboardInput, ExpectedCafeFlowViewDashboardInput>>;
type _CafeFlowViewDashboardOutputItem = Assert<Equal<CafeFlowViewDashboardOutputItem, ExpectedCafeFlowViewDashboardOutputItem>>;
type _CafeFlowViewDashboardOutput = Assert<Equal<CafeFlowViewDashboardOutput, ExpectedCafeFlowViewDashboardOutput>>;
type _CafeFlowViewShiftReportInput = Assert<Equal<CafeFlowViewShiftReportInput, ExpectedCafeFlowViewShiftReportInput>>;
type _CafeFlowViewShiftReportOutputItem = Assert<Equal<CafeFlowViewShiftReportOutputItem, ExpectedCafeFlowViewShiftReportOutputItem>>;
type _CafeFlowViewShiftReportOutput = Assert<Equal<CafeFlowViewShiftReportOutput, ExpectedCafeFlowViewShiftReportOutput>>;

export {};