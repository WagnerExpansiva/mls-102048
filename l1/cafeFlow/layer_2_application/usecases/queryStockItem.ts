/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryStockItemInput {
  stockItemId?: string;
  name?: string;
  status?: string;
}

export interface QueryStockItemOutput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  lowStockAlert: boolean;
}

interface StockItemMdmDetails {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: string;
  currentStockLevel?: number;
  createdAt: string;
  updatedAt: string;
  cafeFlow?: Record<string, unknown>;
}

/**
 * lowStockAlertRule: an item is in low-stock alert when its current stock level
 * is at or below the configured minimumStockLevel.
 */
function computeLowStockAlert(details: StockItemMdmDetails): boolean {
  const current = details.currentStockLevel ?? 0;
  return current <= details.minimumStockLevel;
}

function projectStockItem(
  mdmId: string,
  details: StockItemMdmDetails,
): QueryStockItemOutput {
  return {
    stockItemId: mdmId,
    name: details.name,
    unitOfMeasure: details.unitOfMeasure,
    minimumStockLevel: details.minimumStockLevel,
    status: details.status,
    createdAt: details.createdAt,
    updatedAt: details.updatedAt,
    lowStockAlert: computeLowStockAlert(details),
  };
}

export async function queryStockItem(
  ctx: RequestContext,
  input: QueryStockItemInput,
): Promise<QueryStockItemOutput[]> {
  // Single-item lookup by id
  if (input.stockItemId) {
    const doc = await ctx.data.mdmDocument.get({ mdmId: input.stockItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `StockItem not found: ${input.stockItemId}`,
        404,
        { stockItemId: input.stockItemId },
      );
    }
    const details = doc.details as unknown as StockItemMdmDetails;
    return [projectStockItem(doc.mdmId, details)];
  }

  // List query: fetch from MDM entity index, then filter by name/status
  const indexRecords = await ctx.data.mdmEntityIndex.findMany({
    where: { subtype: 'Product' },
    limit: 500,
  });

  const mdmIds = indexRecords.map((r) => r.mdmId);
  if (mdmIds.length === 0) {
    return [];
  }

  const docs = await ctx.data.mdmDocument.getMany({ mdmIds });

  const results: QueryStockItemOutput[] = [];

  for (const doc of docs) {
    const details = doc.details as unknown as StockItemMdmDetails;

    // Apply optional name filter (partial, case-insensitive)
    if (input.name) {
      const itemName = (details.name ?? '').toLowerCase();
      if (!itemName.includes(input.name.toLowerCase())) {
        continue;
      }
    }

    // Apply optional status filter
    if (input.status) {
      if ((details.status ?? '').toLowerCase() !== input.status.toLowerCase()) {
        continue;
      }
    }

    results.push(projectStockItem(doc.mdmId, details));
  }

  return results;
}
