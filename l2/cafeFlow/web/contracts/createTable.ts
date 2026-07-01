/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createTable.ts" enhancement="_blank"/>

export interface CafeFlowCreateTableInput {
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
}

export interface CafeFlowCreateTableOutput {
  tableId: string;
}
