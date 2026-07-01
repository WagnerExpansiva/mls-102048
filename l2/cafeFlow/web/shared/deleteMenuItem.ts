/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowDeleteMenuItemInput, CafeFlowDeleteMenuItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/deleteMenuItem.js';

/// **collab_i18n_start**
const message_pt = {
  "deleteMenuItem.section.title": "Remover Item de Cardápio",
  "deleteMenuItem.organism.title": "Remover Item de Cardápio",
  "deleteMenuItem.intent.command.title": "Command Form",
  "deleteMenuItem.field.menuItemId": "Menu Item Id",
  "deleteMenuItem.field.name": "Name",
  "deleteMenuItem.field.category": "Category",
  "deleteMenuItem.field.price": "Price",
  "deleteMenuItem.field.stockItemId": "Stock Item Id",
  "deleteMenuItem.field.status": "Status",
  "deleteMenuItem.action.submit": "Delete Menu Item"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowDeleteMenuItemBase extends CollabLitElement {

  @property({ type: String }) status: string = "";
  @property({ type: String }) deleteMenuItemState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) deleteMenuItemMenuItemId: string = "";
  @property({ type: String }) deleteMenuItemName: string = "";
  @property({ type: String }) deleteMenuItemCategory: string = "";
  @property({ type: String }) deleteMenuItemPrice: string = "";
  @property({ type: String }) deleteMenuItemStockItemId: string = "";
  @property({ type: String }) deleteMenuItemStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState("ui.deleteMenuItem.status") as string ?? "";
    this.deleteMenuItemState = getState("ui.deleteMenuItem.action.deleteMenuItem.status") as "idle" | "loading" | "success" | "error" ?? "idle";
    this.deleteMenuItemMenuItemId = getState("ui.deleteMenuItem.input.deleteMenuItem.menuItemId") as string ?? "";
    this.deleteMenuItemName = getState("ui.deleteMenuItem.input.deleteMenuItem.name") as string ?? "";
    this.deleteMenuItemCategory = getState("ui.deleteMenuItem.input.deleteMenuItem.category") as string ?? "";
    this.deleteMenuItemPrice = getState("ui.deleteMenuItem.input.deleteMenuItem.price") as string ?? "";
    this.deleteMenuItemStockItemId = getState("ui.deleteMenuItem.input.deleteMenuItem.stockItemId") as string ?? "";
    this.deleteMenuItemStatus = getState("ui.deleteMenuItem.input.deleteMenuItem.status") as string ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter actions ---

  setDeleteMenuItemMenuItemId(value: string): void {
    this.deleteMenuItemMenuItemId = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.menuItemId", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemMenuItemIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemMenuItemId(target.value);
  }

  setDeleteMenuItemName(value: string): void {
    this.deleteMenuItemName = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.name", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemName(target.value);
  }

  setDeleteMenuItemCategory(value: string): void {
    this.deleteMenuItemCategory = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.category", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemCategoryChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemCategory(target.value);
  }

  setDeleteMenuItemPrice(value: string): void {
    this.deleteMenuItemPrice = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.price", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemPrice(target.value);
  }

  setDeleteMenuItemStockItemId(value: string): void {
    this.deleteMenuItemStockItemId = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.stockItemId", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemStockItemIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemStockItemId(target.value);
  }

  setDeleteMenuItemStatus(value: string): void {
    this.deleteMenuItemStatus = value;
    setState("ui.deleteMenuItem.input.deleteMenuItem.status", value);
    this.requestUpdate();
  }

  handleDeleteMenuItemStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteMenuItemStatus(target.value);
  }

  // --- Command action: deleteMenuItem ---

  async deleteMenuItem(): Promise<void> {
    this.deleteMenuItemState = "loading";
    setState("ui.deleteMenuItem.action.deleteMenuItem.status", "loading");
    this.requestUpdate();

    const params: CafeFlowDeleteMenuItemInput = {
      menuItemId: this.deleteMenuItemMenuItemId || undefined,
      name: this.deleteMenuItemName,
      category: this.deleteMenuItemCategory,
      price: Number(this.deleteMenuItemPrice) || 0,
      stockItemId: this.deleteMenuItemStockItemId || undefined,
      status: (this.deleteMenuItemStatus as "active" | "inactive") || "active",
    };

    const options: BffClientOptions = { mode: "blocking" };

    try {
      const response = await execBff<CafeFlowDeleteMenuItemOutput>(
        "cafeFlow.deleteMenuItem.deleteMenuItem",
        params,
        options
      );

      if (response.ok) {
        this.deleteMenuItemState = "success";
        setState("ui.deleteMenuItem.action.deleteMenuItem.status", "success");
      } else {
        this.deleteMenuItemState = "error";
        setState("ui.deleteMenuItem.action.deleteMenuItem.status", "error");
      }
    } catch {
      this.deleteMenuItemState = "error";
      setState("ui.deleteMenuItem.action.deleteMenuItem.status", "error");
    }
    this.requestUpdate();
  }

  handleDeleteMenuItemClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.deleteMenuItem();
    }, { mode: "blocking" });
  }
}
