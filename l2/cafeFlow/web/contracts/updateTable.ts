/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateTable.ts" enhancement="_blank"/>

export interface CafeFlowUpdateTableInput {
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateTableOutput {
  tableId: string;
}
