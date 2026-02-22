import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<mat-card class="zc-elevated app-card"><ng-container *ngIf="title"><h3>{{ title }}</h3></ng-container><ng-content></ng-content></mat-card>`,
  styles: ['.app-card{border-radius:12px;padding:16px;background:var(--zc-surface);}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCardComponent {
  @Input() title = '';
}
