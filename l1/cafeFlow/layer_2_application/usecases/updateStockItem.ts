/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateStockItemInput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: string;
}

export interface UpdateStockItemOutput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: string;
  updatedAt: string;
}

export async function updateStockItem(
  ctx: RequestContext,
  input: UpdateStockItemInput,
): Promise<UpdateStockItemOutput> {
  const now = ctx.clock.nowIso();

  return ctx.data.runInTransaction(async (tx) => {
    // 1. Load the StockItem MDM record by id
    const doc = await tx.mdmDocument.get({ mdmId: input.stockItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `StockItem not found: ${input.stockItemId}`,
        404,
        { stockItemId: input.stockItemId },
      );
    }

    const details = doc.details;
    const cafeFlow = (details.cafeFlow as Record<string, unknown> | undefined) ?? {};

    // 2. Evaluate lowStockAlertRule: if minimumStockLevel > 0 and current
    //    quantity on hand is at or below the threshold, flag low-stock.
    const quantityOnHand = (cafeFlow.quantityOnHand as number | undefined) ?? 0;
    const lowStock =
      input.minimumStockLevel > 0 && quantityOnHand <= input.minimumStockLevel;

    // 3. Map domain status to MDM cadastral status
    const mdmStatus = input.status === 'inactive' ? 'Inactive' : 'Active';

    // 4. Write back through MDM, preserving base fields and overriding what changed
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...details,
          name: input.name,
          status: mdmStatus,
          updatedAt: now,
          cafeFlow: {
            ...cafeFlow,
            name: input.name,
            unitOfMeasure: input.unitOfMeasure,
            minimumStockLevel: input.minimumStockLevel,
            status: input.status,
            lowStock,
            updatedAt: now,
          },
        },
      },
      expectedVersion: doc.version,
    });

    // 5. Return the updated fields
    return {
      stockItemId: input.stockItemId,
      name: input.name,
      unitOfMeasure: input.unitOfMeasure,
      minimumStockLevel: input.minimumStockLevel,
      status: input.status,
      updatedAt: now,
    };
  });
}
