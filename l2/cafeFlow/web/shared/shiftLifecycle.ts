/// <mls fileReference="_102048_/l2/cafeFlow/web/shared/shiftLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CafeFlowViewDashboardInput,
  CafeFlowViewDashboardOutput,
  CafeFlowViewDashboardOutputItem,
  CafeFlowViewShiftReportInput,
  CafeFlowViewShiftReportOutput,
  CafeFlowViewShiftReportOutputItem,
} from '/_102048_/l2/cafeFlow/web/contracts/shiftLifecycle.js';

/// **collab_i18n_start**
const message_pt = {
  "shiftLifecycle.section.main.title": "Ciclo de Vida do Turno Diário",
  "shiftLifecycle.organism.viewDashboard.title": "Visualizar Dashboard",
  "shiftLifecycle.intention.viewDashboard.query.title": "Query List",
  "shiftLifecycle.field.dailyShiftId": "Daily Shift Id",
  "shiftLifecycle.field.date": "Date",
  "shiftLifecycle.field.openTime": "Open Time",
  "shiftLifecycle.field.closeTime": "Close Time",
  "shiftLifecycle.field.status": "Status",
  "shiftLifecycle.field.totalSales": "Total Sales",
  "shiftLifecycle.field.createdAt": "Created At",
  "shiftLifecycle.field.updatedAt": "Updated At",
  "shiftLifecycle.action.viewDashboard": "View Dashboard",
  "shiftLifecycle.organism.viewShiftReport.title": "Visualizar Relatório de Fechamento de Turno",
  "shiftLifecycle.intention.viewShiftReport.query.title": "Query List",
  "shiftLifecycle.field.shiftCloseReportId": "Shift Close Report Id",
  "shiftLifecycle.field.totalOrders": "Total Orders",
  "shiftLifecycle.field.bestSellingItems": "Best Selling Items",
  "shiftLifecycle.field.stockConsumptionSummary": "Stock Consumption Summary",
  "shiftLifecycle.field.operationalMetrics": "Operational Metrics",
  "shiftLifecycle.action.viewShiftReport": "View Shift Report",
  "shiftLifecycle.intention.summary.title": "Summary"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowShiftLifecycleBase extends CollabLitElement {

  @property({ type: String }) status: string = '';

  @property({ type: String }) viewDashboardState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property({ type: String }) viewDashboardDailyShiftId: string = '';
  @property({ type: String }) viewDashboardDate: string = '';
  @property({ type: String }) viewDashboardStatus: string = '';
  @property({ type: String }) viewDashboardCreatedAt: string = '';
  @property({ type: String }) viewDashboardUpdatedAt: string = '';

  @property({ type: Array }) viewDashboardData: CafeFlowViewDashboardOutputItem[] = [];

  @property({ type: String }) viewShiftReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property({ type: String }) viewShiftReportShiftCloseReportId: string = '';
  @property({ type: String }) viewShiftReportDailyShiftId: string = '';
  @property({ type: String }) viewShiftReportCreatedAt: string = '';
  @property({ type: String }) viewShiftReportUpdatedAt: string = '';

  @property({ type: Array }) viewShiftReportData: CafeFlowViewShiftReportOutputItem[] = [];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- State key mapping ----
  private readonly stateKeyMap: Record<string, string> = {
    'ui.shiftLifecycle.status': 'status',
    'ui.shiftLifecycle.action.viewDashboard.status': 'viewDashboardState',
    'ui.shiftLifecycle.input.viewDashboard.dailyShiftId': 'viewDashboardDailyShiftId',
    'ui.shiftLifecycle.input.viewDashboard.date': 'viewDashboardDate',
    'ui.shiftLifecycle.input.viewDashboard.status': 'viewDashboardStatus',
    'ui.shiftLifecycle.input.viewDashboard.createdAt': 'viewDashboardCreatedAt',
    'ui.shiftLifecycle.input.viewDashboard.updatedAt': 'viewDashboardUpdatedAt',
    'ui.shiftLifecycle.data.viewDashboard': 'viewDashboardData',
    'ui.shiftLifecycle.action.viewShiftReport.status': 'viewShiftReportState',
    'ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId': 'viewShiftReportShiftCloseReportId',
    'ui.shiftLifecycle.input.viewShiftReport.dailyShiftId': 'viewShiftReportDailyShiftId',
    'ui.shiftLifecycle.input.viewShiftReport.createdAt': 'viewShiftReportCreatedAt',
    'ui.shiftLifecycle.input.viewShiftReport.updatedAt': 'viewShiftReportUpdatedAt',
    'ui.shiftLifecycle.data.viewShiftReport': 'viewShiftReportData',
  };

  private subscribedKeys: string[] = [];

  // ---- Query: viewDashboard ----
  async loadViewDashboard(): Promise<void> {
    this.viewDashboardState = 'loading';
    setState('ui.shiftLifecycle.action.viewDashboard.status', 'loading');

    const params: CafeFlowViewDashboardInput = {
      dailyShiftId: this.viewDashboardDailyShiftId || undefined,
      date: this.viewDashboardDate || undefined,
      status: (this.viewDashboardStatus as 'open' | 'closed') || undefined,
      createdAt: this.viewDashboardCreatedAt || undefined,
      updatedAt: this.viewDashboardUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<CafeFlowViewDashboardOutput>(
      'cafeFlow.shiftLifecycle.viewDashboard',
      params,
      options,
    );

    if (response.ok) {
      this.viewDashboardData = response.data ?? [];
      setState('ui.shiftLifecycle.data.viewDashboard', this.viewDashboardData);
      this.viewDashboardState = 'success';
      setState('ui.shiftLifecycle.action.viewDashboard.status', 'success');
    } else {
      this.viewDashboardData = [];
      setState('ui.shiftLifecycle.data.viewDashboard', []);
      this.viewDashboardState = 'error';
      setState('ui.shiftLifecycle.action.viewDashboard.status', 'error');
    }
    this.requestUpdate();
  }

  handleViewDashboardClick(_e: Event): void {
    void this.loadViewDashboard();
  }

  // ---- Query: viewShiftReport ----
  async loadViewShiftReport(): Promise<void> {
    this.viewShiftReportState = 'loading';
    setState('ui.shiftLifecycle.action.viewShiftReport.status', 'loading');

    const params: CafeFlowViewShiftReportInput = {
      shiftCloseReportId: this.viewShiftReportShiftCloseReportId || undefined,
      dailyShiftId: this.viewShiftReportDailyShiftId || undefined,
      createdAt: this.viewShiftReportCreatedAt || undefined,
      updatedAt: this.viewShiftReportUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<CafeFlowViewShiftReportOutput>(
      'cafeFlow.shiftLifecycle.viewShiftReport',
      params,
      options,
    );

    if (response.ok) {
      this.viewShiftReportData = response.data ?? [];
      setState('ui.shiftLifecycle.data.viewShiftReport', this.viewShiftReportData);
      this.viewShiftReportState = 'success';
      setState('ui.shiftLifecycle.action.viewShiftReport.status', 'success');
    } else {
      this.viewShiftReportData = [];
      setState('ui.shiftLifecycle.data.viewShiftReport', []);
      this.viewShiftReportState = 'error';
      setState('ui.shiftLifecycle.action.viewShiftReport.status', 'error');
    }
    this.requestUpdate();
  }

  handleViewShiftReportClick(_e: Event): void {
    void this.loadViewShiftReport();
  }

  // ---- StateSetters: viewDashboard inputs ----
  setViewDashboardDailyShiftId(value: string): void {
    this.viewDashboardDailyShiftId = value;
    setState('ui.shiftLifecycle.input.viewDashboard.dailyShiftId', value);
    this.requestUpdate();
  }

  handleViewDashboardDailyShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewDashboardDailyShiftId(target.value);
  }

  setViewDashboardDate(value: string): void {
    this.viewDashboardDate = value;
    setState('ui.shiftLifecycle.input.viewDashboard.date', value);
    this.requestUpdate();
  }

  handleViewDashboardDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewDashboardDate(target.value);
  }

  setViewDashboardStatus(value: string): void {
    this.viewDashboardStatus = value;
    setState('ui.shiftLifecycle.input.viewDashboard.status', value);
    this.requestUpdate();
  }

  handleViewDashboardStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewDashboardStatus(target.value);
  }

  setViewDashboardCreatedAt(value: string): void {
    this.viewDashboardCreatedAt = value;
    setState('ui.shiftLifecycle.input.viewDashboard.createdAt', value);
    this.requestUpdate();
  }

  handleViewDashboardCreatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewDashboardCreatedAt(target.value);
  }

  setViewDashboardUpdatedAt(value: string): void {
    this.viewDashboardUpdatedAt = value;
    setState('ui.shiftLifecycle.input.viewDashboard.updatedAt', value);
    this.requestUpdate();
  }

  handleViewDashboardUpdatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewDashboardUpdatedAt(target.value);
  }

  // ---- StateSetters: viewShiftReport inputs ----
  setViewShiftReportShiftCloseReportId(value: string): void {
    this.viewShiftReportShiftCloseReportId = value;
    setState('ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId', value);
    this.requestUpdate();
  }

  handleViewShiftReportShiftCloseReportIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewShiftReportShiftCloseReportId(target.value);
  }

  setViewShiftReportDailyShiftId(value: string): void {
    this.viewShiftReportDailyShiftId = value;
    setState('ui.shiftLifecycle.input.viewShiftReport.dailyShiftId', value);
    this.requestUpdate();
  }

  handleViewShiftReportDailyShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewShiftReportDailyShiftId(target.value);
  }

  setViewShiftReportCreatedAt(value: string): void {
    this.viewShiftReportCreatedAt = value;
    setState('ui.shiftLifecycle.input.viewShiftReport.createdAt', value);
    this.requestUpdate();
  }

  handleViewShiftReportCreatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewShiftReportCreatedAt(target.value);
  }

  setViewShiftReportUpdatedAt(value: string): void {
    this.viewShiftReportUpdatedAt = value;
    setState('ui.shiftLifecycle.input.viewShiftReport.updatedAt', value);
    this.requestUpdate();
  }

  handleViewShiftReportUpdatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewShiftReportUpdatedAt(target.value);
  }

  // ---- Lifecycle ----
  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global store, falling back to defaults
    const savedStatus = getState('ui.shiftLifecycle.status');
    this.status = savedStatus !== undefined ? savedStatus : '';

    const savedViewDashboardState = getState('ui.shiftLifecycle.action.viewDashboard.status');
    this.viewDashboardState = savedViewDashboardState !== undefined ? savedViewDashboardState : 'idle';

    const savedViewDashboardDailyShiftId = getState('ui.shiftLifecycle.input.viewDashboard.dailyShiftId');
    this.viewDashboardDailyShiftId = savedViewDashboardDailyShiftId !== undefined ? savedViewDashboardDailyShiftId : '';

    const savedViewDashboardDate = getState('ui.shiftLifecycle.input.viewDashboard.date');
    this.viewDashboardDate = savedViewDashboardDate !== undefined ? savedViewDashboardDate : '';

    const savedViewDashboardStatus = getState('ui.shiftLifecycle.input.viewDashboard.status');
    this.viewDashboardStatus = savedViewDashboardStatus !== undefined ? savedViewDashboardStatus : '';

    const savedViewDashboardCreatedAt = getState('ui.shiftLifecycle.input.viewDashboard.createdAt');
    this.viewDashboardCreatedAt = savedViewDashboardCreatedAt !== undefined ? savedViewDashboardCreatedAt : '';

    const savedViewDashboardUpdatedAt = getState('ui.shiftLifecycle.input.viewDashboard.updatedAt');
    this.viewDashboardUpdatedAt = savedViewDashboardUpdatedAt !== undefined ? savedViewDashboardUpdatedAt : '';

    const savedViewDashboardData = getState('ui.shiftLifecycle.data.viewDashboard');
    this.viewDashboardData = savedViewDashboardData !== undefined ? savedViewDashboardData as CafeFlowViewDashboardOutputItem[] : [];

    const savedViewShiftReportState = getState('ui.shiftLifecycle.action.viewShiftReport.status');
    this.viewShiftReportState = savedViewShiftReportState !== undefined ? savedViewShiftReportState : 'idle';

    const savedViewShiftReportShiftCloseReportId = getState('ui.shiftLifecycle.input.viewShiftReport.shiftCloseReportId');
    this.viewShiftReportShiftCloseReportId = savedViewShiftReportShiftCloseReportId !== undefined ? savedViewShiftReportShiftCloseReportId : '';

    const savedViewShiftReportDailyShiftId = getState('ui.shiftLifecycle.input.viewShiftReport.dailyShiftId');
    this.viewShiftReportDailyShiftId = savedViewShiftReportDailyShiftId !== undefined ? savedViewShiftReportDailyShiftId : '';

    const savedViewShiftReportCreatedAt = getState('ui.shiftLifecycle.input.viewShiftReport.createdAt');
    this.viewShiftReportCreatedAt = savedViewShiftReportCreatedAt !== undefined ? savedViewShiftReportCreatedAt : '';

    const savedViewShiftReportUpdatedAt = getState('ui.shiftLifecycle.input.viewShiftReport.updatedAt');
    this.viewShiftReportUpdatedAt = savedViewShiftReportUpdatedAt !== undefined ? savedViewShiftReportUpdatedAt : '';

    const savedViewShiftReportData = getState('ui.shiftLifecycle.data.viewShiftReport');
    this.viewShiftReportData = savedViewShiftReportData !== undefined ? savedViewShiftReportData as CafeFlowViewShiftReportOutputItem[] : [];

    // Subscribe to shared states
    const keysToSubscribe = [
      'ui.shiftLifecycle.status',
      'ui.shiftLifecycle.action.viewDashboard.status',
      'ui.shiftLifecycle.data.viewDashboard',
      'ui.shiftLifecycle.action.viewShiftReport.status',
      'ui.shiftLifecycle.data.viewShiftReport',
    ];
    subscribe(keysToSubscribe, this);
    this.subscribedKeys = keysToSubscribe;

    // Run initial loads
    void this.loadViewDashboard();
    void this.loadViewShiftReport();
  }

  disconnectedCallback(): void {
    if (this.subscribedKeys.length > 0) {
      unsubscribe(this.subscribedKeys, this);
      this.subscribedKeys = [];
    }
    super.disconnectedCallback();
  }
}
