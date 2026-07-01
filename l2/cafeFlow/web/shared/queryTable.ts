/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryTable.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CafeFlowQueryTableInput,
  CafeFlowQueryTableOutput,
  CafeFlowQueryTableOutputItem,
} from '/_102048_/l2/cafeFlow/web/contracts/queryTable.js';

/// **collab_i18n_start**
const message_pt = {
  "queryTable.section.title": "Consultar Mesas",
  "queryTable.organism.title": "Consultar Mesas",
  "queryTable.intent.list.title": "Lista de mesas",
  "queryTable.field.tableId": "ID da mesa",
  "queryTable.field.tableNumber": "Número da mesa",
  "queryTable.field.capacity": "Capacidade",
  "queryTable.field.status": "Status",
  "queryTable.field.createdAt": "Criada em",
  "queryTable.field.updatedAt": "Atualizada em",
  "queryTable.filter.tableId": "ID da mesa",
  "queryTable.filter.status": "Status",
  "queryTable.filter.createdAt": "Criada em",
  "queryTable.filter.updatedAt": "Atualizada em",
  "queryTable.action.query": "Consultar"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowQueryTableBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String }) queryTableState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property({ type: String }) queryTableTableId: string = '';

  @property({ type: String }) queryTableStatus: string = '';

  @property({ type: String }) queryTableCreatedAt: string = '';

  @property({ type: String }) queryTableUpdatedAt: string = '';

  @property({ type: Array }) queryTableData: CafeFlowQueryTableOutput = [];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();

    const existingStatus = getState('ui.queryTable.status');
    if (typeof existingStatus === 'string') {
      this.status = existingStatus;
    }

    const existingQueryTableState = getState('ui.queryTable.action.queryTable.status');
    if (typeof existingQueryTableState === 'string') {
      this.queryTableState = existingQueryTableState as 'idle' | 'loading' | 'success' | 'error';
    }

    const existingTableId = getState('ui.queryTable.input.queryTable.tableId');
    if (typeof existingTableId === 'string') {
      this.queryTableTableId = existingTableId;
    }

    const existingQueryStatus = getState('ui.queryTable.input.queryTable.status');
    if (typeof existingQueryStatus === 'string') {
      this.queryTableStatus = existingQueryStatus;
    }

    const existingCreatedAt = getState('ui.queryTable.input.queryTable.createdAt');
    if (typeof existingCreatedAt === 'string') {
      this.queryTableCreatedAt = existingCreatedAt;
    }

    const existingUpdatedAt = getState('ui.queryTable.input.queryTable.updatedAt');
    if (typeof existingUpdatedAt === 'string') {
      this.queryTableUpdatedAt = existingUpdatedAt;
    }

    const existingData = getState('ui.queryTable.data.queryTable');
    if (Array.isArray(existingData)) {
      this.queryTableData = existingData as CafeFlowQueryTableOutput;
    }

    subscribe(
      [
        'ui.queryTable.status',
        'ui.queryTable.action.queryTable.status',
        'ui.queryTable.input.queryTable.tableId',
        'ui.queryTable.input.queryTable.status',
        'ui.queryTable.input.queryTable.createdAt',
        'ui.queryTable.input.queryTable.updatedAt',
        'ui.queryTable.data.queryTable',
      ],
      this,
    );

    this.loadQueryTable();
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        'ui.queryTable.status',
        'ui.queryTable.action.queryTable.status',
        'ui.queryTable.input.queryTable.tableId',
        'ui.queryTable.input.queryTable.status',
        'ui.queryTable.input.queryTable.createdAt',
        'ui.queryTable.input.queryTable.updatedAt',
        'ui.queryTable.data.queryTable',
      ],
      this,
    );
    super.disconnectedCallback();
  }

  async loadQueryTable(): Promise<void> {
    this.queryTableState = 'loading';
    setState('ui.queryTable.action.queryTable.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowQueryTableInput = {
      tableId: this.queryTableTableId || undefined,
      status: (this.queryTableStatus as 'active' | 'inactive') || undefined,
      createdAt: this.queryTableCreatedAt || undefined,
      updatedAt: this.queryTableUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    const response = await execBff<CafeFlowQueryTableOutput>(
      'cafeFlow.queryTable.queryTable',
      params,
      options,
    );

    if (response.ok) {
      const data: CafeFlowQueryTableOutput = response.data ?? [];
      this.queryTableData = data;
      setState('ui.queryTable.data.queryTable', data);
      this.queryTableState = 'success';
      setState('ui.queryTable.action.queryTable.status', 'success');
    } else {
      this.queryTableData = [];
      setState('ui.queryTable.data.queryTable', []);
      this.queryTableState = 'error';
      setState('ui.queryTable.action.queryTable.status', 'error');
    }

    this.requestUpdate();
  }

  handleQueryTableClick(_event: Event): void {
    this.loadQueryTable();
  }

  setQueryTableTableId(value: string): void {
    this.queryTableTableId = value;
    setState('ui.queryTable.input.queryTable.tableId', value);
    this.requestUpdate();
  }

  handleQueryTableTableIdChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setQueryTableTableId(target.value);
  }

  setQueryTableStatus(value: string): void {
    this.queryTableStatus = value;
    setState('ui.queryTable.input.queryTable.status', value);
    this.requestUpdate();
  }

  handleQueryTableStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setQueryTableStatus(target.value);
  }

  setQueryTableCreatedAt(value: string): void {
    this.queryTableCreatedAt = value;
    setState('ui.queryTable.input.queryTable.createdAt', value);
    this.requestUpdate();
  }

  handleQueryTableCreatedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setQueryTableCreatedAt(target.value);
  }

  setQueryTableUpdatedAt(value: string): void {
    this.queryTableUpdatedAt = value;
    setState('ui.queryTable.input.queryTable.updatedAt', value);
    this.requestUpdate();
  }

  handleQueryTableUpdatedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setQueryTableUpdatedAt(target.value);
  }
}
