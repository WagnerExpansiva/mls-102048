/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/adjustStockLevel.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowAdjustStockLevelBase } from '/_102048_/l2/cafeFlow/web/shared/adjustStockLevel.js';

@customElement('cafe-flow--web--desktop--page11--adjust-stock-level-102048')
export class CafeFlowDesktopPage11AdjustStockLevelPage extends CafeFlowAdjustStockLevelBase {
  render() {
    const sectionTitle = this.msg['adjustStockLevel.section.title'] ?? '';
    const organismTitle = this.msg['adjustStockLevel.organism.title'] ?? '';
    const intentTitle = this.msg['adjustStockLevel.intent.commandForm.title'] ?? '';
    const currentQuantityLabel = this.msg['adjustStockLevel.field.currentQuantity'] ?? '';
    const statusLabel = this.msg['adjustStockLevel.field.status'] ?? '';
    const submitLabel = this.msg['adjustStockLevel.action.submit'] ?? '';
    const isLoading = this.adjustStockLevelState === 'loading';

    const statusOptions: Array<{ value: string; label: string }> = [
      { value: 'sufficient', label: 'sufficient' },
      { value: 'low', label: 'low' },
      { value: 'depleted', label: 'depleted' },
    ];

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">${sectionTitle}</h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">${organismTitle}</h2>

            <div class="space-y-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">${intentTitle}</h3>

              <form class="space-y-4" @submit=${(e: Event) => this.handleAdjustStockLevelClick(e)}>
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="adjustStockLevel-currentQuantity">
                    ${currentQuantityLabel}
                  </label>
                  <input
                    id="adjustStockLevel-currentQuantity"
                    type="number"
                    .value=${this.adjustStockLevelCurrentQuantity}
                    @input=${(e: Event) => this.handleAdjustStockLevelCurrentQuantityChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ?disabled=${isLoading}
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="adjustStockLevel-status">
                    ${statusLabel}
                  </label>
                  <select
                    id="adjustStockLevel-status"
                    .value=${this.adjustStockLevelStatus}
                    @change=${(e: Event) => this.handleAdjustStockLevelStatusChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ?disabled=${isLoading}
                  >
                    <option value="" ?selected=${this.adjustStockLevelStatus === ''}></option>
                    ${statusOptions.map(
                      (opt) => html`
                        <option value=${opt.value} ?selected=${this.adjustStockLevelStatus === opt.value}>
                          ${opt.label}
                        </option>
                      `,
                    )}
                  </select>
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    ?disabled=${isLoading}
                  >
                    ${isLoading ? '...' : submitLabel}
                  </button>
                  ${this.adjustStockLevelState === 'success'
                    ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                    : null}
                  ${this.adjustStockLevelState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">!</span>`
                    : null}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
