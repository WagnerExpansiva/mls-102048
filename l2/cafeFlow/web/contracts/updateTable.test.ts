/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateTable.test.ts" enhancement="_blank"/>

import type { CafeFlowUpdateTableInput, CafeFlowUpdateTableOutput } from './updateTable.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowUpdateTableInput = {
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateTableOutput = {
  tableId: string;
};

type _CafeFlowUpdateTableInput = Assert<Equal<CafeFlowUpdateTableInput, ExpectedCafeFlowUpdateTableInput>>;
type _CafeFlowUpdateTableOutput = Assert<Equal<CafeFlowUpdateTableOutput, ExpectedCafeFlowUpdateTableOutput>>;

export {};