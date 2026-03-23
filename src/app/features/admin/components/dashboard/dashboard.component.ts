import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-dashboard',
  template: `
    <section class="zc-page page-transition" style="display:grid;gap:24px;">
      <div class="zc-panel" style="padding:24px;display:grid;gap:16px;">
        <span class="zc-kicker">Admin overview</span>
        <h1 style="margin:0;">Platform analytics at a glance</h1>
        <p class="zc-muted">A concise command center for supply, demand, and quality metrics.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;">
          <div class="zc-panel" style="padding:20px;background:var(--zc-surface-soft);"><strong>184</strong><br><span class="zc-soft">Bookings this month</span></div>
          <div class="zc-panel" style="padding:20px;background:var(--zc-surface-soft);"><strong>52</strong><br><span class="zc-soft">Active barber partners</span></div>
          <div class="zc-panel" style="padding:20px;background:var(--zc-surface-soft);"><strong>4.8</strong><br><span class="zc-soft">Average platform rating</span></div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {}
