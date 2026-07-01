/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.ts" enhancement="_blank"/>

export interface CafeFlowAdjustStockLevelInput {
  currentQuantity: number;
  status: "sufficient" | "low" | "depleted";
}

export interface CafeFlowAdjustStockLevelOutput {
  stockLevelId: string;
}
