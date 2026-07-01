/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.ts" enhancement="_blank"/>

export interface CafeFlowViewDashboardInput {
  dailyShiftId?: string;
  date?: string;
  status?: "open" | "closed";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowViewDashboardOutputItem {
  dailyShiftId: string;
  date: string;
  openTime: string;
  closeTime: string;
  status: "open" | "closed";
  totalSales: number;
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowViewDashboardOutput = CafeFlowViewDashboardOutputItem[];

export interface CafeFlowViewShiftReportInput {
  shiftCloseReportId?: string;
  dailyShiftId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowViewShiftReportOutputItem {
  shiftCloseReportId: string;
  dailyShiftId: string;
  totalSales: number;
  totalOrders: number;
  bestSellingItems: string;
  stockConsumptionSummary: string;
  operationalMetrics: string;
  createdAt: string;
}

export type CafeFlowViewShiftReportOutput = CafeFlowViewShiftReportOutputItem[];
