/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.ts" enhancement="_blank"/>

import type {
  StockLevel,
  StockLevelStatus,
} from '/_102048_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

export type StockLevelId = string;
export type ProductId = string;
export type Quantity = number;

export interface StockLevelFilter {
  stockItemId?: string;
  status?: StockLevelStatus;
}

export interface IStockLevelRepository {
  getById(id: StockLevelId): Promise<StockLevel | null>;
  list(filter: StockLevelFilter): Promise<StockLevel[]>;
  save(aggregate: StockLevel): Promise<void>;
  findByProductId(productId: ProductId): Promise<StockLevel | null>;
  listLowStock(threshold: Quantity): Promise<StockLevel[]>;
}
