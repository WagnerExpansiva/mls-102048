/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.ts" enhancement="_blank"/>

export interface CafeFlowDeleteMenuItemInput {
  menuItemId?: string;
  name: string;
  category: string;
  price: number;
  stockItemId?: string;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteMenuItemOutput {
  menuItemId: string;
}
