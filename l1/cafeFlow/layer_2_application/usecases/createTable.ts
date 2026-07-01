/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/createTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateTableInput {
  tableNumber: string;
  capacity?: number;
  status: string;
}

export interface CreateTableOutput {
  tableId: string;
  status: string;
}

export async function createTable(ctx: RequestContext, input: CreateTableInput): Promise<CreateTableOutput> {
  // --- Validate input ---
  if (!input.tableNumber || input.tableNumber.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'tableNumber is required and must be non-empty.',
      400,
      { field: 'tableNumber' },
    );
  }

  if (input.status !== 'active' && input.status !== 'inactive') {
    throw new AppError(
      'VALIDATION_ERROR',
      `status must be 'active' or 'inactive', received: ${input.status}`,
      400,
      { field: 'status', value: input.status },
    );
  }

  if (input.capacity !== undefined && input.capacity !== null && input.capacity <= 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'capacity must be a positive number.',
      400,
      { field: 'capacity', value: input.capacity },
    );
  }

  // --- Generate server-owned fields ---
  const now = ctx.clock.nowIso();
  const tableId = ctx.idGenerator.newId();
  const mdmStatus = input.status === 'active' ? 'Active' : 'Inactive';

  // --- Persist the Table master-data document in a single transaction ---
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        mdmId: tableId,
        version: 1,
        details: {
          subtype: 'AssetGeneric',
          name: input.tableNumber,
          status: mdmStatus,
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: {
            tableNumber: input.tableNumber,
            capacity: input.capacity ?? null,
            status: input.status,
          },
        },
      },
    });
  });

  return {
    tableId,
    status: input.status,
  };
}
