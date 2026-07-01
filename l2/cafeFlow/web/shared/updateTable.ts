/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/updateTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowUpdateTableInput, CafeFlowUpdateTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/updateTable.js';

/// **collab_i18n_start**
const message_pt = {
  "updateTable.section.editTable.title": "Editar Mesa",
  "updateTable.organism.updateTableForm.title": "Editar Mesa",
  "updateTable.intention.commandForm.title": "Editar Mesa",
  "updateTable.field.tableNumber.label": "Número da Mesa",
  "updateTable.field.capacity.label": "Capacidade",
  "updateTable.field.status.label": "Status",
  "updateTable.action.updateTable.submit.label": "Salvar Alterações"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowUpdateTableBase extends CollabLitElement {

  @property({ type: String })
  status: string = '';

  @property({ type: String })
  updateTableState: "idle" | "loading" | "success" | "error" = 'idle';

  @property({ type: String })
  updateTableTableNumber: string = '';

  @property({ type: String })
  updateTableCapacity: string = '';

  @property({ type: String })
  updateTableStatus: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  /* ---- State setters ---- */

  setUpdateTableTableNumber(value: string): void {
    this.updateTableTableNumber = value;
    setState('ui.updateTable.input.updateTable.tableNumber', value);
    this.requestUpdate();
  }

  handleUpdateTableTableNumberChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setUpdateTableTableNumber(target.value);
  };

  setUpdateTableCapacity(value: string): void {
    this.updateTableCapacity = value;
    setState('ui.updateTable.input.updateTable.capacity', value);
    this.requestUpdate();
  }

  handleUpdateTableCapacityChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setUpdateTableCapacity(target.value);
  };

  setUpdateTableStatus(value: string): void {
    this.updateTableStatus = value;
    setState('ui.updateTable.input.updateTable.status', value);
    this.requestUpdate();
  }

  handleUpdateTableStatusChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setUpdateTableStatus(target.value);
  };

  /* ---- Command action: updateTable ---- */

  async updateTable(): Promise<void> {
    this.updateTableState = 'loading';
    setState('ui.updateTable.action.updateTable.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateTableInput = {
      tableNumber: this.updateTableTableNumber,
      capacity: this.updateTableCapacity !== '' ? Number(this.updateTableCapacity) : undefined,
      status: this.updateTableStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowUpdateTableOutput>(
        'cafeFlow.updateTable.updateTable',
        params,
        options,
      );

      if (response.ok) {
        this.updateTableState = 'success';
        setState('ui.updateTable.action.updateTable.status', 'success');
      } else {
        this.updateTableState = 'error';
        setState('ui.updateTable.action.updateTable.status', 'error');
      }
    } catch {
      this.updateTableState = 'error';
      setState('ui.updateTable.action.updateTable.status', 'error');
    }

    this.requestUpdate();
  }

  handleUpdateTableClick = (): void => {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateTable();
    }, { mode: 'blocking' });
  };

  /* ---- Lifecycle ---- */

  connectedCallback(): void {
    super.connectedCallback();

    const persistedStatus = getState('ui.updateTable.status');
    if (persistedStatus !== undefined) {
      this.status = persistedStatus as string;
    }

    const persistedActionStatus = getState('ui.updateTable.action.updateTable.status');
    if (persistedActionStatus !== undefined) {
      this.updateTableState = persistedActionStatus as "idle" | "loading" | "success" | "error";
    }

    const persistedTableNumber = getState('ui.updateTable.input.updateTable.tableNumber');
    if (persistedTableNumber !== undefined) {
      this.updateTableTableNumber = persistedTableNumber as string;
    }

    const persistedCapacity = getState('ui.updateTable.input.updateTable.capacity');
    if (persistedCapacity !== undefined) {
      this.updateTableCapacity = String(persistedCapacity);
    }

    const persistedTableStatus = getState('ui.updateTable.input.updateTable.status');
    if (persistedTableStatus !== undefined) {
      this.updateTableStatus = persistedTableStatus as string;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
