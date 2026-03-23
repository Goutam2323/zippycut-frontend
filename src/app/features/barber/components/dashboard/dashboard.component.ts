import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  standalone: false,
  selector: 'app-barber-dashboard',
  template: `
    <section class="zc-page barber-dashboard page-transition">
      <div class="dashboard-hero zc-panel">
        <div>
          <span class="zc-kicker">Barber dashboard</span>
          <h1>Run your chair like a premium business</h1>
          <p class="zc-muted">Bookings, earnings, availability, and service control — all built to feel like a polished SaaS workspace.</p>
        </div>
        <a class="zc-btn-primary" routerLink="/customer/search">Preview customer app</a>
      </div>

      <div class="zc-card-grid cols-4 stats-grid">
        <article class="stat-card zc-panel" *ngFor="let stat of stats">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
          <small>{{ stat.note }}</small>
        </article>
      </div>

      <div class="dashboard-grid">
        <article class="chart-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Earnings</span>
              <h2>This week</h2>
            </div>
          </div>
          <div class="sparkline"><span *ngFor="let point of revenuePoints" [style.height.%]="point"></span></div>
        </article>

        <article class="actions-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Workspace</span>
              <h2>Manage operations</h2>
            </div>
          </div>
          <a class="action-tile" routerLink="/barber/services"><strong>Manage services</strong><span>Update pricing, combos, and duration.</span></a>
          <a class="action-tile" routerLink="/barber/slots"><strong>Availability</strong><span>Open slots, block breaks, and control demand.</span></a>
          <a class="action-tile" routerLink="/barber/bookings"><strong>Bookings</strong><span>Track arrivals, payments, and rebook requests.</span></a>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .barber-dashboard, .dashboard-grid { display:grid; gap: 24px; }
      .dashboard-hero, .chart-card, .actions-card { padding: 24px; }
      .dashboard-hero { display:grid; gap: 16px; }
      .stats-grid { gap: 16px; }
      .stat-card { padding: 20px; display:grid; gap: 8px; }
      .stat-card span, .stat-card small { color: var(--zc-text-soft); }
      .stat-card strong { font-size: 1.8rem; }
      .action-tile { padding: 18px; border-radius: 16px; background: var(--zc-surface-soft); display:grid; gap: 6px; }
      .sparkline { height: 260px; display:flex; align-items:end; gap:12px; padding-top: 12px; }
      .sparkline span { flex:1; border-radius: 999px 999px 8px 8px; background: linear-gradient(180deg, rgba(16,185,129,0.35), #10b981); box-shadow: inset 0 -12px 18px rgba(255,255,255,0.18); }
      .action-tile span { color: var(--zc-text-soft); }
      .actions-card { display:grid; gap: 12px; }
      @media (min-width: 960px) {
        .dashboard-hero { grid-template-columns: minmax(0, 1fr) auto; align-items:center; }
        .dashboard-grid { grid-template-columns: 1.4fr 0.9fr; }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberDashboardComponent {
  readonly revenuePoints = [42, 55, 48, 68, 78, 92, 96];
  readonly stats = [
    { label: 'Today bookings', value: '18', note: '+4 vs yesterday' },
    { label: 'Earnings', value: '₹12,480', note: '81% of daily target' },
    { label: 'Repeat clients', value: '63%', note: 'Strong retention this month' },
    { label: 'Avg. rating', value: '4.9', note: 'From 1,248 public reviews' }
  ];
}
