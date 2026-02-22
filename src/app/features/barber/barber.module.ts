import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from '../../shared/shared.module';
import { BarberDashboardComponent } from './components/dashboard/dashboard.component';
import { ManageServicesComponent } from './components/manage-services/manage-services.component';
import { ManageSlotsComponent } from './components/manage-slots/manage-slots.component';
import { BarberBookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: 'dashboard', component: BarberDashboardComponent },
  { path: 'services', component: ManageServicesComponent },
  { path: 'slots', component: ManageSlotsComponent },
  { path: 'bookings', component: BarberBookingsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [BarberDashboardComponent, ManageServicesComponent, ManageSlotsComponent, BarberBookingsComponent],
  imports: [CommonModule, SharedModule, NgChartsModule, RouterModule.forChild(routes)]
})
export class BarberModule {}
