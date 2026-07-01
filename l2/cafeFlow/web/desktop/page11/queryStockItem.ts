/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowQueryStockItemBase } from '/_102048_/l2/cafeFlow/web/shared/queryStockItem.js';

@customElement('cafe-flow--web--desktop--page11--query-stock-item-102048')
export class CafeFlowDesktopPage11QueryStockItemPage extends CafeFlowQueryStockItemBase {
  render() {
    const m = this.msg;
    const data = this.queryStockItemData ?? [];
    const loading = this.queryStockItemState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${m['queryStockItem.section.main.title'] ?? ''}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['queryStockItem.organism.list.title'] ?? ''}
            </h2>

            <div class="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['queryStockItem.intention.list.title'] ?? ''}
              </h3>

              <!-- Filters -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryStockItem.filter.stockItemId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.queryStockItemStockItemId}"
                    @input="${this.handleQueryStockItemStockItemIdChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryStockItem.filter.name'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.queryStockItemName}"
                    @input="${this.handleQueryStockItemNameChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryStockItem.filter.status'] ?? ''}
                  </label>
                  <select
                    .value="${this.queryStockItemStatus}"
                    @change="${this.handleQueryStockItemStatusChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value=""></option>
                    <option value="active" ?selected="${this.queryStockItemStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.queryStockItemStatus === 'inactive'}">inactive</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryStockItem.filter.createdAt'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value="${this.queryStockItemCreatedAt}"
                    @input="${this.handleQueryStockItemCreatedAtChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                    ${m['queryStockItem.filter.updatedAt'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value="${this.queryStockItemUpdatedAt}"
                    @input="${this.handleQueryStockItemUpdatedAtChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <!-- Toolbar -->
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  ?disabled="${loading}"
                  @click="${this.handleQueryStockItemClick}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  ${loading ? '...' : (m['queryStockItem.action.query'] ?? '')}
                </button>
              </div>

              <!-- Results Table -->
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-left border border-slate-200 dark:border-slate-800 rounded-md">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.stockItemId'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.name'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.unitOfMeasure'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.minimumStockLevel'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.status'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.createdAt'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['queryStockItem.field.updatedAt'] ?? ''}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    ${data.length === 0
                      ? html`<tr>
                          <td colspan="7" class="px-3 py-6 text-center text-slate-400 dark:text-slate-500">
                            ${loading ? '...' : ''}
                          </td>
                        </tr>`
                      : data.map((item) => html`
                          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.stockItemId}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.name}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.unitOfMeasure}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.minimumStockLevel}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.status}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.createdAt}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.updatedAt}</td>
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
