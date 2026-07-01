/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/queryStockItem.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowQueryStockItemInput,
  CafeFlowQueryStockItemOutput,
  CafeFlowQueryStockItemOutputItem,
} from '/_102048_/l2/cafeFlow/web/contracts/queryStockItem.js';

/// **collab_i18n_start**
const message_pt = {
  "queryStockItem.section.main.title": "Consultar Itens de Estoque",
  "queryStockItem.organism.list.title": "Consultar Itens de Estoque",
  "queryStockItem.intention.list.title": "Query List",
  "queryStockItem.field.stockItemId": "Stock Item Id",
  "queryStockItem.field.name": "Name",
  "queryStockItem.field.unitOfMeasure": "Unit Of Measure",
  "queryStockItem.field.minimumStockLevel": "Minimum Stock Level",
  "queryStockItem.field.status": "Status",
  "queryStockItem.field.createdAt": "Created At",
  "queryStockItem.field.updatedAt": "Updated At",
  "queryStockItem.filter.stockItemId": "Stock Item Id",
  "queryStockItem.filter.name": "Name",
  "queryStockItem.filter.status": "Status",
  "queryStockItem.filter.createdAt": "Created At",
  "queryStockItem.filter.updatedAt": "Updated At",
  "queryStockItem.action.query": "Query Stock Item"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowQueryStockItemBase extends CollabLitElement {

  @property({ type: String })
  status: string = '';

  @property({ type: String })
  queryStockItemState: "idle" | "loading" | "success" | "error" = 'idle';

  @property({ type: String })
  queryStockItemStockItemId: string = '';

  @property({ type: String })
  queryStockItemName: string = '';

  @property({ type: String })
  queryStockItemStatus: string = '';

  @property({ type: String })
  queryStockItemCreatedAt: string = '';

  @property({ type: String })
  queryStockItemUpdatedAt: string = '';

  @property({ type: Array })
  queryStockItemData: CafeFlowQueryStockItemOutputItem[] = [];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();

    const savedStatus = getState('ui.queryStockItem.status');
    if (savedStatus !== undefined) {
      this.status = savedStatus as string;
    }

    const savedQueryState = getState('ui.queryStockItem.action.queryStockItem.status');
    if (savedQueryState !== undefined) {
      this.queryStockItemState = savedQueryState as "idle" | "loading" | "success" | "error";
    }

    const savedStockItemId = getState('ui.queryStockItem.input.queryStockItem.stockItemId');
    if (savedStockItemId !== undefined) {
      this.queryStockItemStockItemId = savedStockItemId as string;
    }

    const savedName = getState('ui.queryStockItem.input.queryStockItem.name');
    if (savedName !== undefined) {
      this.queryStockItemName = savedName as string;
    }

    const savedInputStatus = getState('ui.queryStockItem.input.queryStockItem.status');
    if (savedInputStatus !== undefined) {
      this.queryStockItemStatus = savedInputStatus as string;
    }

    const savedCreatedAt = getState('ui.queryStockItem.input.queryStockItem.createdAt');
    if (savedCreatedAt !== undefined) {
      this.queryStockItemCreatedAt = savedCreatedAt as string;
    }

    const savedUpdatedAt = getState('ui.queryStockItem.input.queryStockItem.updatedAt');
    if (savedUpdatedAt !== undefined) {
      this.queryStockItemUpdatedAt = savedUpdatedAt as string;
    }

    const savedData = getState('ui.queryStockItem.data.queryStockItem');
    if (savedData !== undefined) {
      this.queryStockItemData = savedData as CafeFlowQueryStockItemOutputItem[];
    }

    subscribe(
      [
        'ui.queryStockItem.status',
        'ui.queryStockItem.action.queryStockItem.status',
        'ui.queryStockItem.input.queryStockItem.stockItemId',
        'ui.queryStockItem.input.queryStockItem.name',
        'ui.queryStockItem.input.queryStockItem.status',
        'ui.queryStockItem.input.queryStockItem.createdAt',
        'ui.queryStockItem.input.queryStockItem.updatedAt',
        'ui.queryStockItem.data.queryStockItem',
      ],
      this
    );

    this.loadQueryStockItem();
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        'ui.queryStockItem.status',
        'ui.queryStockItem.action.queryStockItem.status',
        'ui.queryStockItem.input.queryStockItem.stockItemId',
        'ui.queryStockItem.input.queryStockItem.name',
        'ui.queryStockItem.input.queryStockItem.status',
        'ui.queryStockItem.input.queryStockItem.createdAt',
        'ui.queryStockItem.input.queryStockItem.updatedAt',
        'ui.queryStockItem.data.queryStockItem',
      ],
      this
    );
    super.disconnectedCallback();
  }

  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.queryStockItem.status':
        this.status = value as string;
        break;
      case 'ui.queryStockItem.action.queryStockItem.status':
        this.queryStockItemState = value as "idle" | "loading" | "success" | "error";
        break;
      case 'ui.queryStockItem.input.queryStockItem.stockItemId':
        this.queryStockItemStockItemId = value as string;
        break;
      case 'ui.queryStockItem.input.queryStockItem.name':
        this.queryStockItemName = value as string;
        break;
      case 'ui.queryStockItem.input.queryStockItem.status':
        this.queryStockItemStatus = value as string;
        break;
      case 'ui.queryStockItem.input.queryStockItem.createdAt':
        this.queryStockItemCreatedAt = value as string;
        break;
      case 'ui.queryStockItem.input.queryStockItem.updatedAt':
        this.queryStockItemUpdatedAt = value as string;
        break;
      case 'ui.queryStockItem.data.queryStockItem':
        this.queryStockItemData = value as CafeFlowQueryStockItemOutputItem[];
        break;
      default:
        break;
    }
  }

  // --- Query action: queryStockItem ---

  async loadQueryStockItem(): Promise<void> {
    this.queryStockItemState = 'loading';
    setState('ui.queryStockItem.action.queryStockItem.status', 'loading');

    const params: CafeFlowQueryStockItemInput = {
      stockItemId: this.queryStockItemStockItemId || undefined,
      name: this.queryStockItemName || undefined,
      status: (this.queryStockItemStatus as "active" | "inactive" | "") || undefined,
      createdAt: this.queryStockItemCreatedAt || undefined,
      updatedAt: this.queryStockItemUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    const response = await execBff<CafeFlowQueryStockItemOutput>(
      'cafeFlow.queryStockItem.queryStockItem',
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? [];
      this.queryStockItemData = data;
      setState('ui.queryStockItem.data.queryStockItem', data);
      this.queryStockItemState = 'success';
      setState('ui.queryStockItem.action.queryStockItem.status', 'success');
    } else {
      this.queryStockItemState = 'error';
      setState('ui.queryStockItem.action.queryStockItem.status', 'error');
    }
  }

  handleQueryStockItemClick = (_event: Event): void => {
    this.loadQueryStockItem();
  }

  // --- State setters ---

  setQueryStockItemStockItemId(value: string): void {
    this.queryStockItemStockItemId = value;
    setState('ui.queryStockItem.input.queryStockItem.stockItemId', value);
    this.requestUpdate();
  }

  handleQueryStockItemStockItemIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryStockItemStockItemId(target.value);
  }

  setQueryStockItemName(value: string): void {
    this.queryStockItemName = value;
    setState('ui.queryStockItem.input.queryStockItem.name', value);
    this.requestUpdate();
  }

  handleQueryStockItemNameChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryStockItemName(target.value);
  }

  setQueryStockItemStatus(value: string): void {
    this.queryStockItemStatus = value;
    setState('ui.queryStockItem.input.queryStockItem.status', value);
    this.requestUpdate();
  }

  handleQueryStockItemStatusChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryStockItemStatus(target.value);
  }

  setQueryStockItemCreatedAt(value: string): void {
    this.queryStockItemCreatedAt = value;
    setState('ui.queryStockItem.input.queryStockItem.createdAt', value);
    this.requestUpdate();
  }

  handleQueryStockItemCreatedAtChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryStockItemCreatedAt(target.value);
  }

  setQueryStockItemUpdatedAt(value: string): void {
    this.queryStockItemUpdatedAt = value;
    setState('ui.queryStockItem.input.queryStockItem.updatedAt', value);
    this.requestUpdate();
  }

  handleQueryStockItemUpdatedAtChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setQueryStockItemUpdatedAt(target.value);
  }
}
