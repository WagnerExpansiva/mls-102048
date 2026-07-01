/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/shiftLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowShiftLifecycleBase } from '/_102048_/l2/cafeFlow/web/shared/shiftLifecycle.js';

@customElement('cafe-flow--web--desktop--page11--shift-lifecycle-102048')
export class CafeFlowDesktopPage11ShiftLifecyclePage extends CafeFlowShiftLifecycleBase {

  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${this.msg['shiftLifecycle.section.main.title'] ?? ''}
          </h1>

          ${this.renderViewDashboard()}
          ${this.renderViewShiftReport()}
        </div>
      </div>
    `;
  }

  private renderViewDashboard() {
    const m = this.msg;
    const data = this.viewDashboardData ?? [];
    const loading = this.viewDashboardState === 'loading';

    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['shiftLifecycle.organism.viewDashboard.title'] ?? ''}
        </h2>

        <!-- Filters -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.dailyShiftId'] ?? ''}</span>
            <input
              type="text"
              .value="${this.viewDashboardDailyShiftId}"
              @input="${(e: Event) => this.handleViewDashboardDailyShiftIdChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.date'] ?? ''}</span>
            <input
              type="date"
              .value="${this.viewDashboardDate}"
              @input="${(e: Event) => this.handleViewDashboardDateChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.status'] ?? ''}</span>
            <select
              .value="${this.viewDashboardStatus}"
              @change="${(e: Event) => this.handleViewDashboardStatusChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            >
              <option value=""></option>
              <option value="open" ?selected="${this.viewDashboardStatus === 'open'}">open</option>
              <option value="closed" ?selected="${this.viewDashboardStatus === 'closed'}">closed</option>
            </select>
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.createdAt'] ?? ''}</span>
            <input
              type="date"
              .value="${this.viewDashboardCreatedAt}"
              @input="${(e: Event) => this.handleViewDashboardCreatedAtChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.updatedAt'] ?? ''}</span>
            <input
              type="date"
              .value="${this.viewDashboardUpdatedAt}"
              @input="${(e: Event) => this.handleViewDashboardUpdatedAtChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
        </div>

        <!-- Toolbar -->
        <div class="flex items-center gap-2">
          <button
            type="button"
            ?disabled="${loading}"
            @click="${(e: Event) => this.handleViewDashboardClick(e)}"
            class="rounded bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-3 py-1.5 text-sm font-medium text-white"
          >
            ${m['shiftLifecycle.action.viewDashboard'] ?? ''}
          </button>
          ${loading ? html`<span class="text-sm text-slate-500 dark:text-slate-400">Loading…</span>` : ''}
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 text-left text-slate-600 dark:text-slate-300">
                <th class="py-2 px-2">${m['shiftLifecycle.field.dailyShiftId'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.date'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.openTime'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.closeTime'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.status'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.totalSales'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.createdAt'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.updatedAt'] ?? ''}</th>
              </tr>
            </thead>
            <tbody>
              ${data.length === 0
                ? html`<tr><td colspan="8" class="py-4 text-center text-slate-400 dark:text-slate-500">—</td></tr>`
                : data.map((row) => html`
                  <tr class="border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200">
                    <td class="py-2 px-2">${row.dailyShiftId ?? ''}</td>
                    <td class="py-2 px-2">${row.date ?? ''}</td>
                    <td class="py-2 px-2">${row.openTime ?? ''}</td>
                    <td class="py-2 px-2">${row.closeTime ?? ''}</td>
                    <td class="py-2 px-2">${row.status ?? ''}</td>
                    <td class="py-2 px-2">${row.totalSales ?? ''}</td>
                    <td class="py-2 px-2">${row.createdAt ?? ''}</td>
                    <td class="py-2 px-2">${row.updatedAt ?? ''}</td>
                  </tr>
                `)}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  private renderViewShiftReport() {
    const m = this.msg;
    const data = this.viewShiftReportData ?? [];
    const loading = this.viewShiftReportState === 'loading';
    const first = data.length > 0 ? data[0] : null;

    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['shiftLifecycle.organism.viewShiftReport.title'] ?? ''}
        </h2>

        <!-- Filters -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.shiftCloseReportId'] ?? ''}</span>
            <input
              type="text"
              .value="${this.viewShiftReportShiftCloseReportId}"
              @input="${(e: Event) => this.handleViewShiftReportShiftCloseReportIdChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.dailyShiftId'] ?? ''}</span>
            <input
              type="text"
              .value="${this.viewShiftReportDailyShiftId}"
              @input="${(e: Event) => this.handleViewShiftReportDailyShiftIdChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.createdAt'] ?? ''}</span>
            <input
              type="date"
              .value="${this.viewShiftReportCreatedAt}"
              @input="${(e: Event) => this.handleViewShiftReportCreatedAtChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
          <label class="block">
            <span class="text-sm text-slate-600 dark:text-slate-300">${m['shiftLifecycle.field.updatedAt'] ?? ''}</span>
            <input
              type="date"
              .value="${this.viewShiftReportUpdatedAt}"
              @input="${(e: Event) => this.handleViewShiftReportUpdatedAtChange(e)}"
              class="mt-1 w-full rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-800 dark:text-slate-100"
            />
          </label>
        </div>

        <!-- Toolbar -->
        <div class="flex items-center gap-2">
          <button
            type="button"
            ?disabled="${loading}"
            @click="${(e: Event) => this.handleViewShiftReportClick(e)}"
            class="rounded bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-3 py-1.5 text-sm font-medium text-white"
          >
            ${m['shiftLifecycle.action.viewShiftReport'] ?? ''}
          </button>
          ${loading ? html`<span class="text-sm text-slate-500 dark:text-slate-400">Loading…</span>` : ''}
        </div>

        <!-- Summary block -->
        <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-3 space-y-2">
          <h3 class="text-sm font-semibold text-slate-600 dark:text-slate-300">
            ${m['shiftLifecycle.intention.summary.title'] ?? ''}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <div>
              <span class="text-slate-500 dark:text-slate-400">${m['shiftLifecycle.field.totalSales'] ?? ''}:</span>
              <span class="text-slate-800 dark:text-slate-100">${first?.totalSales ?? '—'}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400">${m['shiftLifecycle.field.totalOrders'] ?? ''}:</span>
              <span class="text-slate-800 dark:text-slate-100">${first?.totalOrders ?? '—'}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400">${m['shiftLifecycle.field.bestSellingItems'] ?? ''}:</span>
              <span class="text-slate-800 dark:text-slate-100">${first?.bestSellingItems ?? '—'}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400">${m['shiftLifecycle.field.stockConsumptionSummary'] ?? ''}:</span>
              <span class="text-slate-800 dark:text-slate-100">${first?.stockConsumptionSummary ?? '—'}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400">${m['shiftLifecycle.field.operationalMetrics'] ?? ''}:</span>
              <span class="text-slate-800 dark:text-slate-100">${first?.operationalMetrics ?? '—'}</span>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 text-left text-slate-600 dark:text-slate-300">
                <th class="py-2 px-2">${m['shiftLifecycle.field.shiftCloseReportId'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.dailyShiftId'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.totalSales'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.totalOrders'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.bestSellingItems'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.stockConsumptionSummary'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.operationalMetrics'] ?? ''}</th>
                <th class="py-2 px-2">${m['shiftLifecycle.field.createdAt'] ?? ''}</th>
              </tr>
            </thead>
            <tbody>
              ${data.length === 0
                ? html`<tr><td colspan="8" class="py-4 text-center text-slate-400 dark:text-slate-500">—</td></tr>`
                : data.map((row) => html`
                  <tr class="border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200">
                    <td class="py-2 px-2">${row.shiftCloseReportId ?? ''}</td>
                    <td class="py-2 px-2">${row.dailyShiftId ?? ''}</td>
                    <td class="py-2 px-2">${row.totalSales ?? ''}</td>
                    <td class="py-2 px-2">${row.totalOrders ?? ''}</td>
                    <td class="py-2 px-2">${row.bestSellingItems ?? ''}</td>
                    <td class="py-2 px-2">${row.stockConsumptionSummary ?? ''}</td>
                    <td class="py-2 px-2">${row.operationalMetrics ?? ''}</td>
                    <td class="py-2 px-2">${row.createdAt ?? ''}</td>
                  </tr>
                `)}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }
}
