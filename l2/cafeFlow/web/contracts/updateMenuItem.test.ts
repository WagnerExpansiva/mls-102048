/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateMenuItem.test.ts" enhancement="_blank"/>

import type { CafeFlowUpdateMenuItemInput, CafeFlowUpdateMenuItemOutput } from './updateMenuItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowUpdateMenuItemInput = {
  name: string;
  price: number;
  stockItemId?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateMenuItemOutput = {
  menuItemId: string;
};

type _CafeFlowUpdateMenuItemInput = Assert<Equal<CafeFlowUpdateMenuItemInput, ExpectedCafeFlowUpdateMenuItemInput>>;
type _CafeFlowUpdateMenuItemOutput = Assert<Equal<CafeFlowUpdateMenuItemOutput, ExpectedCafeFlowUpdateMenuItemOutput>>;

export {};