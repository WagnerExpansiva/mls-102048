/// <mls fileReference="_102048_/l2/cafeFlow/web/desktop/page11/orderLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowOrderLifecycleBase } from '/_102048_/l2/cafeFlow/web/shared/orderLifecycle.js';

@customElement('cafe-flow--web--desktop--page11--order-lifecycle-102048')
export class CafeFlowDesktopPage11OrderLifecyclePage extends CafeFlowOrderLifecycleBase {

  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            ${this.msg['orderLifecycle.section.main.title']}
          </h1>

          ${this.renderLaunchOrderOrganism()}
          ${this.renderUpdateOrderStatusOrganism()}
          ${this.renderProcessPaymentOrganism()}
          ${this.renderSummaryOrganism()}
        </div>
      </div>
    `;
  }

  private renderLaunchOrderOrganism() {
    const m = this.msg;
    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['orderLifecycle.organism.launchOrder.title']}
        </h2>
        <form class="space-y-4" @submit=${(e: Event) => this.handleLaunchOrderClick(e)}>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.launchOrder.type']}
              </span>
              <select
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.launchOrderType}
                @change=${(e: Event) => this.handleLaunchOrderTypeChange(e)}
              >
                <option value="" ?selected=${this.launchOrderType === ''}></option>
                <option value="dineIn" ?selected=${this.launchOrderType === 'dineIn'}>dineIn</option>
                <option value="takeout" ?selected=${this.launchOrderType === 'takeout'}>takeout</option>
              </select>
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.launchOrder.status']}
              </span>
              <select
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.launchOrderStatus}
                @change=${(e: Event) => this.handleLaunchOrderStatusChange(e)}
              >
                <option value="" ?selected=${this.launchOrderStatus === ''}></option>
                <option value="pending" ?selected=${this.launchOrderStatus === 'pending'}>pending</option>
                <option value="sent_to_kitchen" ?selected=${this.launchOrderStatus === 'sent_to_kitchen'}>sent_to_kitchen</option>
                <option value="preparing" ?selected=${this.launchOrderStatus === 'preparing'}>preparing</option>
                <option value="ready" ?selected=${this.launchOrderStatus === 'ready'}>ready</option>
                <option value="delivered" ?selected=${this.launchOrderStatus === 'delivered'}>delivered</option>
                <option value="paid" ?selected=${this.launchOrderStatus === 'paid'}>paid</option>
                <option value="cancelled" ?selected=${this.launchOrderStatus === 'cancelled'}>cancelled</option>
              </select>
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.launchOrder.total']}
              </span>
              <input
                type="number"
                step="0.01"
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.launchOrderTotal}
                @input=${(e: Event) => this.handleLaunchOrderTotalChange(e)}
              />
            </label>
          </div>

          <div class="flex items-center gap-3">
            <button
              type="submit"
              class="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              ?disabled=${this.launchOrderState === 'loading'}
            >
              ${this.launchOrderState === 'loading' ? '...' : m['orderLifecycle.action.launchOrder.submit']}
            </button>
            ${this.launchOrderState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
            ${this.launchOrderState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
          </div>
        </form>
      </section>
    `;
  }

  private renderUpdateOrderStatusOrganism() {
    const m = this.msg;
    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['orderLifecycle.organism.updateOrderStatus.title']}
        </h2>
        <form class="space-y-4" @submit=${(e: Event) => this.handleUpdateOrderStatusClick(e)}>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.updateOrderStatus.orderStatusEventId']}
              </span>
              <input
                type="text"
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.updateOrderStatusOrderStatusEventId}
                @input=${(e: Event) => this.handleUpdateOrderStatusOrderStatusEventIdChange(e)}
              />
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.updateOrderStatus.orderId']}
              </span>
              <input
                type="text"
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.updateOrderStatusOrderId}
                @input=${(e: Event) => this.handleUpdateOrderStatusOrderIdChange(e)}
              />
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.updateOrderStatus.previousStatus']}
              </span>
              <input
                type="text"
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.updateOrderStatusPreviousStatus}
                @input=${(e: Event) => this.handleUpdateOrderStatusPreviousStatusChange(e)}
              />
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.updateOrderStatus.status']}
              </span>
              <select
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.updateOrderStatusStatus}
                @change=${(e: Event) => this.handleUpdateOrderStatusStatusChange(e)}
              >
                <option value="" ?selected=${this.updateOrderStatusStatus === ''}></option>
                <option value="pending" ?selected=${this.updateOrderStatusStatus === 'pending'}>pending</option>
                <option value="sent_to_kitchen" ?selected=${this.updateOrderStatusStatus === 'sent_to_kitchen'}>sent_to_kitchen</option>
                <option value="preparing" ?selected=${this.updateOrderStatusStatus === 'preparing'}>preparing</option>
                <option value="ready" ?selected=${this.updateOrderStatusStatus === 'ready'}>ready</option>
                <option value="delivered" ?selected=${this.updateOrderStatusStatus === 'delivered'}>delivered</option>
                <option value="paid" ?selected=${this.updateOrderStatusStatus === 'paid'}>paid</option>
                <option value="cancelled" ?selected=${this.updateOrderStatusStatus === 'cancelled'}>cancelled</option>
              </select>
            </label>
          </div>

          <div class="flex items-center gap-3">
            <button
              type="submit"
              class="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              ?disabled=${this.updateOrderStatusState === 'loading'}
            >
              ${this.updateOrderStatusState === 'loading' ? '...' : m['orderLifecycle.action.updateOrderStatus.submit']}
            </button>
            ${this.updateOrderStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
            ${this.updateOrderStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
          </div>
        </form>
      </section>
    `;
  }

  private renderProcessPaymentOrganism() {
    const m = this.msg;
    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['orderLifecycle.organism.processPayment.title']}
        </h2>
        <form class="space-y-4" @submit=${(e: Event) => this.handleProcessPaymentClick(e)}>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                ${m['orderLifecycle.field.processPayment.status']}
              </span>
              <select
                class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100"
                .value=${this.processPaymentStatus}
                @change=${(e: Event) => this.handleProcessPaymentStatusChange(e)}
              >
                <option value="" ?selected=${this.processPaymentStatus === ''}></option>
                <option value="pending" ?selected=${this.processPaymentStatus === 'pending'}>pending</option>
                <option value="sent_to_kitchen" ?selected=${this.processPaymentStatus === 'sent_to_kitchen'}>sent_to_kitchen</option>
                <option value="preparing" ?selected=${this.processPaymentStatus === 'preparing'}>preparing</option>
                <option value="ready" ?selected=${this.processPaymentStatus === 'ready'}>ready</option>
                <option value="delivered" ?selected=${this.processPaymentStatus === 'delivered'}>delivered</option>
                <option value="paid" ?selected=${this.processPaymentStatus === 'paid'}>paid</option>
                <option value="cancelled" ?selected=${this.processPaymentStatus === 'cancelled'}>cancelled</option>
              </select>
            </label>
          </div>

          <div class="flex items-center gap-3">
            <button
              type="submit"
              class="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              ?disabled=${this.processPaymentState === 'loading'}
            >
              ${this.processPaymentState === 'loading' ? '...' : m['orderLifecycle.action.processPayment.submit']}
            </button>
            ${this.processPaymentState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
            ${this.processPaymentState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
          </div>
        </form>
      </section>
    `;
  }

  private renderSummaryOrganism() {
    const m = this.msg;
    return html`
      <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
          ${m['orderLifecycle.organism.summary.title']}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-md border border-slate-200 dark:border-slate-700 p-3">
            <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              ${m['orderLifecycle.field.summary.status']}
            </span>
            <span class="text-sm text-slate-800 dark:text-slate-100">—</span>
          </div>
          <div class="rounded-md border border-slate-200 dark:border-slate-700 p-3">
            <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              ${m['orderLifecycle.field.summary.total']}
            </span>
            <span class="text-sm text-slate-800 dark:text-slate-100">—</span>
          </div>
        </div>
      </section>
    `;
  }
}
