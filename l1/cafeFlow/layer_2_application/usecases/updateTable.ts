/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/updateTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateTableInput {
  tableId: string;
  tableNumber: string;
  capacity?: number;
  status: string;
}

export interface UpdateTableOutput {
  tableId: string;
  status: string;
  updatedAt: string;
}

const ALLOWED_STATUSES = ['active', 'inactive'] as const;

export async function updateTable(ctx: RequestContext, input: UpdateTableInput): Promise<UpdateTableOutput> {
  // Validate status enum
  if (!ALLOWED_STATUSES.includes(input.status as (typeof ALLOWED_STATUSES)[number])) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status "${input.status}". Must be one of: ${ALLOWED_STATUSES.join(', ')}.`,
      400,
      { field: 'status', allowed: ALLOWED_STATUSES },
    );
  }

  return ctx.data.runInTransaction(async (tx) => {
    // Load the existing Table master-data document
    const doc = await tx.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError('NOT_FOUND', `Table not found: ${input.tableId}`, 404, { tableId: input.tableId });
    }

    const now = ctx.clock.nowIso();

    // Map domain status to MdmStatus
    const mdmStatus = input.status === 'inactive' ? 'Inactive' : 'Active';

    // Preserve existing details, apply incoming changes
    const existingDetails = doc.details as Record<string, unknown>;
    const existingCafeFlow = (existingDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

    const updatedDetails = {
      ...existingDetails,
      name: input.tableNumber,
      status: mdmStatus,
      updatedAt: now,
      cafeFlow: {
        ...existingCafeFlow,
        tableNumber: input.tableNumber,
        capacity: input.capacity ?? existingCafeFlow.capacity ?? null,
        status: input.status,
      },
    };

    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: updatedDetails,
      },
      expectedVersion: doc.version,
    });

    return {
      tableId: input.tableId,
      status: input.status,
      updatedAt: now,
    };
  });
}
