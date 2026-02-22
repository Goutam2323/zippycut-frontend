import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'customer',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['customer'] },
    loadChildren: () => import('./features/customer/customer.module').then((m) => m.CustomerModule)
  },
  {
    path: 'barber',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['barber'] },
    loadChildren: () => import('./features/barber/barber.module').then((m) => m.BarberModule)
  },

  {
    path: 'payment',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/payment/payment.module').then((m) => m.PaymentModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
