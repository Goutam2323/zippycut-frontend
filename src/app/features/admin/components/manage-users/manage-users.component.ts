import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-manage-users', template: '<app-card title="Manage users">Enable admin controls for user accounts.</app-card>', changeDetection: ChangeDetectionStrategy.OnPush })
export class ManageUsersComponent {}
