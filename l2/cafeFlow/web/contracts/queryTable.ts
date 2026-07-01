/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryTable.ts" enhancement="_blank"/>

export interface CafeFlowQueryTableInput {
  tableId?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryTableOutputItem {
  tableId: string;
  tableNumber: string;
  capacity: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryTableOutput = CafeFlowQueryTableOutputItem[];
