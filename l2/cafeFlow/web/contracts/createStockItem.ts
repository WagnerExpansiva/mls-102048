/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createStockItem.ts" enhancement="_blank"/>

export interface CafeFlowCreateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
}

export interface CafeFlowCreateStockItemOutput {
  stockItemId: string;
}
