/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/adjustStockLevel.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowAdjustStockLevelInput, CafeFlowAdjustStockLevelOutput } from '/_102048_/l2/cafeFlow/web/contracts/adjustStockLevel.js';

/// **collab_i18n_start**
const message_pt = {
  "adjustStockLevel.section.title": "Registrar Entrada/Ajuste de Estoque",
  "adjustStockLevel.organism.title": "Registrar Entrada/Ajuste de Estoque",
  "adjustStockLevel.intent.commandForm.title": "Registrar Entrada/Ajuste de Estoque",
  "adjustStockLevel.field.currentQuantity": "Quantidade atual",
  "adjustStockLevel.field.status": "Situação do estoque",
  "adjustStockLevel.action.submit": "Registrar ajuste"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowAdjustStockLevelBase extends CollabLitElement {

  @property({ type: String }) status: string = "";

  @property({ type: String }) adjustStockLevelState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) adjustStockLevelCurrentQuantity: string = "";

  @property({ type: String }) adjustStockLevelStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState("ui.adjustStockLevel.status") as string) ?? "";
    this.adjustStockLevelState = (getState("ui.adjustStockLevel.action.adjustStockLevel.status") as "idle" | "loading" | "success" | "error") ?? "idle";
    this.adjustStockLevelCurrentQuantity = (getState("ui.adjustStockLevel.input.adjustStockLevel.currentQuantity") as string) ?? "";
    this.adjustStockLevelStatus = (getState("ui.adjustStockLevel.input.adjustStockLevel.status") as string) ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter Actions ---

  setAdjustStockLevelCurrentQuantity(value: string): void {
    this.adjustStockLevelCurrentQuantity = value;
    setState("ui.adjustStockLevel.input.adjustStockLevel.currentQuantity", value);
    this.requestUpdate();
  }

  handleAdjustStockLevelCurrentQuantityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAdjustStockLevelCurrentQuantity(target.value);
  }

  setAdjustStockLevelStatus(value: string): void {
    this.adjustStockLevelStatus = value;
    setState("ui.adjustStockLevel.input.adjustStockLevel.status", value);
    this.requestUpdate();
  }

  handleAdjustStockLevelStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setAdjustStockLevelStatus(target.value);
  }

  // --- Command Actions ---

  async adjustStockLevel(): Promise<void> {
    this.adjustStockLevelState = "loading";
    setState("ui.adjustStockLevel.action.adjustStockLevel.status", "loading");

    const params: CafeFlowAdjustStockLevelInput = {
      currentQuantity: Number(this.adjustStockLevelCurrentQuantity),
      status: this.adjustStockLevelStatus as "sufficient" | "low" | "depleted",
    };

    const options: BffClientOptions = { mode: "blocking" };

    try {
      const response = await execBff<CafeFlowAdjustStockLevelOutput>(
        "cafeFlow.adjustStockLevel.adjustStockLevel",
        params,
        options,
      );

      if (response.ok) {
        this.adjustStockLevelState = "success";
        setState("ui.adjustStockLevel.action.adjustStockLevel.status", "success");
      } else {
        this.adjustStockLevelState = "error";
        setState("ui.adjustStockLevel.action.adjustStockLevel.status", "error");
      }
    } catch {
      this.adjustStockLevelState = "error";
      setState("ui.adjustStockLevel.action.adjustStockLevel.status", "error");
    }
  }

  async handleAdjustStockLevelClick(e: Event): Promise<void> {
    e.preventDefault();
    await runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.adjustStockLevel();
    }, { mode: "blocking", busyLabel: this.msg["adjustStockLevel.action.submit"] });
  }
}
