import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppButtonComponent } from './components/app-button/app-button.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [AppButtonComponent, AppCardComponent, FormInputComponent, ConfirmationDialogComponent, PricePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    AppButtonComponent,
    AppCardComponent,
    FormInputComponent,
    ConfirmationDialogComponent,
    PricePipe
  ]
})
export class SharedModule {}
