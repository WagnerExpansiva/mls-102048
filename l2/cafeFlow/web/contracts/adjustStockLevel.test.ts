/// <mls fileReference="_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.test.ts" enhancement="_blank"/>

import type { CafeFlowAdjustStockLevelInput, CafeFlowAdjustStockLevelOutput } from './adjustStockLevel.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowAdjustStockLevelInput = {
  currentQuantity: number;
  status: "sufficient" | "low" | "depleted";
};
type ExpectedCafeFlowAdjustStockLevelOutput = {
  stockLevelId: string;
};

type _CafeFlowAdjustStockLevelInput = Assert<Equal<CafeFlowAdjustStockLevelInput, ExpectedCafeFlowAdjustStockLevelInput>>;
type _CafeFlowAdjustStockLevelOutput = Assert<Equal<CafeFlowAdjustStockLevelOutput, ExpectedCafeFlowAdjustStockLevelOutput>>;

export {};