import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./features/customer/customer.module').then((m) => m.CustomerModule)
  },
  {
    path: 'barber',
    loadChildren: () => import('./features/barber/barber.module').then((m) => m.BarberModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./features/payment/payment.module').then((m) => m.PaymentModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'customer/search' },
  { path: '**', redirectTo: 'customer/search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
