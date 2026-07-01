/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/deleteStockItem.test.ts" enhancement="_blank"/>

import type { CafeFlowDeleteStockItemInput, CafeFlowDeleteStockItemOutput } from './deleteStockItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowDeleteStockItemInput = {
  stockItemId?: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteStockItemOutput = {
  stockItemId: string;
};

type _CafeFlowDeleteStockItemInput = Assert<Equal<CafeFlowDeleteStockItemInput, ExpectedCafeFlowDeleteStockItemInput>>;
type _CafeFlowDeleteStockItemOutput = Assert<Equal<CafeFlowDeleteStockItemOutput, ExpectedCafeFlowDeleteStockItemOutput>>;

export {};