/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateMenuItemInput {
  name: string;
  category: string;
  price: number;
  stockItemId?: string;
  status: string;
}

export interface CreateMenuItemOutput {
  menuItemId: string;
  status: string;
}

export async function createMenuItem(
  ctx: RequestContext,
  input: CreateMenuItemInput,
): Promise<CreateMenuItemOutput> {
  // 1. Validate required input fields: name, category, price, status.
  if (!input.name || input.name.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required.', 400, { field: 'name' });
  }
  if (!input.category || input.category.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'category is required.', 400, { field: 'category' });
  }
  if (input.price === undefined || input.price === null || input.price < 0) {
    throw new AppError('VALIDATION_ERROR', 'price is required and must be a non-negative number.', 400, { field: 'price' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required.', 400, { field: 'status' });
  }

  // 2. Validate status is one of the allowed enum values (active, inactive).
  const allowedStatuses = ['active', 'inactive'];
  if (!allowedStatuses.includes(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `status must be one of: ${allowedStatuses.join(', ')}.`,
      400,
      { field: 'status', value: input.status },
    );
  }

  // 3. If stockItemId is provided, read the StockItem from MDM and verify it exists and is active
  //    (stockConsumptionRule).
  if (input.stockItemId) {
    const stockDoc = await ctx.data.mdmDocument.get({ mdmId: input.stockItemId });
    if (!stockDoc) {
      throw new AppError('NOT_FOUND', `StockItem not found: ${input.stockItemId}`, 404, {
        mdmId: input.stockItemId,
      });
    }
    if (stockDoc.details.status !== 'Active') {
      throw new AppError(
        'VALIDATION_ERROR',
        `stockConsumptionRule: StockItem ${input.stockItemId} is not active.`,
        400,
        { ruleId: 'stockConsumptionRule', stockItemId: input.stockItemId },
      );
    }
  }

  // 4. Generate menuItemId (uuid), createdAt and updatedAt timestamps (server-generated).
  const menuItemId = ctx.idGenerator.newId();
  const now = ctx.clock.nowIso();

  // 5 & 6. Build the MenuItem MDM record and persist it inside a transaction.
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        mdmId: menuItemId,
        version: 1,
        details: {
          mdmId: menuItemId,
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
            category: input.category,
            price: input.price,
            stockItemId: input.stockItemId ?? null,
            status: input.status,
          },
        },
      },
    });
  });

  // 7. Return menuItemId and status.
  return {
    menuItemId,
    status: input.status,
  };
}
