/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryMenuItemInput {
  menuItemId: string;
  includeStockDetails?: boolean;
}

export interface QueryMenuItemOutput {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  stockItemId?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  stockItemName?: string;
  stockItemUnitOfMeasure?: string;
  stockItemMinimumStockLevel?: number;
  stockItemStatus?: string;
}

export async function queryMenuItem(
  ctx: RequestContext,
  input: QueryMenuItemInput,
): Promise<QueryMenuItemOutput> {
  // 1. Read MenuItem master data by id
  const menuDoc = await ctx.data.mdmDocument.get({ mdmId: input.menuItemId });
  if (!menuDoc) {
    throw new AppError(
      'NOT_FOUND',
      `MenuItem not found: ${input.menuItemId}`,
      404,
      { mdmId: input.menuItemId },
    );
  }

  const menuDetails = menuDoc.details as Record<string, unknown>;
  const cafeFlow = (menuDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

  const menuItemId: string = menuDoc.mdmId;
  const name: string = (menuDetails.name as string) ?? '';
  const category: string = (cafeFlow.category as string) ?? '';
  const price: number = (cafeFlow.price as number) ?? 0;
  const stockItemId: string | undefined =
    (cafeFlow.stockItemId as string | undefined) ?? undefined;
  const status: string = (menuDetails.status as string) ?? 'Active';
  const createdAt: string = (menuDetails.createdAt as string) ?? '';
  const updatedAt: string = (menuDetails.updatedAt as string) ?? '';

  const result: QueryMenuItemOutput = {
    menuItemId,
    name,
    category,
    price,
    status,
    createdAt,
    updatedAt,
  };

  if (stockItemId) {
    result.stockItemId = stockItemId;
  }

  // 2. Enrich with StockItem master data when requested
  if (input.includeStockDetails && stockItemId) {
    const stockDoc = await ctx.data.mdmDocument.get({ mdmId: stockItemId });
    if (stockDoc) {
      const stockDetails = stockDoc.details as Record<string, unknown>;
      const stockCafeFlow =
        (stockDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

      result.stockItemName = (stockDetails.name as string) ?? '';
      result.stockItemUnitOfMeasure =
        (stockCafeFlow.unitOfMeasure as string) ?? '';
      result.stockItemMinimumStockLevel =
        (stockCafeFlow.minimumStockLevel as number) ?? 0;
      result.stockItemStatus = (stockDetails.status as string) ?? 'Active';

      // 3. Apply stockConsumptionRule: when MenuItem is active, the linked StockItem must be active
      if (status === 'Active' && result.stockItemStatus !== 'Active') {
        throw new AppError(
          'VALIDATION_ERROR',
          'stockConsumptionRule: the linked StockItem must be active when the MenuItem is active.',
          400,
          {
            ruleId: 'stockConsumptionRule',
            menuItemId,
            stockItemId,
            stockItemStatus: result.stockItemStatus,
          },
        );
      }
    }
  }

  return result;
}
