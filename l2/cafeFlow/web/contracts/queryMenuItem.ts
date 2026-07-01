/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryMenuItem.ts" enhancement="_blank"/>

export interface CafeFlowQueryMenuItemInput {
  menuItemId?: string;
  name?: string;
  category?: string;
  stockItemId?: string;
  status?: "active" | "inactive";
  createdAt?: string;
}

export interface CafeFlowQueryMenuItemOutputItem {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  stockItemId: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryMenuItemOutput = CafeFlowQueryMenuItemOutputItem[];
