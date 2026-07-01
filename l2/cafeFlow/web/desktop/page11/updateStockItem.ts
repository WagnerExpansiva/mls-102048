/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowUpdateStockItemBase } from '/_102048_/l2/cafeFlow/web/shared/updateStockItem.js';

@customElement('cafe-flow--web--desktop--page11--update-stock-item-102048')
export class CafeFlowDesktopPage11UpdateStockItemPage extends CafeFlowUpdateStockItemBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${this.msg['section.editStockItem.title'] ?? ''}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['organism.updateStockItem.title'] ?? ''}
            </h2>

            <form class="space-y-4" @submit=${(e: Event) => this.handleUpdateStockItemClick(e)}>
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="field-name">
                  ${this.msg['field.name.label'] ?? ''}
                </label>
                <input
                  id="field-name"
                  type="text"
                  .value=${this.updateStockItemName}
                  @input=${(e: Event) => this.handleUpdateStockItemNameChange(e)}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="field-unit-of-measure">
                  ${this.msg['field.unitOfMeasure.label'] ?? ''}
                </label>
                <input
                  id="field-unit-of-measure"
                  type="text"
                  .value=${this.updateStockItemUnitOfMeasure}
                  @input=${(e: Event) => this.handleUpdateStockItemUnitOfMeasureChange(e)}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="field-minimum-stock-level">
                  ${this.msg['field.minimumStockLevel.label'] ?? ''}
                </label>
                <input
                  id="field-minimum-stock-level"
                  type="number"
                  .value=${this.updateStockItemMinimumStockLevel}
                  @input=${(e: Event) => this.handleUpdateStockItemMinimumStockLevelChange(e)}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="field-status">
                  ${this.msg['field.status.label'] ?? ''}
                </label>
                <select
                  id="field-status"
                  .value=${this.updateStockItemStatus}
                  @change=${(e: Event) => this.handleUpdateStockItemStatusChange(e)}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" ?selected=${this.updateStockItemStatus === ''}></option>
                  <option value="active" ?selected=${this.updateStockItemStatus === 'active'}>active</option>
                  <option value="inactive" ?selected=${this.updateStockItemStatus === 'inactive'}>inactive</option>
                </select>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  ?disabled=${this.updateStockItemState === 'loading'}
                  class="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${this.updateStockItemState === 'loading' ? '...' : (this.msg['action.updateStockItem.label'] ?? '')}
                </button>
                ${this.updateStockItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.updateStockItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">!</span>` : null}
              </div>
            </form>
          </section>
        </div>
      </div>
    `;
  }
}
