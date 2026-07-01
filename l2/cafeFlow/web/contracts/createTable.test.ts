/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createTable.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateTableInput, CafeFlowCreateTableOutput } from './createTable.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateTableInput = {
  tableNumber: string;
  capacity?: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateTableOutput = {
  tableId: string;
};

type _CafeFlowCreateTableInput = Assert<Equal<CafeFlowCreateTableInput, ExpectedCafeFlowCreateTableInput>>;
type _CafeFlowCreateTableOutput = Assert<Equal<CafeFlowCreateTableOutput, ExpectedCafeFlowCreateTableOutput>>;

export {};