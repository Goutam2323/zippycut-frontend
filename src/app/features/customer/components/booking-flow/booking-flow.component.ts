import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-flow',
  templateUrl: './booking-flow.component.html',
  styleUrls: ['./booking-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingFlowComponent {
  processing = false;
  readonly detailsForm = this.fb.nonNullable.group({
    service: ['Haircut', Validators.required],
    date: [new Date(), Validators.required],
    slot: ['10:00 AM', Validators.required]
  });

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {}

  proceedToPayment(): void {
    if (this.processing || this.detailsForm.invalid) return;
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
      void this.router.navigate(['/payment']);
    }, 650);
  }
}
