/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/queryStockItem.test.ts" enhancement="_blank"/>

import type { CafeFlowQueryStockItemInput, CafeFlowQueryStockItemOutput, CafeFlowQueryStockItemOutputItem } from './queryStockItem.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryStockItemInput = {
  stockItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryStockItemOutputItem = {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryStockItemOutput = ExpectedCafeFlowQueryStockItemOutputItem[];

type _CafeFlowQueryStockItemInput = Assert<Equal<CafeFlowQueryStockItemInput, ExpectedCafeFlowQueryStockItemInput>>;
type _CafeFlowQueryStockItemOutputItem = Assert<Equal<CafeFlowQueryStockItemOutputItem, ExpectedCafeFlowQueryStockItemOutputItem>>;
type _CafeFlowQueryStockItemOutput = Assert<Equal<CafeFlowQueryStockItemOutput, ExpectedCafeFlowQueryStockItemOutput>>;

export {};