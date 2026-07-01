/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowCreateMenuItemBase } from '/_102048_/l2/cafeFlow/web/shared/createMenuItem.js';

@customElement('cafe-flow--web--desktop--page11--create-menu-item-102048')
export class CafeFlowDesktopPage11CreateMenuItemPage extends CafeFlowCreateMenuItemBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${this.msg['createMenuItem.section.title'] ?? ''}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['createMenuItem.organism.title'] ?? ''}
            </h2>

            <div class="space-y-4">
              <h3 class="text-sm font-medium text-slate-500 dark:text-slate-400">
                ${this.msg['createMenuItem.intent.commandForm.title'] ?? ''}
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createMenuItem-name">
                    ${this.msg['menuItem.field.name'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="createMenuItem-name"
                    type="text"
                    .value="${this.createMenuItemName}"
                    @input="${(e: Event) => this.handleCreateMenuItemNameChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createMenuItem-category">
                    ${this.msg['menuItem.field.category'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="createMenuItem-category"
                    type="text"
                    .value="${this.createMenuItemCategory}"
                    @input="${(e: Event) => this.handleCreateMenuItemCategoryChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createMenuItem-price">
                    ${this.msg['menuItem.field.price'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="createMenuItem-price"
                    type="number"
                    step="0.01"
                    min="0"
                    .value="${this.createMenuItemPrice}"
                    @input="${(e: Event) => this.handleCreateMenuItemPriceChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createMenuItem-status">
                    ${this.msg['menuItem.field.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="createMenuItem-status"
                    .value="${this.createMenuItemStatus}"
                    @change="${(e: Event) => this.handleCreateMenuItemStatusChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected="${this.createMenuItemStatus === ''}"></option>
                    <option value="active" ?selected="${this.createMenuItemStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.createMenuItemStatus === 'inactive'}">inactive</option>
                  </select>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${this.createMenuItemState === 'loading'}"
                  @click="${(e: Event) => this.handleCreateMenuItemClick(e)}"
                  class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${this.createMenuItemState === 'loading' ? '...' : (this.msg['createMenuItem.action.submit'] ?? '')}
                </button>
                ${this.createMenuItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.createMenuItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
