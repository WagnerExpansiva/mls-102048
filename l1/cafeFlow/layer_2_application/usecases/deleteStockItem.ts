/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteStockItemInput {
  stockItemId: string;
}

export interface DeleteStockItemOutput {
  stockItemId: string;
  status: string;
}

export async function deleteStockItem(
  ctx: RequestContext,
  input: DeleteStockItemInput,
): Promise<DeleteStockItemOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    // 1. Load the StockItem aggregate from MDM by stockItemId.
    const doc = await tx.mdmDocument.get({ mdmId: input.stockItemId });

    // 2. Validate that the StockItem exists; throw a not-found error if it does not.
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `StockItem not found: ${input.stockItemId}`,
        404,
        { stockItemId: input.stockItemId },
      );
    }

    // 3. Apply lowStockAlertRule: if the item was configured with a minimumStockLevel > 0,
    //    emit a low-stock alert signal so downstream consumers can react to the removal.
    const details = doc.details as Record<string, unknown>;
    const moduleData = (details.cafeFlow as Record<string, unknown> | undefined) ?? {};
    const minimumStockLevel = (moduleData.minimumStockLevel as number | undefined) ?? 0;

    if (minimumStockLevel > 0) {
      await tx.pgQueue.publish({
        topic: 'cafeFlow.lowStockAlert',
        payload: {
          stockItemId: input.stockItemId,
          minimumStockLevel,
          event: 'stockItemDeleted',
          timestamp: ctx.clock.nowIso(),
        },
      });
    }

    // 4. Delete the StockItem aggregate from MDM inside the transaction.
    await tx.mdmDocument.delete({ mdmId: input.stockItemId });

    // 5. Return the result.
    return {
      stockItemId: input.stockItemId,
      status: 'deleted',
    };
  });
}
