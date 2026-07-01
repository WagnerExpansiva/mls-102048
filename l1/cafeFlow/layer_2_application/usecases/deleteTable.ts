/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteTableInput {
  tableId: string;
}

export interface DeleteTableOutput {
  tableId: string;
  deleted: boolean;
}

export async function deleteTable(ctx: RequestContext, input: DeleteTableInput): Promise<DeleteTableOutput> {
  if (!input.tableId || input.tableId.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'tableId is required and must be non-empty.', 400, { field: 'tableId' });
  }

  return ctx.data.runInTransaction(async () => {
    // Table is an MDM master-data entity — read it by id via the shared runtime.
    const doc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError('NOT_FOUND', `Table not found: ${input.tableId}`, 404, { tableId: input.tableId });
    }

    // Guard against double-delete: if the record is already blocked/inactive we still allow
    // the physical delete, but we verify the record exists (checked above). MDM has no
    // "deleted" status — absence means deleted.

    await ctx.data.mdmDocument.delete({ mdmId: input.tableId });

    return {
      tableId: input.tableId,
      deleted: true,
    };
  });
}
