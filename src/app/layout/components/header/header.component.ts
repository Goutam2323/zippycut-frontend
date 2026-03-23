import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  template: `
    <header class="shell-header">
      <div class="shell-header__inner">
        <a class="brand" routerLink="/customer/search" aria-label="ZippyCut home">
          <span class="brand__icon">Z</span>
          <span>
            <strong>ZippyCut</strong>
            <small>Book in seconds</small>
          </span>
        </a>

        <nav class="shell-header__nav" aria-label="Primary">
          <a routerLink="/customer/search" routerLinkActive="is-active">Home</a>
          <a routerLink="/customer/history" routerLinkActive="is-active">Bookings</a>
          <a routerLink="/barber/dashboard" routerLinkActive="is-active">Barber Pro</a>
        </nav>

        <a class="shell-header__cta" routerLink="/customer/barber/1">Book now</a>
      </div>
    </header>
  `,
  styles: [
    `
      .shell-header {
        position: sticky;
        top: 0;
        z-index: 20;
        padding: 16px 16px 0;
      }
      .shell-header__inner {
        width: min(calc(100% - 0px), 1240px);
        margin: 0 auto;
        min-height: 72px;
        padding: 12px 16px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: blur(18px);
        box-shadow: var(--zc-shadow-1);
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }
      .brand__icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, var(--zc-primary), #1e293b);
        color: white;
        font-weight: 800;
      }
      .brand strong,
      .brand small {
        display: block;
      }
      .brand small {
        color: var(--zc-text-soft);
      }
      .shell-header__nav {
        display: none;
        align-items: center;
        gap: 8px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.04);
      }
      .shell-header__nav a,
      .shell-header__cta {
        min-height: 44px;
        padding: 0 16px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
      }
      .shell-header__nav a.is-active {
        background: #fff;
        box-shadow: var(--zc-shadow-1);
      }
      .shell-header__cta {
        background: var(--zc-primary);
        color: white;
        box-shadow: var(--zc-shadow-2);
      }
      @media (min-width: 900px) {
        .shell-header__nav {
          display: inline-flex;
        }
      }
      @media (max-width: 640px) {
        .brand small,
        .shell-header__cta {
          display: none;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
