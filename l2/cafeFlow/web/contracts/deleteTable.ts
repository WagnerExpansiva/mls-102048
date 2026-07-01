/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteTable.ts" enhancement="_blank"/>

export interface CafeFlowDeleteTableInput {
  tableId?: string;
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteTableOutput {
  tableId: string;
}
