/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteStockItem.ts" enhancement="_blank"/>

export interface CafeFlowDeleteStockItemInput {
  stockItemId?: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteStockItemOutput {
  stockItemId: string;
}
