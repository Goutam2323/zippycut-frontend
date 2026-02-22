import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-manage-slots', template: '<app-card title="Manage slots">Open, close, or block appointment slots.</app-card>', changeDetection: ChangeDetectionStrategy.OnPush })
export class ManageSlotsComponent {}
