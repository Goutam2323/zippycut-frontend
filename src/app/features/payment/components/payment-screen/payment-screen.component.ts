import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-payment-screen',
  template: `
    <section class="zc-page payment-page page-transition">
      <div class="payment-header">
        <div>
          <span class="zc-kicker">Step 3 of 3</span>
          <h1>Confirm Booking</h1>
          <p class="zc-muted">Review the essentials, choose payment, and confirm with confidence.</p>
        </div>
      </div>

      <div class="payment-layout">
        <article class="checkout-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Booking summary</span>
              <h2>Safe to pay</h2>
            </div>
          </div>
          <div class="summary-card">
            <div><span>Barber</span><strong>Aurum Studio</strong></div>
            <div><span>Service</span><strong>Precision Haircut</strong></div>
            <div><span>Time</span><strong>Today · 10:00 AM</strong></div>
          </div>
          <div class="advance-note">
            <strong>Advance payment ₹149</strong>
            <p>Reserves your slot instantly. Pay the balance at the shop.</p>
          </div>
        </article>

        <article class="checkout-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Payment method</span>
              <h2>Choose how you pay</h2>
            </div>
          </div>
          <button *ngFor="let method of methods" class="payment-option" [class.is-selected]="selectedMethod === method" (click)="selectedMethod = method">
            <div>
              <strong>{{ method }}</strong>
              <p>{{ descriptions[method] }}</p>
            </div>
            <span>{{ selectedMethod === method ? '●' : '○' }}</span>
          </button>
          <button class="zc-btn-primary confirm-btn" (click)="confirmBooking()">Confirm Booking</button>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .payment-page, .payment-layout { display:grid; gap: 24px; }
      .checkout-card { padding: 24px; display:grid; gap: 20px; }
      .summary-card, .advance-note { padding: 20px; border-radius: 16px; background: var(--zc-surface-soft); }
      .summary-card { display:grid; gap: 16px; }
      .summary-card div { display:flex; justify-content:space-between; gap: 16px; }
      .summary-card span, .advance-note p, .payment-option p { color: var(--zc-text-soft); }
      .payment-option {
        width: 100%;
        border: 0;
        border-radius: 16px;
        padding: 18px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background: var(--zc-surface-soft);
        text-align:left;
        cursor:pointer;
      }
      .payment-option.is-selected { background: var(--zc-accent-soft); }
      .confirm-btn { width: 100%; margin-top: 8px; }
      @media (min-width: 960px) { .payment-layout { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentScreenComponent {
  readonly methods = ['UPI', 'Card', 'Pay at shop'] as const;
  readonly descriptions: Record<(typeof this.methods)[number], string> = {
    UPI: 'Fastest option. Works with all major UPI apps.',
    Card: 'Credit or debit card with secure processing.',
    'Pay at shop': 'Reserve with confidence and pay on arrival.'
  };

  selectedMethod: (typeof this.methods)[number] = 'UPI';

  constructor(private readonly router: Router) {}

  confirmBooking(): void {
    void this.router.navigate(['/payment/success']);
  }
}
