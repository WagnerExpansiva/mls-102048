/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateStockItem.ts" enhancement="_blank"/>

export interface CafeFlowUpdateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateStockItemOutput {
  stockItemId: string;
}
