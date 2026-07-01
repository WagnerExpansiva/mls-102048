/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/createStockItem.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateStockItemInput, CafeFlowCreateStockItemOutput } from './createStockItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateStockItemInput = {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateStockItemOutput = {
  stockItemId: string;
};

type _CafeFlowCreateStockItemInput = Assert<Equal<CafeFlowCreateStockItemInput, ExpectedCafeFlowCreateStockItemInput>>;
type _CafeFlowCreateStockItemOutput = Assert<Equal<CafeFlowCreateStockItemOutput, ExpectedCafeFlowCreateStockItemOutput>>;

export {};