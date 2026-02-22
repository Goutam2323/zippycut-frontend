import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar color="primary"><button mat-icon-button (click)="menuToggle.emit()" aria-label="Open navigation"><mat-icon>menu</mat-icon></button><span>ZippyCut</span><span class="spacer"></span><button mat-icon-button aria-label="Toggle theme" (click)="themeToggle.emit()"><mat-icon>dark_mode</mat-icon></button></mat-toolbar>`,
  styles: ['.spacer{flex:1 1 auto}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<void>();
}
