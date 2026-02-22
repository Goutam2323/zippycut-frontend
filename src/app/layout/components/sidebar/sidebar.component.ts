import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<mat-nav-list><a mat-list-item routerLink="/customer/search">Find Barbers</a><a mat-list-item routerLink="/customer/history">My Bookings</a><a mat-list-item routerLink="/barber/dashboard">Barber Dashboard</a><a mat-list-item routerLink="/admin/dashboard">Admin</a></mat-nav-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
