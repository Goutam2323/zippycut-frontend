import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-booking-flow',
  templateUrl: './booking-flow.component.html',
  styleUrls: ['./booking-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingFlowComponent {
  readonly dates = [
    { day: 'Today', date: '23 Mar' },
    { day: 'Mon', date: '24 Mar' },
    { day: 'Tue', date: '25 Mar' },
    { day: 'Wed', date: '26 Mar' },
    { day: 'Thu', date: '27 Mar' }
  ];

  readonly services = [
    { name: 'Precision Haircut', price: '₹499', duration: '45 min' },
    { name: 'Haircut + Beard Combo', price: '₹699', duration: '60 min' },
    { name: 'Beard Sculpt', price: '₹299', duration: '25 min' }
  ];

  readonly slots = [
    { time: '09:30 AM', state: 'available' },
    { time: '10:00 AM', state: 'selected' },
    { time: '10:30 AM', state: 'booked' },
    { time: '11:00 AM', state: 'available' },
    { time: '11:30 AM', state: 'available' },
    { time: '12:00 PM', state: 'booked' },
    { time: '12:30 PM', state: 'available' },
    { time: '01:00 PM', state: 'available' }
  ] as const;

  selectedDate = this.dates[0];
  selectedService = this.services[0];
  selectedSlot = '10:00 AM';

  constructor(private readonly router: Router) {}

  chooseDate(index: number): void {
    this.selectedDate = this.dates[index];
  }

  chooseService(index: number): void {
    this.selectedService = this.services[index];
  }

  chooseSlot(time: string, state: string): void {
    if (state === 'booked') return;
    this.selectedSlot = time;
  }

  proceedToPayment(): void {
    void this.router.navigate(['/payment']);
  }
}
