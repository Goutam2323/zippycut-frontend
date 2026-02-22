import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../../environments/environment';

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  createOrder(amount: number): Observable<RazorpayOrder> {
    return of({ id: `order_${Date.now()}`, amount, currency: 'INR' });
  }

  openCheckout(order: RazorpayOrder, onSuccess: (paymentId: string) => void, onFailure: () => void): void {
    const options = {
      key: environment.razorpayKey,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: 'ZippyCut',
      description: 'Booking payment',
      handler: (response: { razorpay_payment_id: string }) => onSuccess(response.razorpay_payment_id),
      modal: { ondismiss: onFailure }
    };

    if (window.Razorpay) {
      new window.Razorpay(options).open();
      return;
    }

    onFailure();
  }

  verifyPayment(_paymentId: string): Observable<boolean> {
    return of(true);
  }
}
