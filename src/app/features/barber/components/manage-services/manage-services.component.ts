import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-manage-services', template: '<app-card title="Manage services">Add, edit, and price grooming services.</app-card>', changeDetection: ChangeDetectionStrategy.OnPush })
export class ManageServicesComponent {}
