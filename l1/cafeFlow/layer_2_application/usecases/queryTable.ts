/// <mls fileReference="_102048_/l1/cafeFlow/layer_2_application/usecases/queryTable.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

// ── Input / Output types ──────────────────────────────────────────────

export interface QueryTableByIdInput {
  tableId: string;
}

export interface TableView {
  tableId: string;
  tableNumber: string;
  capacity?: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueryTablesInput {
  tableNumber?: string;
  status?: string;
}

export interface TableViewList {
  items: TableView[];
  total: number;
}

// ── Helpers ───────────────────────────────────────────────────────────

/**
 * Project a raw MDM document record into the flat `TableView` shape.
 * Table master-data lives in MDM (subtype `AssetGeneric`); module-specific
 * columns (tableNumber, capacity) are stored under `details.cafeFlow`.
 */
function projectTable(doc: {
  mdmId: string;
  details: Record<string, unknown> & {
    name?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}): TableView {
  const details = doc.details ?? {};
  const cafeFlow = (details.cafeFlow as Record<string, unknown> | undefined) ?? {};

  return {
    tableId: doc.mdmId,
    tableNumber:
      (cafeFlow.tableNumber as string | undefined) ??
      (details.name as string | undefined) ??
      '',
    capacity: cafeFlow.capacity as number | undefined,
    status:
      (details.status as string | undefined)?.toLowerCase() ?? 'active',
    createdAt: (details.createdAt as string | undefined) ?? '',
    updatedAt: (details.updatedAt as string | undefined) ?? '',
  };
}

// ── Use cases ─────────────────────────────────────────────────────────

/**
 * Retrieve a single Table by its MDM id.
 * Returns `null` when the record does not exist (no AppError — the caller
 * decides whether a missing table is an error).
 */
export async function queryTableById(
  ctx: RequestContext,
  input: QueryTableByIdInput,
): Promise<TableView | null> {
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
  if (!doc) {
    return null;
  }
  return projectTable(doc);
}

/**
 * List Table master-data records with optional filters.
 * Tables are MDM entities with subtype `AssetGeneric`; we resolve them
 * through the shared MDM entity index, then fetch the full documents.
 */
export async function queryTables(
  ctx: RequestContext,
  input: QueryTablesInput,
): Promise<TableViewList> {
  // 1. Find all table entities from the MDM entity index.
  const indexRecords = await ctx.data.mdmEntityIndex.findMany({
    where: { subtype: 'AssetGeneric' } as Record<string, unknown>,
  });

  const mdmIds = indexRecords.map((r) => r.mdmId);
  if (mdmIds.length === 0) {
    return { items: [], total: 0 };
  }

  // 2. Fetch the full MDM documents for those ids.
  const docs = await ctx.data.mdmDocument.getMany({ mdmIds });
  let views: TableView[] = docs
    .filter((d) => d !== null)
    .map((d) => projectTable(d as Parameters<typeof projectTable>[0]));

  // 3. Apply optional in-memory filters.
  if (input.tableNumber) {
    const filter = input.tableNumber.toLowerCase();
    views = views.filter((v) =>
      v.tableNumber.toLowerCase().includes(filter),
    );
  }

  if (input.status) {
    const filter = input.status.toLowerCase();
    views = views.filter((v) => v.status === filter);
  }

  return { items: views, total: views.length };
}
