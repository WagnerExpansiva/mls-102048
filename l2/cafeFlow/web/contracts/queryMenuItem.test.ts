/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryMenuItem.test.ts" enhancement="_blank"/>

import type { CafeFlowQueryMenuItemInput, CafeFlowQueryMenuItemOutput, CafeFlowQueryMenuItemOutputItem } from './queryMenuItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryMenuItemInput = {
  menuItemId?: string;
  name?: string;
  category?: string;
  stockItemId?: string;
  status?: "active" | "inactive";
  createdAt?: string;
};
type ExpectedCafeFlowQueryMenuItemOutputItem = {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  stockItemId: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryMenuItemOutput = ExpectedCafeFlowQueryMenuItemOutputItem[];

type _CafeFlowQueryMenuItemInput = Assert<Equal<CafeFlowQueryMenuItemInput, ExpectedCafeFlowQueryMenuItemInput>>;
type _CafeFlowQueryMenuItemOutputItem = Assert<Equal<CafeFlowQueryMenuItemOutputItem, ExpectedCafeFlowQueryMenuItemOutputItem>>;
type _CafeFlowQueryMenuItemOutput = Assert<Equal<CafeFlowQueryMenuItemOutput, ExpectedCafeFlowQueryMenuItemOutput>>;

export {};