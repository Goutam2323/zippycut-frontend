import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<footer class="footer">© {{ year }} ZippyCut · Built for speed and accessibility</footer>',
  styles: ['.footer{padding:16px;color:var(--zc-muted);text-align:center;font-size:12px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
