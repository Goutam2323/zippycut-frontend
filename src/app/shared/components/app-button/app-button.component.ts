import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-flat-button class="zc-btn-primary" [color]="color" [disabled]="disabled" [attr.aria-label]="ariaLabel"><ng-content></ng-content></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
  @Input() color: 'primary' | 'accent' = 'primary';
  @Input() disabled = false;
  @Input() ariaLabel = 'Action button';
}
