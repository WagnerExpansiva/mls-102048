/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/orderLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowLaunchOrderInput,
  CafeFlowLaunchOrderOutput,
  CafeFlowUpdateOrderStatusInput,
  CafeFlowUpdateOrderStatusOutput,
  CafeFlowProcessPaymentInput,
  CafeFlowProcessPaymentOutput,
} from '/_102048_/l2/cafeFlow/web/contracts/orderLifecycle.js';

/// **collab_i18n_start**
const message_pt = {
  "orderLifecycle.section.main.title": "Ciclo de Vida do Pedido",
  "orderLifecycle.organism.launchOrder.title": "Lançar Pedido (POS)",
  "orderLifecycle.intent.launchOrder.form.title": "Command Form",
  "orderLifecycle.field.launchOrder.type": "Type",
  "orderLifecycle.field.launchOrder.status": "Status",
  "orderLifecycle.field.launchOrder.total": "Total",
  "orderLifecycle.action.launchOrder.submit": "Launch Order",
  "orderLifecycle.organism.updateOrderStatus.title": "Atualizar Status do Pedido",
  "orderLifecycle.intent.updateOrderStatus.form.title": "Command Form",
  "orderLifecycle.field.updateOrderStatus.orderStatusEventId": "Order Status Event Id",
  "orderLifecycle.field.updateOrderStatus.orderId": "Order Id",
  "orderLifecycle.field.updateOrderStatus.previousStatus": "Previous Status",
  "orderLifecycle.field.updateOrderStatus.status": "Status",
  "orderLifecycle.action.updateOrderStatus.submit": "Update Order Status",
  "orderLifecycle.organism.processPayment.title": "Processar Pagamento e Fechar Pedido",
  "orderLifecycle.intent.processPayment.form.title": "Command Form",
  "orderLifecycle.field.processPayment.status": "Status",
  "orderLifecycle.action.processPayment.submit": "Process Payment",
  "orderLifecycle.organism.summary.title": "Revisar o contexto e o resultado das ações principais da página",
  "orderLifecycle.intent.summary.title": "Summary",
  "orderLifecycle.field.summary.status": "Status",
  "orderLifecycle.field.summary.total": "Total"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowOrderLifecycleBase extends CollabLitElement {

  @property({ type: String }) status: string = '';

  @property({ type: String }) launchOrderState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) launchOrderType: string = '';

  @property({ type: String }) launchOrderStatus: string = '';

  @property({ type: String }) launchOrderTotal: string = '';

  @property({ type: String }) updateOrderStatusState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) updateOrderStatusOrderStatusEventId: string = '';

  @property({ type: String }) updateOrderStatusOrderId: string = '';

  @property({ type: String }) updateOrderStatusPreviousStatus: string = '';

  @property({ type: String }) updateOrderStatusStatus: string = '';

  @property({ type: String }) processPaymentState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) processPaymentStatus: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.orderLifecycle.status') as string) ?? '';
    this.launchOrderState = (getState('ui.orderLifecycle.action.launchOrder.status') as "idle" | "loading" | "success" | "error") ?? "idle";
    this.launchOrderType = (getState('ui.orderLifecycle.input.launchOrder.type') as string) ?? '';
    this.launchOrderStatus = (getState('ui.orderLifecycle.input.launchOrder.status') as string) ?? '';
    this.launchOrderTotal = (getState('ui.orderLifecycle.input.launchOrder.total') as string) ?? '';
    this.updateOrderStatusState = (getState('ui.orderLifecycle.action.updateOrderStatus.status') as "idle" | "loading" | "success" | "error") ?? "idle";
    this.updateOrderStatusOrderStatusEventId = (getState('ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId') as string) ?? '';
    this.updateOrderStatusOrderId = (getState('ui.orderLifecycle.input.updateOrderStatus.orderId') as string) ?? '';
    this.updateOrderStatusPreviousStatus = (getState('ui.orderLifecycle.input.updateOrderStatus.previousStatus') as string) ?? '';
    this.updateOrderStatusStatus = (getState('ui.orderLifecycle.input.updateOrderStatus.status') as string) ?? '';
    this.processPaymentState = (getState('ui.orderLifecycle.action.processPayment.status') as "idle" | "loading" | "success" | "error") ?? "idle";
    this.processPaymentStatus = (getState('ui.orderLifecycle.input.processPayment.status') as string) ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setLaunchOrderType(value: string): void {
    this.launchOrderType = value;
    setState('ui.orderLifecycle.input.launchOrder.type', value);
    this.requestUpdate();
  }

  handleLaunchOrderTypeChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setLaunchOrderType(target.value);
  }

  setLaunchOrderStatus(value: string): void {
    this.launchOrderStatus = value;
    setState('ui.orderLifecycle.input.launchOrder.status', value);
    this.requestUpdate();
  }

  handleLaunchOrderStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setLaunchOrderStatus(target.value);
  }

  setLaunchOrderTotal(value: string): void {
    this.launchOrderTotal = value;
    setState('ui.orderLifecycle.input.launchOrder.total', value);
    this.requestUpdate();
  }

  handleLaunchOrderTotalChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setLaunchOrderTotal(target.value);
  }

  setUpdateOrderStatusOrderStatusEventId(value: string): void {
    this.updateOrderStatusOrderStatusEventId = value;
    setState('ui.orderLifecycle.input.updateOrderStatus.orderStatusEventId', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusOrderStatusEventIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusOrderStatusEventId(target.value);
  }

  setUpdateOrderStatusOrderId(value: string): void {
    this.updateOrderStatusOrderId = value;
    setState('ui.orderLifecycle.input.updateOrderStatus.orderId', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusOrderIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusOrderId(target.value);
  }

  setUpdateOrderStatusPreviousStatus(value: string): void {
    this.updateOrderStatusPreviousStatus = value;
    setState('ui.orderLifecycle.input.updateOrderStatus.previousStatus', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusPreviousStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusPreviousStatus(target.value);
  }

  setUpdateOrderStatusStatus(value: string): void {
    this.updateOrderStatusStatus = value;
    setState('ui.orderLifecycle.input.updateOrderStatus.status', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusStatus(target.value);
  }

  setProcessPaymentStatus(value: string): void {
    this.processPaymentStatus = value;
    setState('ui.orderLifecycle.input.processPayment.status', value);
    this.requestUpdate();
  }

  handleProcessPaymentStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setProcessPaymentStatus(target.value);
  }

  // --- Command actions ---

  async launchOrder(): Promise<void> {
    this.launchOrderState = "loading";
    setState('ui.orderLifecycle.action.launchOrder.status', "loading");

    const params: CafeFlowLaunchOrderInput = {
      type: this.launchOrderType as CafeFlowLaunchOrderInput["type"],
      status: this.launchOrderStatus as CafeFlowLaunchOrderInput["status"],
      total: Number(this.launchOrderTotal) || 0,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowLaunchOrderOutput>(
        'cafeFlow.orderLifecycle.launchOrder',
        params,
        options,
      );

      if (response.ok) {
        this.launchOrderState = "success";
        setState('ui.orderLifecycle.action.launchOrder.status', "success");
      } else {
        this.launchOrderState = "error";
        setState('ui.orderLifecycle.action.launchOrder.status', "error");
      }
    } catch {
      this.launchOrderState = "error";
      setState('ui.orderLifecycle.action.launchOrder.status', "error");
    }
  }

  handleLaunchOrderClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.launchOrder();
    }, { mode: 'blocking' });
  }

  async updateOrderStatus(): Promise<void> {
    this.updateOrderStatusState = "loading";
    setState('ui.orderLifecycle.action.updateOrderStatus.status', "loading");

    const params: CafeFlowUpdateOrderStatusInput = {
      orderStatusEventId: this.updateOrderStatusOrderStatusEventId || undefined,
      orderId: this.updateOrderStatusOrderId || undefined,
      previousStatus: this.updateOrderStatusPreviousStatus || undefined,
      status: this.updateOrderStatusStatus,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowUpdateOrderStatusOutput>(
        'cafeFlow.orderLifecycle.updateOrderStatus',
        params,
        options,
      );

      if (response.ok) {
        this.updateOrderStatusState = "success";
        setState('ui.orderLifecycle.action.updateOrderStatus.status', "success");
      } else {
        this.updateOrderStatusState = "error";
        setState('ui.orderLifecycle.action.updateOrderStatus.status', "error");
      }
    } catch {
      this.updateOrderStatusState = "error";
      setState('ui.orderLifecycle.action.updateOrderStatus.status', "error");
    }
  }

  handleUpdateOrderStatusClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateOrderStatus();
    }, { mode: 'blocking' });
  }

  async processPayment(): Promise<void> {
    this.processPaymentState = "loading";
    setState('ui.orderLifecycle.action.processPayment.status', "loading");

    const params: CafeFlowProcessPaymentInput = {
      status: this.processPaymentStatus as CafeFlowProcessPaymentInput["status"],
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowProcessPaymentOutput>(
        'cafeFlow.orderLifecycle.processPayment',
        params,
        options,
      );

      if (response.ok) {
        this.processPaymentState = "success";
        setState('ui.orderLifecycle.action.processPayment.status', "success");
      } else {
        this.processPaymentState = "error";
        setState('ui.orderLifecycle.action.processPayment.status', "error");
      }
    } catch {
      this.processPaymentState = "error";
      setState('ui.orderLifecycle.action.processPayment.status', "error");
    }
  }

  handleProcessPaymentClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.processPayment();
    }, { mode: 'blocking' });
  }
}
