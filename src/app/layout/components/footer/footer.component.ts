import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer',
  template: `
    <footer class="floating-nav-wrap">
      <nav class="floating-nav" aria-label="Bottom navigation">
        <a routerLink="/customer/search" routerLinkActive="is-active">
          <span>🏠</span>
          <strong>Home</strong>
        </a>
        <a routerLink="/customer/history" routerLinkActive="is-active">
          <span>📜</span>
          <strong>Bookings</strong>
        </a>
        <a routerLink="/barber/dashboard" routerLinkActive="is-active">
          <span>💈</span>
          <strong>Profile</strong>
        </a>
      </nav>
    </footer>
  `,
  styles: [
    `
      .floating-nav-wrap {
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 16px;
        z-index: 30;
        display: flex;
        justify-content: center;
        pointer-events: none;
      }
      .floating-nav {
        width: min(100%, 440px);
        min-height: 72px;
        padding: 10px;
        border-radius: 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        pointer-events: auto;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(20px);
        box-shadow: var(--zc-shadow-2);
      }
      .floating-nav a {
        border-radius: 18px;
        display: grid;
        gap: 2px;
        place-items: center;
        padding: 10px 8px;
        color: var(--zc-text-soft);
      }
      .floating-nav a.is-active {
        background: rgba(15, 23, 42, 0.06);
        color: var(--zc-primary);
      }
      .floating-nav span {
        font-size: 1.1rem;
      }
      .floating-nav strong {
        font-size: 0.86rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
