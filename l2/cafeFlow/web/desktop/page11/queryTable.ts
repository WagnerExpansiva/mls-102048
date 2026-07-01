/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowQueryTableBase } from '/_102048_/l2/cafeFlow/web/shared/queryTable.js';
import type { CafeFlowQueryTableOutputItem } from '/_102048_/l2/cafeFlow/web/contracts/queryTable.js';

@customElement('cafe-flow--web--desktop--page11--query-table-102048')
export class CafeFlowDesktopPage11QueryTablePage extends CafeFlowQueryTableBase {
  render(): TemplateResult {
    const m = this.msg;
    const rows: CafeFlowQueryTableOutputItem[] = this.queryTableData ?? [];
    const loading: boolean = this.queryTableState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
              ${m['queryTable.section.title'] ?? ''}
            </h1>
          </div>

          <!-- Section: Query Table -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-medium text-slate-700 dark:text-slate-200">
                ${m['queryTable.organism.title'] ?? ''}
              </h2>
            </div>

            <div class="p-5 space-y-5">
              <!-- Intention title -->
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['queryTable.intent.list.title'] ?? ''}
              </h3>

              <!-- Filters -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryTable.filter.tableId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.queryTableTableId}"
                    @input="${(e: Event) => this.handleQueryTableTableIdChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryTable.filter.status'] ?? ''}
                  </label>
                  <select
                    .value="${this.queryTableStatus}"
                    @change="${(e: Event) => this.handleQueryTableStatusChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value=""></option>
                    <option value="active" ?selected="${this.queryTableStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.queryTableStatus === 'inactive'}">inactive</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryTable.filter.createdAt'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value="${this.queryTableCreatedAt}"
                    @input="${(e: Event) => this.handleQueryTableCreatedAtChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryTable.filter.updatedAt'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value="${this.queryTableUpdatedAt}"
                    @input="${(e: Event) => this.handleQueryTableUpdatedAtChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <!-- Toolbar -->
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  ?disabled="${loading}"
                  @click="${(e: Event) => this.handleQueryTableClick(e)}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  ${loading ? '...' : (m['queryTable.action.query'] ?? '')}
                </button>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-800">
                <table class="w-full text-sm">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.tableId'] ?? ''}</th>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.tableNumber'] ?? ''}</th>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.capacity'] ?? ''}</th>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.status'] ?? ''}</th>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.createdAt'] ?? ''}</th>
                      <th class="px-4 py-2 text-left font-medium">${m['queryTable.field.updatedAt'] ?? ''}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    ${rows.length === 0
                      ? html`
                        <tr>
                          <td colspan="6" class="px-4 py-8 text-center text-slate-400 dark:text-slate-500">
                            ${loading ? '...' : '—'}
                          </td>
                        </tr>
                      `
                      : rows.map((row: CafeFlowQueryTableOutputItem) => html`
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.tableId}</td>
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.tableNumber}</td>
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.capacity}</td>
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.status}</td>
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.createdAt}</td>
                          <td class="px-4 py-2 text-slate-700 dark:text-slate-200">${row.updatedAt}</td>
                        </tr>
                      `)}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
