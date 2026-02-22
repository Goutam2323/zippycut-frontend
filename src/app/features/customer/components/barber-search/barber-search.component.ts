import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-barber-search',
  template: `<app-card title="Find nearby barbers"><p>Use your location to discover top-rated barbers in minutes.</p><app-button routerLink="/customer/booking/1" ariaLabel="Start booking">Book now</app-button></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberSearchComponent {}
