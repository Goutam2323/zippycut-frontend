import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  template: `<app-card title="Booking confirmed"><p>Your slot has been booked. A confirmation is sent via SMS and email.</p></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSuccessComponent {}
