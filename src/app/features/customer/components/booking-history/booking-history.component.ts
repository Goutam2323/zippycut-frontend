import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-booking-history',
  template: `
    <section class="zc-page page-transition history-page">
      <div class="history-header">
        <div>
          <span class="zc-kicker">Bookings</span>
          <h1>Your grooming schedule</h1>
          <p class="zc-muted">Everything upcoming, everything completed, and a quick rebook flow for your usual cut.</p>
        </div>
        <div class="tab-row zc-panel">
          <button class="tab is-active">Upcoming</button>
          <button class="tab">Completed</button>
        </div>
      </div>

      <div class="history-list">
        <article class="booking-card zc-panel" *ngFor="let booking of bookings">
          <div>
            <span class="status">{{ booking.status }}</span>
            <h3>{{ booking.barber }}</h3>
            <p>{{ booking.service }} · {{ booking.time }}</p>
          </div>
          <div class="booking-card__actions">
            <div>
              <strong>{{ booking.price }}</strong>
              <small>{{ booking.location }}</small>
            </div>
            <a class="zc-btn-secondary" routerLink="/customer/booking/1">Rebook</a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .history-page, .history-list { display:grid; gap: 20px; }
      .history-header { display:grid; gap: 16px; }
      .tab-row { width: fit-content; padding: 6px; display:flex; gap: 6px; }
      .tab { min-height: 44px; padding: 0 16px; border: 0; border-radius: 999px; background: transparent; color: var(--zc-text-soft); font-weight: 700; }
      .tab.is-active { background: white; color: var(--zc-primary); box-shadow: var(--zc-shadow-1); }
      .booking-card { padding: 24px; display:grid; gap: 16px; }
      .booking-card p, .booking-card small { color: var(--zc-text-soft); }
      .status { display:inline-flex; min-height: 32px; padding: 0 12px; border-radius: 999px; align-items:center; background: var(--zc-accent-soft); color: var(--zc-accent); font-weight: 700; margin-bottom: 12px; }
      .booking-card__actions { display:flex; align-items:center; justify-content:space-between; gap: 16px; }
      @media (min-width: 900px) { .history-header { grid-template-columns: 1fr auto; align-items:end; } }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHistoryComponent {
  readonly bookings = [
    { status: 'Upcoming', barber: 'Aurum Studio', service: 'Haircut + Beard Combo', time: 'Today · 10:00 AM', price: '₹699 paid', location: 'Indiranagar, Bengaluru' },
    { status: 'Upcoming', barber: 'Fade District', service: 'Precision Haircut', time: 'Thu · 6:30 PM', price: '₹499 pending', location: 'Ulsoor, Bengaluru' },
    { status: 'Completed', barber: 'Crown & Blade', service: 'Beard Sculpt', time: '18 Mar · 8:30 PM', price: '₹299 paid', location: 'Koramangala, Bengaluru' }
  ];
}
