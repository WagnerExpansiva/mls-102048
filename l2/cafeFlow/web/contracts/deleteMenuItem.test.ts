/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.test.ts" enhancement="_blank"/>

import type { CafeFlowDeleteMenuItemInput, CafeFlowDeleteMenuItemOutput } from './deleteMenuItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowDeleteMenuItemInput = {
  menuItemId?: string;
  name: string;
  category: string;
  price: number;
  stockItemId?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteMenuItemOutput = {
  menuItemId: string;
};

type _CafeFlowDeleteMenuItemInput = Assert<Equal<CafeFlowDeleteMenuItemInput, ExpectedCafeFlowDeleteMenuItemInput>>;
type _CafeFlowDeleteMenuItemOutput = Assert<Equal<CafeFlowDeleteMenuItemOutput, ExpectedCafeFlowDeleteMenuItemOutput>>;

export {};