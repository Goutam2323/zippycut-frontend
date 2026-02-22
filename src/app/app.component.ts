import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-layout-shell></app-layout-shell>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
