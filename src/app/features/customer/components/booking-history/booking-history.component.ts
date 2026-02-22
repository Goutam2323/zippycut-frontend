import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  template: `<app-card title="Booking history"><p>Track completed, upcoming, and canceled appointments with real-time status updates.</p></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHistoryComponent {}
