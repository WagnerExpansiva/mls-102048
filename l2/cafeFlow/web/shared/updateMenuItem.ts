/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js'; 
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowUpdateMenuItemInput, CafeFlowUpdateMenuItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateMenuItem.js';

/// **collab_i18n_start**
const message_pt = {
  "updateMenuItem.section.title": "Editar Item de Cardápio",
  "updateMenuItem.organism.title": "Editar Item de Cardápio",
  "updateMenuItem.form.title": "Command Form",
  "updateMenuItem.field.name": "Name",
  "updateMenuItem.field.price": "Price",
  "updateMenuItem.field.stockItemId": "Stock Item Id",
  "updateMenuItem.field.status": "Status",
  "updateMenuItem.action.submit": "Update Menu Item"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowUpdateMenuItemBase extends CollabLitElement {

  @property({ type: String }) status: string = "";

  @property({ type: String }) updateMenuItemState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) updateMenuItemName: string = "";

  @property({ type: String }) updateMenuItemPrice: string = "";

  @property({ type: String }) updateMenuItemStockItemId: string = "";

  @property({ type: String }) updateMenuItemStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  /* ---- State setters ---- */

  setUpdateMenuItemName(value: string): void {
    this.updateMenuItemName = value;
    setState("ui.updateMenuItem.input.updateMenuItem.name", value);
    this.requestUpdate();
  }

  handleUpdateMenuItemNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateMenuItemName(target.value);
  }

  setUpdateMenuItemPrice(value: string): void {
    this.updateMenuItemPrice = value;
    setState("ui.updateMenuItem.input.updateMenuItem.price", value);
    this.requestUpdate();
  }

  handleUpdateMenuItemPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateMenuItemPrice(target.value);
  }

  setUpdateMenuItemStockItemId(value: string): void {
    this.updateMenuItemStockItemId = value;
    setState("ui.updateMenuItem.input.updateMenuItem.stockItemId", value);
    this.requestUpdate();
  }

  handleUpdateMenuItemStockItemIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateMenuItemStockItemId(target.value);
  }

  setUpdateMenuItemStatus(value: string): void {
    this.updateMenuItemStatus = value;
    setState("ui.updateMenuItem.input.updateMenuItem.status", value);
    this.requestUpdate();
  }

  handleUpdateMenuItemStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateMenuItemStatus(target.value);
  }

  /* ---- Command action: updateMenuItem ---- */

  async updateMenuItem(): Promise<void> {
    this.updateMenuItemState = "loading";
    setState("ui.updateMenuItem.action.updateMenuItem.status", "loading");
    this.requestUpdate();

    const params: CafeFlowUpdateMenuItemInput = {
      name: this.updateMenuItemName,
      price: Number(this.updateMenuItemPrice),
      stockItemId: this.updateMenuItemStockItemId || undefined,
      status: this.updateMenuItemStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: "blocking" };

    const response = await execBff<CafeFlowUpdateMenuItemOutput>(
      "cafeFlow.updateMenuItem.updateMenuItem",
      params,
      options,
    );

    if (response.ok) {
      this.updateMenuItemState = "success";
      setState("ui.updateMenuItem.action.updateMenuItem.status", "success");
    } else {
      this.updateMenuItemState = "error";
      setState("ui.updateMenuItem.action.updateMenuItem.status", "error");
    }
    this.requestUpdate();
  }

  async handleUpdateMenuItemClick(e: Event): Promise<void> {
    e.preventDefault();
    await runBlockingUiAction(async (signal: AbortSignal) => {
      const options: BffClientOptions = { mode: "blocking", signal };
      this.updateMenuItemState = "loading";
      setState("ui.updateMenuItem.action.updateMenuItem.status", "loading");
      this.requestUpdate();

      const params: CafeFlowUpdateMenuItemInput = {
        name: this.updateMenuItemName,
        price: Number(this.updateMenuItemPrice),
        stockItemId: this.updateMenuItemStockItemId || undefined,
        status: this.updateMenuItemStatus as "active" | "inactive",
      };

      const response = await execBff<CafeFlowUpdateMenuItemOutput>(
        "cafeFlow.updateMenuItem.updateMenuItem",
        params,
        options,
      );

      if (response.ok) {
        this.updateMenuItemState = "success";
        setState("ui.updateMenuItem.action.updateMenuItem.status", "success");
      } else {
        this.updateMenuItemState = "error";
        setState("ui.updateMenuItem.action.updateMenuItem.status", "error");
      }
      this.requestUpdate();
    });
  }

  /* ---- Lifecycle ---- */

  connectedCallback(): void {
    super.connectedCallback();

    this.status = getState("ui.updateMenuItem.status") ?? "";
    this.updateMenuItemState = getState("ui.updateMenuItem.action.updateMenuItem.status") ?? "idle";
    this.updateMenuItemName = getState("ui.updateMenuItem.input.updateMenuItem.name") ?? "";
    this.updateMenuItemPrice = getState("ui.updateMenuItem.input.updateMenuItem.price") ?? "";
    this.updateMenuItemStockItemId = getState("ui.updateMenuItem.input.updateMenuItem.stockItemId") ?? "";
    this.updateMenuItemStatus = getState("ui.updateMenuItem.input.updateMenuItem.status") ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
