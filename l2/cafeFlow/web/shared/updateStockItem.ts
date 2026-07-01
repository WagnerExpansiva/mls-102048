/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowUpdateStockItemInput, CafeFlowUpdateStockItemOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateStockItem.js';

/// **collab_i18n_start**
const message_pt = {
  "section.editStockItem.title": "Editar Item de Estoque",
  "organism.updateStockItem.title": "Editar Item de Estoque",
  "intention.updateStockItemForm.title": "Dados do item de estoque",
  "field.name.label": "Nome",
  "field.unitOfMeasure.label": "Unidade de medida",
  "field.minimumStockLevel.label": "Estoque mínimo",
  "field.status.label": "Status",
  "action.updateStockItem.label": "Salvar alterações"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowUpdateStockItemBase extends CollabLitElement {

  @property({ type: String }) status: string = '';

  @property({ type: String }) updateStockItemState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) updateStockItemName: string = '';

  @property({ type: String }) updateStockItemUnitOfMeasure: string = '';

  @property({ type: String }) updateStockItemMinimumStockLevel: string = '';

  @property({ type: String }) updateStockItemStatus: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.updateStockItem.status') as string ?? '';
    this.updateStockItemState = (getState('ui.updateStockItem.action.updateStockItem.status') as "idle" | "loading" | "success" | "error") ?? "idle";
    this.updateStockItemName = getState('ui.updateStockItem.input.updateStockItem.name') as string ?? '';
    this.updateStockItemUnitOfMeasure = getState('ui.updateStockItem.input.updateStockItem.unitOfMeasure') as string ?? '';
    this.updateStockItemMinimumStockLevel = getState('ui.updateStockItem.input.updateStockItem.minimumStockLevel') as string ?? '';
    this.updateStockItemStatus = getState('ui.updateStockItem.input.updateStockItem.status') as string ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter actions ---

  setUpdateStockItemName(value: string): void {
    this.updateStockItemName = value;
    setState('ui.updateStockItem.input.updateStockItem.name', value);
    this.requestUpdate();
  }

  handleUpdateStockItemNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateStockItemName(target.value);
  }

  setUpdateStockItemUnitOfMeasure(value: string): void {
    this.updateStockItemUnitOfMeasure = value;
    setState('ui.updateStockItem.input.updateStockItem.unitOfMeasure', value);
    this.requestUpdate();
  }

  handleUpdateStockItemUnitOfMeasureChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateStockItemUnitOfMeasure(target.value);
  }

  setUpdateStockItemMinimumStockLevel(value: string): void {
    this.updateStockItemMinimumStockLevel = value;
    setState('ui.updateStockItem.input.updateStockItem.minimumStockLevel', value);
    this.requestUpdate();
  }

  handleUpdateStockItemMinimumStockLevelChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateStockItemMinimumStockLevel(target.value);
  }

  setUpdateStockItemStatus(value: string): void {
    this.updateStockItemStatus = value;
    setState('ui.updateStockItem.input.updateStockItem.status', value);
    this.requestUpdate();
  }

  handleUpdateStockItemStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateStockItemStatus(target.value);
  }

  // --- Command actions ---

  async updateStockItem(): Promise<void> {
    this.updateStockItemState = "loading";
    setState('ui.updateStockItem.action.updateStockItem.status', "loading");

    const params: CafeFlowUpdateStockItemInput = {
      name: this.updateStockItemName,
      unitOfMeasure: this.updateStockItemUnitOfMeasure,
      minimumStockLevel: Number(this.updateStockItemMinimumStockLevel),
      status: this.updateStockItemStatus as "active" | "inactive"
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowUpdateStockItemOutput>(
        'cafeFlow.updateStockItem.updateStockItem',
        params,
        options
      );

      if (response.ok) {
        this.updateStockItemState = "success";
        setState('ui.updateStockItem.action.updateStockItem.status', "success");
      } else {
        this.updateStockItemState = "error";
        setState('ui.updateStockItem.action.updateStockItem.status', "error");
      }
    } catch {
      this.updateStockItemState = "error";
      setState('ui.updateStockItem.action.updateStockItem.status', "error");
    }
  }

  handleUpdateStockItemClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateStockItem();
    }, { mode: 'blocking' });
  }
}
