/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumStockLevel: number;
  status: string;
}

export interface CreateStockItemOutput {
  stockItemId: string;
  status: string;
}

export async function createStockItem(
  ctx: RequestContext,
  input: CreateStockItemInput,
): Promise<CreateStockItemOutput> {
  // Step 1: Validate input fields
  if (!input.name || input.name.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required and must be non-empty.', 400, { field: 'name' });
  }
  if (!input.unitOfMeasure || input.unitOfMeasure.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'unitOfMeasure is required and must be non-empty.', 400, { field: 'unitOfMeasure' });
  }
  if (typeof input.minimumStockLevel !== 'number' || input.minimumStockLevel < 0) {
    throw new AppError('VALIDATION_ERROR', 'minimumStockLevel must be a non-negative number.', 400, { field: 'minimumStockLevel' });
  }
  if (input.status !== 'active' && input.status !== 'inactive') {
    throw new AppError('VALIDATION_ERROR', "status must be 'active' or 'inactive'.", 400, { field: 'status' });
  }

  // Step 2: Apply lowStockAlertRule — if minimumStockLevel > 0, the item is eligible
  // for low-stock alerts so future inventory movements below this threshold trigger notifications.
  const lowStockAlertEligible = input.minimumStockLevel > 0;

  // Step 3: Generate id and timestamps
  const now = ctx.clock.nowIso();
  const stockItemId = ctx.idGenerator.newId();

  // Step 4: Persist the new StockItem as an MDM master-data document inside a single transaction.
  // StockItem is master data (no local table); write through the shared 102034 MDM store.
  await ctx.data.runInTransaction(async () => {
    await ctx.data.mdmDocument.put({
      record: {
        mdmId: stockItemId,
        version: 1,
        details: {
          subtype: 'Product',
          name: input.name,
          status: input.status === 'active' ? 'Active' : 'Inactive',
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: {
            unitOfMeasure: input.unitOfMeasure,
            minimumStockLevel: input.minimumStockLevel,
            lowStockAlertEligible,
            status: input.status,
          },
        },
      },
    });
  });

  // Step 5: Return the generated id and confirmed status
  return {
    stockItemId,
    status: input.status,
  };
}
