/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/updateTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowUpdateTableBase } from '/_102048_/l2/cafeFlow/web/shared/updateTable.js';

@customElement('cafe-flow--web--desktop--page11--update-table-102048')
export class CafeFlowDesktopPage11UpdateTablePage extends CafeFlowUpdateTableBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${this.msg['updateTable.section.editTable.title']}
          </h1>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['updateTable.organism.updateTableForm.title']}
            </h2>

            <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="updateTable-tableNumber">
                  ${this.msg['updateTable.field.tableNumber.label']}
                  <span class="text-red-500">*</span>
                </label>
                <input
                  id="updateTable-tableNumber"
                  type="text"
                  .value=${this.updateTableTableNumber}
                  @input=${this.handleUpdateTableTableNumberChange}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ?required=${true}
                />
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="updateTable-capacity">
                  ${this.msg['updateTable.field.capacity.label']}
                </label>
                <input
                  id="updateTable-capacity"
                  type="number"
                  .value=${this.updateTableCapacity}
                  @input=${this.handleUpdateTableCapacityChange}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="updateTable-status">
                  ${this.msg['updateTable.field.status.label']}
                  <span class="text-red-500">*</span>
                </label>
                <select
                  id="updateTable-status"
                  .value=${this.updateTableStatus}
                  @change=${this.handleUpdateTableStatusChange}
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ?required=${true}
                >
                  <option value="" ?selected=${this.updateTableStatus === ''}></option>
                  <option value="active" ?selected=${this.updateTableStatus === 'active'}>active</option>
                  <option value="inactive" ?selected=${this.updateTableStatus === 'inactive'}>inactive</option>
                </select>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  @click=${this.handleUpdateTableClick}
                  ?disabled=${this.updateTableState === 'loading'}
                  class="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${this.updateTableState === 'loading' ? '...' : this.msg['updateTable.action.updateTable.submit.label']}
                </button>
                ${this.updateTableState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.updateTableState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">!</span>` : null}
              </div>
            </form>
          </section>
        </div>
      </div>
    `;
  }
}
