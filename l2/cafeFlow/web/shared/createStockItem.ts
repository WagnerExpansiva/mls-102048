/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowCreateStockItemInput, CafeFlowCreateStockItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/createStockItem.js';

/// **collab_i18n_start**
const message_pt = {
  "createStockItem.section.title": "Cadastrar Item de Estoque",
  "createStockItem.form.title": "Dados do Item de Estoque",
  "createStockItem.action.submit": "Salvar Item de Estoque",
  "stockItem.field.name": "Nome do item",
  "stockItem.field.unitOfMeasure": "Unidade de medida",
  "stockItem.field.minimumStockLevel": "Estoque mínimo",
  "stockItem.field.status": "Status",
  "section.createStockItem.title": "Cadastrar Item de Estoque"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowCreateStockItemBase extends CollabLitElement {

  @property({ type: String }) status: string = "";
  @property({ type: String }) createStockItemState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) createStockItemName: string = "";
  @property({ type: String }) createStockItemUnitOfMeasure: string = "";
  @property({ type: String }) createStockItemMinimumStockLevel: string = "";
  @property({ type: String }) createStockItemStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState("ui.createStockItem.status") as string ?? "";
    this.createStockItemState = getState("ui.createStockItem.action.createStockItem.status") as "idle" | "loading" | "success" | "error" ?? "idle";
    this.createStockItemName = getState("ui.createStockItem.input.createStockItem.name") as string ?? "";
    this.createStockItemUnitOfMeasure = getState("ui.createStockItem.input.createStockItem.unitOfMeasure") as string ?? "";
    this.createStockItemMinimumStockLevel = getState("ui.createStockItem.input.createStockItem.minimumStockLevel") as string ?? "";
    this.createStockItemStatus = getState("ui.createStockItem.input.createStockItem.status") as string ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter Actions ---

  setCreateStockItemName(value: string): void {
    this.createStockItemName = value;
    setState("ui.createStockItem.input.createStockItem.name", value);
    this.requestUpdate();
  }

  handleCreateStockItemNameChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setCreateStockItemName(target.value);
  };

  setCreateStockItemUnitOfMeasure(value: string): void {
    this.createStockItemUnitOfMeasure = value;
    setState("ui.createStockItem.input.createStockItem.unitOfMeasure", value);
    this.requestUpdate();
  }

  handleCreateStockItemUnitOfMeasureChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setCreateStockItemUnitOfMeasure(target.value);
  };

  setCreateStockItemMinimumStockLevel(value: string): void {
    this.createStockItemMinimumStockLevel = value;
    setState("ui.createStockItem.input.createStockItem.minimumStockLevel", value);
    this.requestUpdate();
  }

  handleCreateStockItemMinimumStockLevelChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setCreateStockItemMinimumStockLevel(target.value);
  };

  setCreateStockItemStatus(value: string): void {
    this.createStockItemStatus = value;
    setState("ui.createStockItem.input.createStockItem.status", value);
    this.requestUpdate();
  }

  handleCreateStockItemStatusChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setCreateStockItemStatus(target.value);
  };

  // --- Command Actions ---

  async createStockItem(): Promise<void> {
    this.createStockItemState = "loading";
    setState("ui.createStockItem.action.createStockItem.status", "loading");
    this.requestUpdate();

    const params: CafeFlowCreateStockItemInput = {
      name: this.createStockItemName,
      unitOfMeasure: this.createStockItemUnitOfMeasure,
      minimumStockLevel: Number(this.createStockItemMinimumStockLevel),
      status: this.createStockItemStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: "blocking" };

    const response = await execBff<CafeFlowCreateStockItemOutput>(
      "cafeFlow.createStockItem.createStockItem",
      params,
      options
    );

    if (response.ok) {
      this.createStockItemState = "success";
      setState("ui.createStockItem.action.createStockItem.status", "success");
    } else {
      this.createStockItemState = "error";
      setState("ui.createStockItem.action.createStockItem.status", "error");
    }
    this.requestUpdate();
  }

  handleCreateStockItemClick = (): void => {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createStockItem();
    }, { mode: "blocking", busyLabel: this.msg["createStockItem.action.submit"] });
  };
}
