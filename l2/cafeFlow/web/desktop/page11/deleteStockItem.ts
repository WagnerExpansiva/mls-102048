/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowDeleteStockItemBase } from '/_102048_/l2/cafeFlow/web/shared/deleteStockItem.js';

@customElement('cafe-flow--web--desktop--page11--delete-stock-item-102048')
export class CafeFlowDesktopPage11DeleteStockItemPage extends CafeFlowDeleteStockItemBase {
  render() {
    const m = this.msg;
    const isLoading = this.deleteStockItemState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${m['deleteStockItem.page.title'] || ''}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['deleteStockItem.section.main.title'] || ''}
            </h2>

            <div class="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-4">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${m['deleteStockItem.organism.delete.title'] || ''}
              </h3>

              <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  ${m['deleteStockItem.intent.command.title'] || ''}
                </p>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="fld-stockItemId">
                    ${m['deleteStockItem.field.stockItemId.label'] || ''}
                  </label>
                  <input
                    id="fld-stockItemId"
                    type="text"
                    .value=${this.deleteStockItemStockItemId}
                    @input=${this.handleDeleteStockItemStockItemIdChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="fld-name">
                    ${m['deleteStockItem.field.name.label'] || ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="fld-name"
                    type="text"
                    .value=${this.deleteStockItemName}
                    @input=${this.handleDeleteStockItemNameChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="fld-unitOfMeasure">
                    ${m['deleteStockItem.field.unitOfMeasure.label'] || ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="fld-unitOfMeasure"
                    type="text"
                    .value=${this.deleteStockItemUnitOfMeasure}
                    @input=${this.handleDeleteStockItemUnitOfMeasureChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="fld-minimumStockLevel">
                    ${m['deleteStockItem.field.minimumStockLevel.label'] || ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="fld-minimumStockLevel"
                    type="number"
                    .value=${this.deleteStockItemMinimumStockLevel}
                    @input=${this.handleDeleteStockItemMinimumStockLevelChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="fld-status">
                    ${m['deleteStockItem.field.status.label'] || ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="fld-status"
                    .value=${this.deleteStockItemStatus}
                    @change=${this.handleDeleteStockItemStatusChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected=${this.deleteStockItemStatus === ''}></option>
                    <option value="active" ?selected=${this.deleteStockItemStatus === 'active'}>active</option>
                    <option value="inactive" ?selected=${this.deleteStockItemStatus === 'inactive'}>inactive</option>
                  </select>
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    ?disabled=${isLoading}
                    @click=${this.handleDeleteStockItemClick}
                    class="inline-flex items-center px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                  >
                    ${isLoading ? '...' : (m['deleteStockItem.action.delete.label'] || '')}
                  </button>
                  ${this.deleteStockItemState === 'success' ? html`
                    <span class="text-sm text-green-600 dark:text-green-400">✓</span>
                  ` : ''}
                  ${this.deleteStockItemState === 'error' ? html`
                    <span class="text-sm text-red-600 dark:text-red-400">!</span>
                  ` : ''}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
