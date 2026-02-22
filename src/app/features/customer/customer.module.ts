import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '../../shared/shared.module';
import { BarberSearchComponent } from './components/barber-search/barber-search.component';
import { BarberProfileComponent } from './components/barber-profile/barber-profile.component';
import { BookingFlowComponent } from './components/booking-flow/booking-flow.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';

const routes: Routes = [
  { path: 'search', component: BarberSearchComponent },
  { path: 'barber/:id', component: BarberProfileComponent },
  { path: 'booking/:id', component: BookingFlowComponent },
  { path: 'history', component: BookingHistoryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  declarations: [BarberSearchComponent, BarberProfileComponent, BookingFlowComponent, BookingHistoryComponent],
  imports: [CommonModule, SharedModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, RouterModule.forChild(routes)]
})
export class CustomerModule {}
