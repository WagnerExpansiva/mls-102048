/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateMenuItemInput {
  menuItemId: string;
  name?: string;
  category?: string;
  price?: number;
  stockItemId?: string | null;
  status?: string;
}

export interface UpdateMenuItemOutput {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  stockItemId?: string;
  status: string;
  updatedAt: string;
}

export async function updateMenuItem(
  ctx: RequestContext,
  input: UpdateMenuItemInput,
): Promise<UpdateMenuItemOutput> {
  // 6. Validate status early if provided
  if (
    input.status !== undefined &&
    input.status !== 'active' &&
    input.status !== 'inactive'
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'status must be one of "active" or "inactive".',
      400,
      { field: 'status', value: input.status },
    );
  }

  return ctx.data.runInTransaction(async (tx) => {
    // 1. Load the existing MenuItem MDM document
    const doc = await tx.mdmDocument.get({ mdmId: input.menuItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `MenuItem not found: ${input.menuItemId}`,
        404,
        { menuItemId: input.menuItemId },
      );
    }

    const existingDetails = doc.details;
    const existingCafeFlow =
      (existingDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

    // 2 & 3. Handle stockItemId: validate if provided, allow null to unlink, skip if undefined
    let resolvedStockItemId: string | null | undefined = undefined;
    if (input.stockItemId !== undefined) {
      if (input.stockItemId === null || input.stockItemId === '') {
        // 3. Allow unlinking without mdm lookup
        resolvedStockItemId = null;
      } else {
        // 2. stockConsumptionRule: validate StockItem exists and is active
        const stockDoc = await tx.mdmDocument.get({
          mdmId: input.stockItemId,
        });
        if (!stockDoc) {
          throw new AppError(
            'VALIDATION_ERROR',
            `StockItem not found: ${input.stockItemId}`,
            400,
            {
              stockItemId: input.stockItemId,
              ruleId: 'stockConsumptionRule',
            },
          );
        }
        if (stockDoc.details.status !== 'Active') {
          throw new AppError(
            'VALIDATION_ERROR',
            `StockItem is not active: ${input.stockItemId}`,
            400,
            {
              stockItemId: input.stockItemId,
              stockStatus: stockDoc.details.status,
              ruleId: 'stockConsumptionRule',
            },
          );
        }
        resolvedStockItemId = input.stockItemId;
      }
    }

    const now = ctx.clock.nowIso();

    // 4. Apply field changes, preserving menuItemId and createdAt
    const updatedName = input.name ?? (existingDetails.name as string);
    const updatedCategory =
      input.category ?? (existingCafeFlow.category as string);
    const updatedPrice =
      input.price ?? (existingCafeFlow.price as number);
    const updatedStockItemId =
      resolvedStockItemId !== undefined
        ? resolvedStockItemId
        : ((existingCafeFlow.stockItemId as string | null | undefined) ?? null);
    const updatedStatus =
      input.status ?? ((existingCafeFlow.status as string) ?? 'active');

    // Map module status to MdmStatus for the MDM record
    const mdmStatus: 'Active' | 'Inactive' =
      updatedStatus === 'inactive' ? 'Inactive' : 'Active';

    // 7. Save the updated MenuItem via MDM document put
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...existingDetails,
          name: updatedName,
          status: mdmStatus,
          updatedAt: now,
          cafeFlow: {
            ...existingCafeFlow,
            category: updatedCategory,
            price: updatedPrice,
            stockItemId: updatedStockItemId,
            status: updatedStatus,
            updatedAt: now,
          },
        },
      },
      expectedVersion: doc.version,
    });

    // 8. Return the updated fields
    return {
      menuItemId: input.menuItemId,
      name: updatedName,
      category: updatedCategory,
      price: updatedPrice,
      stockItemId: updatedStockItemId ?? undefined,
      status: updatedStatus,
      updatedAt: now,
    };
  });
}
