import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-payment-success',
  template: `
    <section class="zc-page success-page page-transition">
      <article class="success-card zc-panel">
        <div class="success-icon">✓</div>
        <span class="zc-kicker">Booking confirmed</span>
        <h1>Your slot is booked</h1>
        <p class="zc-muted">You’re all set for today at 10:00 AM. Confirmation shared on WhatsApp and SMS.</p>
        <a class="zc-btn-primary" routerLink="/customer/history">View bookings</a>
      </article>
    </section>
  `,
  styles: [
    `
      .success-page { min-height: 70vh; display:grid; place-items:center; }
      .success-card { width: min(100%, 520px); padding: 40px 24px; display:grid; justify-items:center; gap: 16px; text-align:center; }
      .success-icon { width: 88px; height: 88px; border-radius: 28px; display:grid; place-items:center; background: var(--zc-accent-soft); color: var(--zc-accent); font-size: 2.5rem; font-weight: 800; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSuccessComponent {}
