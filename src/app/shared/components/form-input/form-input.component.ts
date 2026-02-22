import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>{{ label }}</mat-label>
      <input matInput [type]="type" [formControl]="control" [placeholder]="placeholder" [attr.aria-label]="label" />
      <mat-error *ngIf="control.invalid && control.touched">{{ errorText }}</mat-error>
    </mat-form-field>
  `,
  styles: ['.w-full{width:100%;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() errorText = 'Invalid value';
}
