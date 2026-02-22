import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService, private readonly router: Router) {}

  submit(): void {
    if (this.form.invalid) return;
    const { name, email } = this.form.getRawValue();
    this.auth.register(name, email).subscribe(() => void this.router.navigate(['/customer/search']));
  }
}
