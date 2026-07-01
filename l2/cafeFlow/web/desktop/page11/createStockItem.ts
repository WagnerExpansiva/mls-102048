/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowCreateStockItemBase } from '/_102048_/l2/cafeFlow/web/shared/createStockItem.js';

@customElement('cafe-flow--web--desktop--page11--create-stock-item-102048')
export class CafeFlowDesktopPage11CreateStockItemPage extends CafeFlowCreateStockItemBase {

  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg["section.createStockItem.title"] ?? ""}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg["createStockItem.section.title"] ?? ""}
            </h2>

            <div class="space-y-4">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${this.msg["createStockItem.form.title"] ?? ""}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="createStockItem-name">
                    ${this.msg["stockItem.field.name"] ?? ""}
                  </label>
                  <input
                    id="createStockItem-name"
                    type="text"
                    .value="${this.createStockItemName}"
                    @input="${this.handleCreateStockItemNameChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="createStockItem-unitOfMeasure">
                    ${this.msg["stockItem.field.unitOfMeasure"] ?? ""}
                  </label>
                  <input
                    id="createStockItem-unitOfMeasure"
                    type="text"
                    .value="${this.createStockItemUnitOfMeasure}"
                    @input="${this.handleCreateStockItemUnitOfMeasureChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="createStockItem-minimumStockLevel">
                    ${this.msg["stockItem.field.minimumStockLevel"] ?? ""}
                  </label>
                  <input
                    id="createStockItem-minimumStockLevel"
                    type="number"
                    .value="${this.createStockItemMinimumStockLevel}"
                    @input="${this.handleCreateStockItemMinimumStockLevelChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="createStockItem-status">
                    ${this.msg["stockItem.field.status"] ?? ""}
                  </label>
                  <select
                    id="createStockItem-status"
                    .value="${this.createStockItemStatus}"
                    @change="${this.handleCreateStockItemStatusChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected="${this.createStockItemStatus === ''}"></option>
                    <option value="active" ?selected="${this.createStockItemStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.createStockItemStatus === 'inactive'}">inactive</option>
                  </select>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${this.createStockItemState === 'loading'}"
                  @click="${this.handleCreateStockItemClick}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  ${this.createStockItemState === 'loading' ? '...' : (this.msg["createStockItem.action.submit"] ?? "")}
                </button>
                ${this.createStockItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.createStockItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">!</span>` : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
