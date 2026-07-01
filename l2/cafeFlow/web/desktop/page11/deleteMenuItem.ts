/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowDeleteMenuItemBase } from '/_102048_/l2/cafeFlow/web/shared/deleteMenuItem.js';

@customElement('cafe-flow--web--desktop--page11--delete-menu-item-102048')
export class CafeFlowDesktopPage11DeleteMenuItemPage extends CafeFlowDeleteMenuItemBase {

  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['deleteMenuItem.section.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['deleteMenuItem.organism.title'] ?? ''}
            </h2>

            <div class="space-y-4">
              <h3 class="text-sm font-medium text-slate-500 dark:text-slate-400">
                ${this.msg['deleteMenuItem.intent.command.title'] ?? ''}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.menuItemId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.deleteMenuItemMenuItemId}"
                    @input="${(e: Event) => this.handleDeleteMenuItemMenuItemIdChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.name'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.deleteMenuItemName}"
                    @input="${(e: Event) => this.handleDeleteMenuItemNameChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.category'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.deleteMenuItemCategory}"
                    @input="${(e: Event) => this.handleDeleteMenuItemCategoryChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.price'] ?? ''}
                  </label>
                  <input
                    type="number"
                    .value="${this.deleteMenuItemPrice}"
                    @input="${(e: Event) => this.handleDeleteMenuItemPriceChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.stockItemId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value="${this.deleteMenuItemStockItemId}"
                    @input="${(e: Event) => this.handleDeleteMenuItemStockItemIdChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${this.msg['deleteMenuItem.field.status'] ?? ''}
                  </label>
                  <select
                    .value="${this.deleteMenuItemStatus}"
                    @change="${(e: Event) => this.handleDeleteMenuItemStatusChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value=""></option>
                    <option value="active" ?selected="${this.deleteMenuItemStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.deleteMenuItemStatus === 'inactive'}">inactive</option>
                  </select>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${this.deleteMenuItemState === 'loading'}"
                  @click="${(e: Event) => this.handleDeleteMenuItemClick(e)}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                >
                  ${this.deleteMenuItemState === 'loading' ? '...' : (this.msg['deleteMenuItem.action.submit'] ?? '')}
                </button>
                ${this.deleteMenuItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.deleteMenuItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✕</span>` : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
