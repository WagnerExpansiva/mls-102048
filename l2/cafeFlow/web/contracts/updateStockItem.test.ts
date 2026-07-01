/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/updateStockItem.test.ts" enhancement="_blank"/>

import type { CafeFlowUpdateStockItemInput, CafeFlowUpdateStockItemOutput } from './updateStockItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowUpdateStockItemInput = {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateStockItemOutput = {
  stockItemId: string;
};

type _CafeFlowUpdateStockItemInput = Assert<Equal<CafeFlowUpdateStockItemInput, ExpectedCafeFlowUpdateStockItemInput>>;
type _CafeFlowUpdateStockItemOutput = Assert<Equal<CafeFlowUpdateStockItemOutput, ExpectedCafeFlowUpdateStockItemOutput>>;

export {};