import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../../../core/services/notification.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-screen',
  template: `<app-card title="Complete payment"><p>Secure checkout powered by Razorpay.</p><app-button [disabled]="loading" (click)="payNow()" ariaLabel="Pay now">{{ loading ? 'Initializing...' : 'Pay ₹399' }}</app-button></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentScreenComponent {
  loading = false;

  constructor(private readonly paymentService: PaymentService, private readonly notify: NotificationService, private readonly router: Router) {}

  payNow(): void {
    if (this.loading) return;
    this.loading = true;
    this.paymentService.createOrder(39900).subscribe((order) => {
      this.paymentService.openCheckout(
        order,
        (paymentId) => {
          this.paymentService.verifyPayment(paymentId).subscribe(() => {
            this.notify.success('Payment successful. Booking confirmed!');
            void this.router.navigate(['/payment/success']);
          });
        },
        () => {
          this.loading = false;
          this.notify.error('Payment canceled or failed. Please retry.');
        }
      );
    });
  }
}
