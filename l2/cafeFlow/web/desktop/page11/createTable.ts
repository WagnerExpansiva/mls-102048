/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/createTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowCreateTableBase } from '/_102048_/l2/cafeFlow/web/shared/createTable.js';

@customElement('cafe-flow--web--desktop--page11--create-table-102048')
export class CafeFlowDesktopPage11CreateTablePage extends CafeFlowCreateTableBase {

  render() {
    const m = this.msg;
    const isLoading = this.createTableState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              ${m['createTable.section.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-medium text-slate-700 dark:text-slate-200">
                ${m['createTable.organism.title'] ?? ''}
              </h2>
            </div>

            <div class="px-5 py-5">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
                ${m['createTable.intention.form.title'] ?? ''}
              </h3>

              <form class="space-y-4" @submit=${(e: Event) => { e.preventDefault(); this.handleCreateTableClick(e); }}>
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createTable-tableNumber">
                    ${m['createTable.field.tableNumber'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="createTable-tableNumber"
                    type="text"
                    .value=${this.createTableTableNumber}
                    @input=${(e: Event) => this.handleCreateTableTableNumberChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ?disabled=${isLoading}
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createTable-capacity">
                    ${m['createTable.field.capacity'] ?? ''}
                  </label>
                  <input
                    id="createTable-capacity"
                    type="number"
                    .value=${this.createTableCapacity}
                    @input=${(e: Event) => this.handleCreateTableCapacityChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ?disabled=${isLoading}
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="createTable-status">
                    ${m['createTable.field.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="createTable-status"
                    .value=${this.createTableStatus}
                    @change=${(e: Event) => this.handleCreateTableStatusChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ?disabled=${isLoading}
                  >
                    <option value="">${'—'}</option>
                    <option value="active">${m['createTable.field.status.active'] ?? 'Ativa'}</option>
                    <option value="inactive">${m['createTable.field.status.inactive'] ?? 'Inativa'}</option>
                  </select>
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${isLoading}
                  >
                    ${isLoading ? '...' : (m['createTable.action.submit'] ?? '')}
                  </button>

                  ${this.createTableState === 'success' ? html`
                    <span class="text-sm text-green-600 dark:text-green-400">✓</span>
                  ` : null}
                  ${this.createTableState === 'error' ? html`
                    <span class="text-sm text-red-600 dark:text-red-400">✗</span>
                  ` : null}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
