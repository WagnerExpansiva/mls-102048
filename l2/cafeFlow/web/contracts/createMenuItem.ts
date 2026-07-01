/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createMenuItem.ts" enhancement="_blank"/>

export interface CafeFlowCreateMenuItemInput {
  name: string;
  category: string;
  price: number;
  status: "active" | "inactive";
}

export interface CafeFlowCreateMenuItemOutput {
  menuItemId: string;
}
