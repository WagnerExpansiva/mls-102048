/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryTable.test.ts" enhancement="_blank"/>

import type { CafeFlowQueryTableInput, CafeFlowQueryTableOutput, CafeFlowQueryTableOutputItem } from './queryTable.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryTableInput = {
  tableId?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryTableOutputItem = {
  tableId: string;
  tableNumber: string;
  capacity: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryTableOutput = ExpectedCafeFlowQueryTableOutputItem[];

type _CafeFlowQueryTableInput = Assert<Equal<CafeFlowQueryTableInput, ExpectedCafeFlowQueryTableInput>>;
type _CafeFlowQueryTableOutputItem = Assert<Equal<CafeFlowQueryTableOutputItem, ExpectedCafeFlowQueryTableOutputItem>>;
type _CafeFlowQueryTableOutput = Assert<Equal<CafeFlowQueryTableOutput, ExpectedCafeFlowQueryTableOutput>>;

export {};