import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false, selector: 'app-manage-barbers', template: '<app-card title="Manage barbers">Approve barber onboarding and monitor quality.</app-card>', changeDetection: ChangeDetectionStrategy.OnPush })
export class ManageBarbersComponent {}
