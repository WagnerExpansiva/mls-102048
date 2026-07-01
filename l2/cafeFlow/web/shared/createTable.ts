/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/createTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type { CafeFlowCreateTableInput, CafeFlowCreateTableOutput } from '/_102048_/l2/cafeFlow/web/contracts/createTable.js';

/// **collab_i18n_start**
const message_pt = {
  "createTable.section.title": "Cadastrar Mesa",
  "createTable.organism.title": "Cadastrar Mesa",
  "createTable.intention.form.title": "Dados da Mesa",
  "createTable.field.tableNumber": "Número/Código da Mesa",
  "createTable.field.capacity": "Capacidade",
  "createTable.field.status": "Situação",
  "createTable.field.status.active": "Ativa",
  "createTable.field.status.inactive": "Inativa",
  "createTable.action.submit": "Salvar Mesa"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowCreateTableBase extends CollabLitElement {

  @property({ type: String })
  status: string = '';

  @property({ type: String })
  createTableState: "idle" | "loading" | "success" | "error" = 'idle';

  @property({ type: String })
  createTableTableNumber: string = '';

  @property({ type: String })
  createTableCapacity: string = '';

  @property({ type: String })
  createTableStatus: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  /* ---- State setters ---- */

  setCreateTableTableNumber(value: string): void {
    this.createTableTableNumber = value;
    setState('ui.createTable.input.createTable.tableNumber', value);
    this.requestUpdate();
  }

  handleCreateTableTableNumberChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateTableTableNumber(target.value);
  }

  setCreateTableCapacity(value: string): void {
    this.createTableCapacity = value;
    setState('ui.createTable.input.createTable.capacity', value);
    this.requestUpdate();
  }

  handleCreateTableCapacityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateTableCapacity(target.value);
  }

  setCreateTableStatus(value: string): void {
    this.createTableStatus = value;
    setState('ui.createTable.input.createTable.status', value);
    this.requestUpdate();
  }

  handleCreateTableStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateTableStatus(target.value);
  }

  /* ---- Command action ---- */

  async createTable(): Promise<void> {
    this.createTableState = 'loading';
    setState('ui.createTable.action.createTable.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateTableInput = {
      tableNumber: this.createTableTableNumber,
      capacity: this.createTableCapacity ? Number(this.createTableCapacity) : undefined,
      status: this.createTableStatus as "active" | "inactive",
    };

    const options: BffClientOptions = { mode: 'blocking' };

    const response = await execBff<CafeFlowCreateTableOutput>(
      'cafeFlow.createTable.createTable',
      params,
      options,
    );

    if (response.ok) {
      this.createTableState = 'success';
      setState('ui.createTable.action.createTable.status', 'success');
    } else {
      this.createTableState = 'error';
      setState('ui.createTable.action.createTable.status', 'error');
    }
    this.requestUpdate();
  }

  async handleCreateTableClick(_e: Event): Promise<void> {
    await runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createTable();
    }, { mode: 'blocking' });
  }

  /* ---- Lifecycle ---- */

  connectedCallback(): void {
    super.connectedCallback();

    const savedTableNumber = getState('ui.createTable.input.createTable.tableNumber');
    if (savedTableNumber !== undefined) {
      this.createTableTableNumber = savedTableNumber as string;
    }

    const savedCapacity = getState('ui.createTable.input.createTable.capacity');
    if (savedCapacity !== undefined) {
      this.createTableCapacity = savedCapacity as string;
    }

    const savedStatus = getState('ui.createTable.input.createTable.status');
    if (savedStatus !== undefined) {
      this.createTableStatus = savedStatus as string;
    }

    const savedActionStatus = getState('ui.createTable.action.createTable.status');
    if (savedActionStatus !== undefined) {
      this.createTableState = savedActionStatus as "idle" | "loading" | "success" | "error";
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
