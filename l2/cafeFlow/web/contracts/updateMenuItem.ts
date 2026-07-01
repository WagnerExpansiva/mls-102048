/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateMenuItem.ts" enhancement="_blank"/>

export interface CafeFlowUpdateMenuItemInput {
  name: string;
  price: number;
  stockItemId?: string;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateMenuItemOutput {
  menuItemId: string;
}
