/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/deleteTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type { CafeFlowDeleteTableInput, CafeFlowDeleteTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/deleteTable.js';

/// **collab_i18n_start**
const message_pt = {
  "deleteTable.section.title": "Remover Mesa",
  "deleteTable.organism.title": "Remover Mesa",
  "deleteTable.intention.commandForm.title": "Command Form",
  "deleteTable.field.tableId": "Table Id",
  "deleteTable.field.tableNumber": "Table Number",
  "deleteTable.field.capacity": "Capacity",
  "deleteTable.field.status": "Status",
  "deleteTable.action.submit": "Delete Table"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowDeleteTableBase extends CollabLitElement {
  @property({ type: String }) status: string = "";
  @property({ type: String }) deleteTableState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) deleteTableTableId: string = "";
  @property({ type: String }) deleteTableTableNumber: string = "";
  @property({ type: String }) deleteTableCapacity: string = "";
  @property({ type: String }) deleteTableStatus: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState("ui.deleteTable.status") as string) ?? "";
    this.deleteTableState = (getState("ui.deleteTable.action.deleteTable.status") as "idle" | "loading" | "success" | "error") ?? "idle";
    this.deleteTableTableId = (getState("ui.deleteTable.input.deleteTable.tableId") as string) ?? "";
    this.deleteTableTableNumber = (getState("ui.deleteTable.input.deleteTable.tableNumber") as string) ?? "";
    this.deleteTableCapacity = (getState("ui.deleteTable.input.deleteTable.capacity") as string) ?? "";
    this.deleteTableStatus = (getState("ui.deleteTable.input.deleteTable.status") as string) ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- StateSetter actions ---

  setDeleteTableTableId(value: string): void {
    this.deleteTableTableId = value;
    setState("ui.deleteTable.input.deleteTable.tableId", value);
    this.requestUpdate();
  }

  handleDeleteTableTableIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteTableTableId(target.value);
  }

  setDeleteTableTableNumber(value: string): void {
    this.deleteTableTableNumber = value;
    setState("ui.deleteTable.input.deleteTable.tableNumber", value);
    this.requestUpdate();
  }

  handleDeleteTableTableNumberChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteTableTableNumber(target.value);
  }

  setDeleteTableCapacity(value: string): void {
    this.deleteTableCapacity = value;
    setState("ui.deleteTable.input.deleteTable.capacity", value);
    this.requestUpdate();
  }

  handleDeleteTableCapacityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteTableCapacity(target.value);
  }

  setDeleteTableStatus(value: string): void {
    this.deleteTableStatus = value;
    setState("ui.deleteTable.input.deleteTable.status", value);
    this.requestUpdate();
  }

  handleDeleteTableStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setDeleteTableStatus(target.value);
  }

  // --- Command action: deleteTable ---

  async deleteTable(): Promise<void> {
    this.deleteTableState = "loading";
    setState("ui.deleteTable.action.deleteTable.status", "loading");
    this.requestUpdate();

    const params: CafeFlowDeleteTableInput = {
      tableId: this.deleteTableTableId || undefined,
      tableNumber: this.deleteTableTableNumber,
      capacity: this.deleteTableCapacity ? Number(this.deleteTableCapacity) : undefined,
      status: this.deleteTableStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: "blocking" };

    try {
      const response = await execBff<CafeFlowDeleteTableOutput>(
        "cafeFlow.deleteTable.deleteTable",
        params,
        options
      );

      if (response.ok) {
        this.deleteTableState = "success";
        setState("ui.deleteTable.action.deleteTable.status", "success");
      } else {
        this.deleteTableState = "error";
        setState("ui.deleteTable.action.deleteTable.status", "error");
      }
    } catch {
      this.deleteTableState = "error";
      setState("ui.deleteTable.action.deleteTable.status", "error");
    }

    this.requestUpdate();
  }

  handleDeleteTableClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.deleteTable();
    }, { mode: "blocking" });
  }
}
