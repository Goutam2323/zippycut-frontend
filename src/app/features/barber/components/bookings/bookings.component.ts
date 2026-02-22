import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-barber-bookings', template: '<app-card title="Bookings"><p>Table and filters for booking management.</p></app-card>', changeDetection: ChangeDetectionStrategy.OnPush })
export class BarberBookingsComponent {}
