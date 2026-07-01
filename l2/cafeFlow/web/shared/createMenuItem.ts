/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type { CafeFlowCreateMenuItemInput, CafeFlowCreateMenuItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/createMenuItem.js';

/// **collab_i18n_start**
const message_pt = {
  "createMenuItem.section.title": "Cadastrar Item de Cardápio",
  "createMenuItem.organism.title": "Cadastrar Item de Cardápio",
  "createMenuItem.intent.commandForm.title": "Command Form",
  "menuItem.field.name": "Name",
  "menuItem.field.category": "Category",
  "menuItem.field.price": "Price",
  "menuItem.field.status": "Status",
  "createMenuItem.action.submit": "Create Menu Item"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowCreateMenuItemBase extends CollabLitElement {

  @property({ type: String }) status: string = "";

  @property({ type: String }) createMenuItemState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) createMenuItemName: string = "";

  @property({ type: String }) createMenuItemCategory: string = "";

  @property({ type: String }) createMenuItemPrice: string = "";

  @property({ type: String }) createMenuItemStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState("ui.createMenuItem.status") ?? "";
    this.createMenuItemState = getState("ui.createMenuItem.action.createMenuItem.status") ?? "idle";
    this.createMenuItemName = getState("ui.createMenuItem.input.createMenuItem.name") ?? "";
    this.createMenuItemCategory = getState("ui.createMenuItem.input.createMenuItem.category") ?? "";
    this.createMenuItemPrice = getState("ui.createMenuItem.input.createMenuItem.price") ?? "";
    this.createMenuItemStatus = getState("ui.createMenuItem.input.createMenuItem.status") ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter actions ---

  setCreateMenuItemName(value: string): void {
    this.createMenuItemName = value;
    setState("ui.createMenuItem.input.createMenuItem.name", value);
    this.requestUpdate();
  }

  handleCreateMenuItemNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateMenuItemName(target.value);
  }

  setCreateMenuItemCategory(value: string): void {
    this.createMenuItemCategory = value;
    setState("ui.createMenuItem.input.createMenuItem.category", value);
    this.requestUpdate();
  }

  handleCreateMenuItemCategoryChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateMenuItemCategory(target.value);
  }

  setCreateMenuItemPrice(value: string): void {
    this.createMenuItemPrice = value;
    setState("ui.createMenuItem.input.createMenuItem.price", value);
    this.requestUpdate();
  }

  handleCreateMenuItemPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateMenuItemPrice(target.value);
  }

  setCreateMenuItemStatus(value: string): void {
    this.createMenuItemStatus = value;
    setState("ui.createMenuItem.input.createMenuItem.status", value);
    this.requestUpdate();
  }

  handleCreateMenuItemStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateMenuItemStatus(target.value);
  }

  // --- Command actions ---

  async createMenuItem(): Promise<void> {
    this.createMenuItemState = "loading";
    setState("ui.createMenuItem.action.createMenuItem.status", "loading");

    const params: CafeFlowCreateMenuItemInput = {
      name: this.createMenuItemName,
      category: this.createMenuItemCategory,
      price: Number(this.createMenuItemPrice),
      status: this.createMenuItemStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: "blocking" };

    const response = await execBff<CafeFlowCreateMenuItemOutput>(
      "cafeFlow.createMenuItem.createMenuItem",
      params,
      options,
    );

    if (response.ok) {
      this.createMenuItemState = "success";
      setState("ui.createMenuItem.action.createMenuItem.status", "success");
    } else {
      this.createMenuItemState = "error";
      setState("ui.createMenuItem.action.createMenuItem.status", "error");
    }
  }

  handleCreateMenuItemClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createMenuItem();
    }, { mode: "blocking" });
  }
}
