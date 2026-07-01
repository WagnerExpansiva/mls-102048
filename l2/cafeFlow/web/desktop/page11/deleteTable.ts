/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/deleteTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowDeleteTableBase } from '/_102048_/l2/cafeFlow/web/shared/deleteTable.js';

@customElement('cafe-flow--web--desktop--page11--delete-table-102048')
export class CafeFlowDesktopPage11DeleteTablePage extends CafeFlowDeleteTableBase {
  render(): ReturnType<CafeFlowDeleteTableBase['render']> {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['deleteTable.section.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['deleteTable.organism.title'] ?? ''}
            </h2>

            <div class="space-y-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${this.msg['deleteTable.intention.commandForm.title'] ?? ''}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="deleteTable-tableId">
                    ${this.msg['deleteTable.field.tableId'] ?? ''}
                  </label>
                  <input
                    id="deleteTable-tableId"
                    type="text"
                    .value="${this.deleteTableTableId}"
                    @input="${(e: Event) => this.handleDeleteTableTableIdChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="deleteTable-tableNumber">
                    ${this.msg['deleteTable.field.tableNumber'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="deleteTable-tableNumber"
                    type="text"
                    .value="${this.deleteTableTableNumber}"
                    @input="${(e: Event) => this.handleDeleteTableTableNumberChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="deleteTable-capacity">
                    ${this.msg['deleteTable.field.capacity'] ?? ''}
                  </label>
                  <input
                    id="deleteTable-capacity"
                    type="number"
                    .value="${this.deleteTableCapacity}"
                    @input="${(e: Event) => this.handleDeleteTableCapacityChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="deleteTable-status">
                    ${this.msg['deleteTable.field.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="deleteTable-status"
                    .value="${this.deleteTableStatus}"
                    @change="${(e: Event) => this.handleDeleteTableStatusChange(e)}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected="${this.deleteTableStatus === ''}"></option>
                    <option value="active" ?selected="${this.deleteTableStatus === 'active'}">active</option>
                    <option value="inactive" ?selected="${this.deleteTableStatus === 'inactive'}">inactive</option>
                  </select>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${this.deleteTableState === 'loading'}"
                  @click="${(e: Event) => this.handleDeleteTableClick(e)}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                >
                  ${this.deleteTableState === 'loading' ? '...' : (this.msg['deleteTable.action.submit'] ?? '')}
                </button>
                ${this.deleteTableState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                ${this.deleteTableState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
