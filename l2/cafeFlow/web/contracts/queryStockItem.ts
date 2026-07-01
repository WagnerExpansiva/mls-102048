/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryStockItem.ts" enhancement="_blank"/>

export interface CafeFlowQueryStockItemInput {
  stockItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryStockItemOutputItem {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryStockItemOutput = CafeFlowQueryStockItemOutputItem[];
