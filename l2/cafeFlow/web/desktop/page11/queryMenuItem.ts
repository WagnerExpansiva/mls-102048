/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/queryMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowQueryMenuItemBase } from '/_102048_/l2/cafeFlow/web/shared/queryMenuItem.js';
import type { CafeFlowQueryMenuItemOutputItem } from '/_102048_/l2/cafeFlow/web/contracts/queryMenuItem.js';

@customElement('cafe-flow--web--desktop--page11--query-menu-item-102048')
export class CafeFlowDesktopPage11QueryMenuItemPage extends CafeFlowQueryMenuItemBase {
  render() {
    const m = this.msg;
    const data: CafeFlowQueryMenuItemOutputItem[] = this.queryMenuItemData ?? [];
    const loading = this.queryMenuItemState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['section.consultarItensCardapio.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['organism.queryMenuItem.title'] ?? ''}
            </h2>

            <div class="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['intention.queryMenuItem.list.title'] ?? ''}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.menuItemId.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value=${this.queryMenuItemMenuItemId}
                    @input=${this.handleQueryMenuItemMenuItemIdChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.name.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value=${this.queryMenuItemName}
                    @input=${this.handleQueryMenuItemNameChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.category.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value=${this.queryMenuItemCategory}
                    @input=${this.handleQueryMenuItemCategoryChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.stockItemId.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value=${this.queryMenuItemStockItemId}
                    @input=${this.handleQueryMenuItemStockItemIdChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.status.label'] ?? ''}</span>
                  <select
                    .value=${this.queryMenuItemStatus}
                    @change=${this.handleQueryMenuItemStatusChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">—</option>
                    <option value="active" ?selected=${this.queryMenuItemStatus === 'active'}>active</option>
                    <option value="inactive" ?selected=${this.queryMenuItemStatus === 'inactive'}>inactive</option>
                  </select>
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['field.createdAt.label'] ?? ''}</span>
                  <input
                    type="date"
                    .value=${this.queryMenuItemCreatedAt}
                    @input=${this.handleQueryMenuItemCreatedAtChange}
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              <div class="flex justify-end">
                <button
                  type="button"
                  ?disabled=${loading}
                  @click=${this.handleQueryMenuItemClick}
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  ${loading ? '...' : (m['action.queryMenuItem.label'] ?? '')}
                </button>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-sm text-left border border-slate-200 dark:border-slate-800 rounded-md">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <th class="px-3 py-2 font-medium">${m['field.menuItemId.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.name.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.category.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.price.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.stockItemId.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.status.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.createdAt.label'] ?? ''}</th>
                      <th class="px-3 py-2 font-medium">${m['field.updatedAt.label'] ?? ''}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    ${data.length === 0
                      ? html`<tr>
                          <td colspan="8" class="px-3 py-6 text-center text-slate-400 dark:text-slate-500">
                            ${m['intention.queryMenuItem.list.empty'] ?? ''}
                          </td>
                        </tr>`
                      : data.map((item: CafeFlowQueryMenuItemOutputItem) => html`
                          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.menuItemId}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.name}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.category}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.price}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.stockItemId}</td>
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
