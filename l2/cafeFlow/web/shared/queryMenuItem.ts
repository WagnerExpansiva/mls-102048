/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryMenuItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CafeFlowQueryMenuItemInput,
  CafeFlowQueryMenuItemOutput,
  CafeFlowQueryMenuItemOutputItem,
} from '/_102048_/l2/cafeFlow/web/contracts/queryMenuItem.js';

/// **collab_i18n_start**
const message_pt = {
  "section.consultarItensCardapio.title": "Consultar Itens de Cardápio",
  "organism.queryMenuItem.title": "Itens de Cardápio",
  "intention.queryMenuItem.list.title": "Lista de Itens de Cardápio",
  "intention.queryMenuItem.list.empty": "Nenhum item de cardápio encontrado",
  "field.menuItemId.label": "ID do Item",
  "field.name.label": "Nome",
  "field.category.label": "Categoria",
  "field.price.label": "Preço",
  "field.stockItemId.label": "Item de Estoque",
  "field.status.label": "Status",
  "field.createdAt.label": "Criado em",
  "field.updatedAt.label": "Atualizado em",
  "action.queryMenuItem.label": "Buscar"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowQueryMenuItemBase extends CollabLitElement {
  @property({ type: String }) status: string = "";
  @property({ type: String }) queryMenuItemState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) queryMenuItemMenuItemId: string = "";
  @property({ type: String }) queryMenuItemName: string = "";
  @property({ type: String }) queryMenuItemCategory: string = "";
  @property({ type: String }) queryMenuItemStockItemId: string = "";
  @property({ type: String }) queryMenuItemStatus: string = "";
  @property({ type: String }) queryMenuItemCreatedAt: string = "";
  @property({ type: Array }) queryMenuItemData: CafeFlowQueryMenuItemOutput = [];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.queryMenuItemMenuItemId = (getState("ui.queryMenuItem.input.queryMenuItem.menuItemId") as string) ?? "";
    this.queryMenuItemName = (getState("ui.queryMenuItem.input.queryMenuItem.name") as string) ?? "";
    this.queryMenuItemCategory = (getState("ui.queryMenuItem.input.queryMenuItem.category") as string) ?? "";
    this.queryMenuItemStockItemId = (getState("ui.queryMenuItem.input.queryMenuItem.stockItemId") as string) ?? "";
    this.queryMenuItemStatus = (getState("ui.queryMenuItem.input.queryMenuItem.status") as string) ?? "";
    this.queryMenuItemCreatedAt = (getState("ui.queryMenuItem.input.queryMenuItem.createdAt") as string) ?? "";
    this.queryMenuItemData = (getState("ui.queryMenuItem.data.queryMenuItem") as CafeFlowQueryMenuItemOutput) ?? [];
    this.queryMenuItemState = (getState("ui.queryMenuItem.action.queryMenuItem.status") as "idle" | "loading" | "success" | "error") ?? "idle";

    subscribe(
      [
        "ui.queryMenuItem.status",
        "ui.queryMenuItem.action.queryMenuItem.status",
        "ui.queryMenuItem.input.queryMenuItem.menuItemId",
        "ui.queryMenuItem.input.queryMenuItem.name",
        "ui.queryMenuItem.input.queryMenuItem.category",
        "ui.queryMenuItem.input.queryMenuItem.stockItemId",
        "ui.queryMenuItem.input.queryMenuItem.status",
        "ui.queryMenuItem.input.queryMenuItem.createdAt",
        "ui.queryMenuItem.data.queryMenuItem",
      ],
      this
    );

    this.loadQueryMenuItem();
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        "ui.queryMenuItem.status",
        "ui.queryMenuItem.action.queryMenuItem.status",
        "ui.queryMenuItem.input.queryMenuItem.menuItemId",
        "ui.queryMenuItem.input.queryMenuItem.name",
        "ui.queryMenuItem.input.queryMenuItem.category",
        "ui.queryMenuItem.input.queryMenuItem.stockItemId",
        "ui.queryMenuItem.input.queryMenuItem.status",
        "ui.queryMenuItem.input.queryMenuItem.createdAt",
        "ui.queryMenuItem.data.queryMenuItem",
      ],
      this
    );
    super.disconnectedCallback();
  }

  // --- Query action: queryMenuItem ---

  async loadQueryMenuItem(): Promise<void> {
    this.queryMenuItemState = "loading";
    setState("ui.queryMenuItem.action.queryMenuItem.status", "loading");

    const params: CafeFlowQueryMenuItemInput = {
      menuItemId: this.queryMenuItemMenuItemId || undefined,
      name: this.queryMenuItemName || undefined,
      category: this.queryMenuItemCategory || undefined,
      stockItemId: this.queryMenuItemStockItemId || undefined,
      status: (this.queryMenuItemStatus as "active" | "inactive") || undefined,
      createdAt: this.queryMenuItemCreatedAt || undefined,
    };

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<CafeFlowQueryMenuItemOutput>(
      "cafeFlow.queryMenuItem.queryMenuItem",
      params,
      options
    );

    if (response.ok) {
      const data: CafeFlowQueryMenuItemOutput = response.data ?? [];
      this.queryMenuItemData = data;
      setState("ui.queryMenuItem.data.queryMenuItem", data);
      this.queryMenuItemState = "success";
      setState("ui.queryMenuItem.action.queryMenuItem.status", "success");
    } else {
      this.queryMenuItemState = "error";
      setState("ui.queryMenuItem.action.queryMenuItem.status", "error");
    }
  }

  handleQueryMenuItemClick = (event: Event): void => {
    event.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.loadQueryMenuItem();
    }, { mode: "silent" });
  };

  // --- State setters ---

  setQueryMenuItemMenuItemId(value: string): void {
    this.queryMenuItemMenuItemId = value;
    setState("ui.queryMenuItem.input.queryMenuItem.menuItemId", value);
    this.requestUpdate();
  }

  handleQueryMenuItemMenuItemIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemMenuItemId(target.value);
  };

  setQueryMenuItemName(value: string): void {
    this.queryMenuItemName = value;
    setState("ui.queryMenuItem.input.queryMenuItem.name", value);
    this.requestUpdate();
  }

  handleQueryMenuItemNameChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemName(target.value);
  };

  setQueryMenuItemCategory(value: string): void {
    this.queryMenuItemCategory = value;
    setState("ui.queryMenuItem.input.queryMenuItem.category", value);
    this.requestUpdate();
  }

  handleQueryMenuItemCategoryChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemCategory(target.value);
  };

  setQueryMenuItemStockItemId(value: string): void {
    this.queryMenuItemStockItemId = value;
    setState("ui.queryMenuItem.input.queryMenuItem.stockItemId", value);
    this.requestUpdate();
  }

  handleQueryMenuItemStockItemIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemStockItemId(target.value);
  };

  setQueryMenuItemStatus(value: string): void {
    this.queryMenuItemStatus = value;
    setState("ui.queryMenuItem.input.queryMenuItem.status", value);
    this.requestUpdate();
  }

  handleQueryMenuItemStatusChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemStatus(target.value);
  };

  setQueryMenuItemCreatedAt(value: string): void {
    this.queryMenuItemCreatedAt = value;
    setState("ui.queryMenuItem.input.queryMenuItem.createdAt", value);
    this.requestUpdate();
  }

  handleQueryMenuItemCreatedAtChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryMenuItemCreatedAt(target.value);
  };
}
