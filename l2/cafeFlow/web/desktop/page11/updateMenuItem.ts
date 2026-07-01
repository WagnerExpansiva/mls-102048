/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowUpdateMenuItemBase } from '/_102048_/l2/cafeFlow/web/shared/updateMenuItem.js';

@customElement('cafe-flow--web--desktop--page11--update-menu-item-102048')
export class CafeFlowDesktopPage11UpdateMenuItemPage extends CafeFlowUpdateMenuItemBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
            ${this.msg['updateMenuItem.section.title']}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
              ${this.msg['updateMenuItem.organism.title']}
            </h2>

            <form
              @submit=${(e: Event) => this.handleUpdateMenuItemClick(e)}
              class="space-y-4"
            >
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ${this.msg['updateMenuItem.field.name']}
                </label>
                <input
                  type="text"
                  .value=${this.updateMenuItemName}
                  @input=${(e: Event) => this.handleUpdateMenuItemNameChange(e)}
                  class="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ${this.msg['updateMenuItem.field.price']}
                </label>
                <input
                  type="number"
                  step="0.01"
                  .value=${this.updateMenuItemPrice}
                  @input=${(e: Event) => this.handleUpdateMenuItemPriceChange(e)}
                  class="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ${this.msg['updateMenuItem.field.stockItemId']}
                </label>
                <input
                  type="text"
                  .value=${this.updateMenuItemStockItemId}
                  @input=${(e: Event) => this.handleUpdateMenuItemStockItemIdChange(e)}
                  class="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ${this.msg['updateMenuItem.field.status']}
                </label>
                <select
                  .value=${this.updateMenuItemStatus}
                  @change=${(e: Event) => this.handleUpdateMenuItemStatusChange(e)}
                  class="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value=""></option>
                  <option value="active" ?selected=${this.updateMenuItemStatus === 'active'}>active</option>
                  <option value="inactive" ?selected=${this.updateMenuItemStatus === 'inactive'}>inactive</option>
                </select>
              </div>

              <div class="flex justify-end pt-2">
                <button
                  type="submit"
                  ?disabled=${this.updateMenuItemState === 'loading'}
                  class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition-colors"
                >
                  ${this.updateMenuItemState === 'loading' ? '...' : this.msg['updateMenuItem.action.submit']}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    `;
  }
}
