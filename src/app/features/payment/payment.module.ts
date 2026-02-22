import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { PaymentScreenComponent } from './components/payment-screen/payment-screen.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';

const routes: Routes = [
  { path: '', component: PaymentScreenComponent },
  { path: 'success', component: PaymentSuccessComponent }
];

@NgModule({
  declarations: [PaymentScreenComponent, PaymentSuccessComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class PaymentModule {}
