import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AdminDashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageBarbersComponent } from './components/manage-barbers/manage-barbers.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'users', component: ManageUsersComponent },
  { path: 'barbers', component: ManageBarbersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [AdminDashboardComponent, ManageUsersComponent, ManageBarbersComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
