/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowDeleteStockItemInput, CafeFlowDeleteStockItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/deleteStockItem.js';

/// **collab_i18n_start**
const message_pt = {
  "deleteStockItem.page.title": "Remover Item de Estoque",
  "deleteStockItem.section.main.title": "Remover Item de Estoque",
  "deleteStockItem.organism.delete.title": "Remover Item de Estoque",
  "deleteStockItem.intent.command.title": "Confirmar remoção do item",
  "deleteStockItem.field.stockItemId.label": "Identificador do item",
  "deleteStockItem.field.name.label": "Nome do item",
  "deleteStockItem.field.unitOfMeasure.label": "Unidade de medida",
  "deleteStockItem.field.minimumStockLevel.label": "Nível mínimo em estoque",
  "deleteStockItem.field.status.label": "Status",
  "deleteStockItem.action.delete.label": "Remover item"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowDeleteStockItemBase extends CollabLitElement {

  @property({ type: String }) status: string = "";

  @property({ type: String }) deleteStockItemState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) deleteStockItemStockItemId: string = "";

  @property({ type: String }) deleteStockItemName: string = "";

  @property({ type: String }) deleteStockItemUnitOfMeasure: string = "";

  @property({ type: String }) deleteStockItemMinimumStockLevel: string | number = "";

  @property({ type: String }) deleteStockItemStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const savedStatus = getState("ui.deleteStockItem.status") as string | undefined;
    if (savedStatus !== undefined) {
      this.status = savedStatus;
    }
    const savedActionStatus = getState("ui.deleteStockItem.action.deleteStockItem.status") as string | undefined;
    if (savedActionStatus !== undefined) {
      this.deleteStockItemState = savedActionStatus as "idle" | "loading" | "success" | "error";
    }
    const savedStockItemId = getState("ui.deleteStockItem.input.deleteStockItem.stockItemId") as string | undefined;
    if (savedStockItemId !== undefined) {
      this.deleteStockItemStockItemId = savedStockItemId;
    }
    const savedName = getState("ui.deleteStockItem.input.deleteStockItem.name") as string | undefined;
    if (savedName !== undefined) {
      this.deleteStockItemName = savedName;
    }
    const savedUnitOfMeasure = getState("ui.deleteStockItem.input.deleteStockItem.unitOfMeasure") as string | undefined;
    if (savedUnitOfMeasure !== undefined) {
      this.deleteStockItemUnitOfMeasure = savedUnitOfMeasure;
    }
    const savedMinimumStockLevel = getState("ui.deleteStockItem.input.deleteStockItem.minimumStockLevel") as string | number | undefined;
    if (savedMinimumStockLevel !== undefined) {
      this.deleteStockItemMinimumStockLevel = savedMinimumStockLevel;
    }
    const savedItemStatus = getState("ui.deleteStockItem.input.deleteStockItem.status") as string | undefined;
    if (savedItemStatus !== undefined) {
      this.deleteStockItemStatus = savedItemStatus;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- Command: deleteStockItem ---

  async deleteStockItem(): Promise<void> {
    this.deleteStockItemState = "loading";
    setState("ui.deleteStockItem.action.deleteStockItem.status", "loading");
    this.requestUpdate();

    const params: CafeFlowDeleteStockItemInput = {
      stockItemId: this.deleteStockItemStockItemId || undefined,
      name: this.deleteStockItemName,
      unitOfMeasure: this.deleteStockItemUnitOfMeasure,
      minimumStockLevel: Number(this.deleteStockItemMinimumStockLevel),
      status: this.deleteStockItemStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: "blocking" };

    try {
      const response = await execBff<CafeFlowDeleteStockItemOutput>(
        "cafeFlow.deleteStockItem.deleteStockItem",
        params,
        options,
      );

      if (response.ok) {
        this.deleteStockItemState = "success";
        setState("ui.deleteStockItem.action.deleteStockItem.status", "success");
      } else {
        this.deleteStockItemState = "error";
        setState("ui.deleteStockItem.action.deleteStockItem.status", "error");
      }
    } catch {
      this.deleteStockItemState = "error";
      setState("ui.deleteStockItem.action.deleteStockItem.status", "error");
    }
    this.requestUpdate();
  }

  handleDeleteStockItemClick = (event: Event): void => {
    event.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.deleteStockItem();
    }, { mode: "blocking", busyLabel: this.msg["deleteStockItem.action.delete.label"] });
  };

  // --- StateSetter: setDeleteStockItemStockItemId ---

  setDeleteStockItemStockItemId(value: string): void {
    this.deleteStockItemStockItemId = value;
    setState("ui.deleteStockItem.input.deleteStockItem.stockItemId", value);
    this.requestUpdate();
  }

  handleDeleteStockItemStockItemIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setDeleteStockItemStockItemId(target.value);
  };

  // --- StateSetter: setDeleteStockItemName ---

  setDeleteStockItemName(value: string): void {
    this.deleteStockItemName = value;
    setState("ui.deleteStockItem.input.deleteStockItem.name", value);
    this.requestUpdate();
  }

  handleDeleteStockItemNameChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setDeleteStockItemName(target.value);
  };

  // --- StateSetter: setDeleteStockItemUnitOfMeasure ---

  setDeleteStockItemUnitOfMeasure(value: string): void {
    this.deleteStockItemUnitOfMeasure = value;
    setState("ui.deleteStockItem.input.deleteStockItem.unitOfMeasure", value);
    this.requestUpdate();
  }

  handleDeleteStockItemUnitOfMeasureChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setDeleteStockItemUnitOfMeasure(target.value);
  };

  // --- StateSetter: setDeleteStockItemMinimumStockLevel ---

  setDeleteStockItemMinimumStockLevel(value: string | number): void {
    this.deleteStockItemMinimumStockLevel = value;
    setState("ui.deleteStockItem.input.deleteStockItem.minimumStockLevel", value);
    this.requestUpdate();
  }

  handleDeleteStockItemMinimumStockLevelChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setDeleteStockItemMinimumStockLevel(target.value);
  };

  // --- StateSetter: setDeleteStockItemStatus ---

  setDeleteStockItemStatus(value: string): void {
    this.deleteStockItemStatus = value;
    setState("ui.deleteStockItem.input.deleteStockItem.status", value);
    this.requestUpdate();
  }

  handleDeleteStockItemStatusChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setDeleteStockItemStatus(target.value);
  };
}
