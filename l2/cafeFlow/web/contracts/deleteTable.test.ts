/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteTable.test.ts" enhancement="_blank"/>

import type { CafeFlowDeleteTableInput, CafeFlowDeleteTableOutput } from './deleteTable.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowDeleteTableInput = {
  tableId?: string;
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteTableOutput = {
  tableId: string;
};

type _CafeFlowDeleteTableInput = Assert<Equal<CafeFlowDeleteTableInput, ExpectedCafeFlowDeleteTableInput>>;
type _CafeFlowDeleteTableOutput = Assert<Equal<CafeFlowDeleteTableOutput, ExpectedCafeFlowDeleteTableOutput>>;

export {};