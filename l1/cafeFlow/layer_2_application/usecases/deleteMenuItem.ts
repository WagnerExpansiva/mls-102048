/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderItemRepository } from '/_102048_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { OrderItem } from '/_102048_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

export interface DeleteMenuItemInput {
  menuItemId: string;
}

export interface DeleteMenuItemOutput {
  menuItemId: string;
  status: string;
  reason?: string;
}

export async function deleteMenuItem(
  ctx: RequestContext,
  input: DeleteMenuItemInput,
): Promise<DeleteMenuItemOutput> {
  // 1. Read the MenuItem from the MDM store to confirm it exists
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.menuItemId });

  // 2. If MenuItem not found, return status 'not_found'
  if (!doc) {
    return { menuItemId: input.menuItemId, status: 'not_found' };
  }

  const orderItems = resolveRepository<IOrderItemRepository>(ctx, 'OrderItem');

  return ctx.data.runInTransaction(async (tx) => {
    // 3. Query the OrderItem port for any OrderItems whose menuItemId matches the target
    const referencingItems: OrderItem[] = await orderItems.list({
      menuItemId: input.menuItemId,
    });

    // 4. Apply stockConsumptionRule: if there are OrderItems referencing this MenuItem,
    //    block deletion (all existing OrderItems are considered non-terminal)
    if (referencingItems.length > 0) {
      const orderIds = [
        ...new Set(referencingItems.map((item) => item.orderId)),
      ];
      return {
        menuItemId: input.menuItemId,
        status: 'blocked',
        reason: `MenuItem is referenced by ${referencingItems.length} OrderItem(s) in order(s): ${orderIds.join(', ')}`,
      };
    }

    // 5. No blocking OrderItems — delete the MenuItem from the MDM store
    await tx.mdmDocument.delete({ mdmId: input.menuItemId });

    // 6. Return success
    return { menuItemId: input.menuItemId, status: 'deleted' };
  });
}
