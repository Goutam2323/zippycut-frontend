import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-barber-profile',
  template: `<app-card title="Barber profile"><p>Services, ratings, and availability are shown here for informed booking.</p></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberProfileComponent {}
