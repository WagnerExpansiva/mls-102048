/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createMenuItem.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateMenuItemInput, CafeFlowCreateMenuItemOutput } from './createMenuItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateMenuItemInput = {
  name: string;
  category: string;
  price: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateMenuItemOutput = {
  menuItemId: string;
};

type _CafeFlowCreateMenuItemInput = Assert<Equal<CafeFlowCreateMenuItemInput, ExpectedCafeFlowCreateMenuItemInput>>;
type _CafeFlowCreateMenuItemOutput = Assert<Equal<CafeFlowCreateMenuItemOutput, ExpectedCafeFlowCreateMenuItemOutput>>;

export {};