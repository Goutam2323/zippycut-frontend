import { ChangeDetectionStrategy, Component } from '@angular/core';

interface BarberCard {
  id: number;
  name: string;
  area: string;
  distance: string;
  rating: string;
  reviews: string;
  priceHint: string;
  image: string;
  tag: string;
}

@Component({
  standalone: false,
  selector: 'app-barber-search',
  template: `
    <section class="zc-page search-page page-transition">
      <div class="search-topbar">
        <button class="zc-pill"><span>📍</span> Indiranagar, Bengaluru</button>
        <div class="search-box zc-panel">
          <span>🔎</span>
          <div>
            <strong>Search barbers, fades, beard care</strong>
            <small>Fast booking. Trusted ratings.</small>
          </div>
        </div>
      </div>

      <section class="hero zc-panel">
        <div class="hero__copy">
          <span class="zc-kicker">Premium grooming, simplified</span>
          <h1>Skip the wait. Book your barber.</h1>
          <p class="zc-muted">Discover verified shops, compare services, and lock your slot in under a minute.</p>
          <div class="hero__actions">
            <a class="zc-btn-primary" routerLink="/customer/barber/1">Book in seconds</a>
            <span class="hero__meta">4.9 avg rating · No waiting. No hassle.</span>
          </div>
        </div>
        <div class="hero__stats">
          <article>
            <strong>1200+</strong>
            <span>slots booked this week</span>
          </article>
          <article>
            <strong>15 min</strong>
            <span>average queue saved</span>
          </article>
          <article>
            <strong>Verified</strong>
            <span>reviews, pricing, timings</span>
          </article>
        </div>
      </section>

      <section>
        <div class="zc-section-title">
          <div>
            <span class="zc-kicker">🔥 Top Rated Near You</span>
            <h2>Best picks for today</h2>
          </div>
          <a class="zc-soft" routerLink="/customer/history">See all</a>
        </div>
        <div class="top-rated-row">
          <a *ngFor="let barber of topRated" class="barber-card barber-card--featured zc-panel" [routerLink]="['/customer/barber', barber.id]">
            <img [src]="barber.image" [alt]="barber.name" />
            <span class="rating-badge">⭐ {{ barber.rating }}</span>
            <div class="barber-card__body">
              <span class="tag">{{ barber.tag }}</span>
              <h3>{{ barber.name }}</h3>
              <p>{{ barber.area }} · {{ barber.distance }}</p>
              <div class="barber-card__meta">
                <span>{{ barber.priceHint }}</span>
                <span class="book-link">Book</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section>
        <div class="zc-section-title">
          <div>
            <span class="zc-kicker">📍 Nearby Barbers</span>
            <h2>Clean cuts around you</h2>
          </div>
        </div>
        <div class="nearby-list">
          <a *ngFor="let barber of nearby" class="barber-list-card zc-panel" [routerLink]="['/customer/barber', barber.id]">
            <img [src]="barber.image" [alt]="barber.name" />
            <div class="barber-list-card__body">
              <div class="barber-list-card__title">
                <div>
                  <h3>{{ barber.name }}</h3>
                  <p>{{ barber.area }} · {{ barber.distance }}</p>
                </div>
                <span class="rating-badge">⭐ {{ barber.rating }}</span>
              </div>
              <div class="barber-list-card__footer">
                <div>
                  <strong>{{ barber.priceHint }}</strong>
                  <small>{{ barber.reviews }} reviews</small>
                </div>
                <span class="zc-btn-secondary">Book</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </section>
  `,
  styles: [
    `
      .search-page { display: grid; gap: 32px; }
      .search-topbar { display: grid; gap: 16px; }
      .search-box { min-height: 72px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; }
      .search-box span { font-size: 1.2rem; }
      .search-box strong, .search-box small { display: block; }
      .search-box small { color: var(--zc-text-soft); }
      .hero {
        padding: 24px;
        display: grid;
        gap: 24px;
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(30, 41, 59, 0.92));
        color: white;
      }
      .hero h1 { font-size: clamp(2rem, 6vw, 4rem); line-height: 1.05; margin: 12px 0; }
      .hero p, .hero__meta, .hero__stats span { color: rgba(255,255,255,0.72); }
      .hero__actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 24px; }
      .hero__stats { display: grid; gap: 12px; }
      .hero__stats article { padding: 20px; border-radius: 16px; background: rgba(255,255,255,0.08); }
      .hero__stats strong { display:block; font-size: 1.2rem; margin-bottom: 8px; }
      .top-rated-row { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(260px, 82%); gap: 16px; overflow-x: auto; padding-bottom: 4px; }
      .barber-card, .barber-list-card { overflow: hidden; }
      .barber-card img { aspect-ratio: 4 / 5; object-fit: cover; }
      .barber-card__body, .barber-list-card__body { padding: 16px; }
      .rating-badge {
        position: absolute;
        top: 16px;
        right: 16px;
        min-height: 36px;
        padding: 0 12px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        background: rgba(255,255,255,0.94);
        box-shadow: var(--zc-shadow-1);
        color: var(--zc-primary);
        font-weight: 700;
      }
      .barber-card--featured { position: relative; }
      .barber-card__body { display: grid; gap: 10px; }
      .tag { color: var(--zc-accent); font-weight: 700; }
      .barber-card__meta, .barber-list-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      .book-link { color: var(--zc-primary); font-weight: 700; }
      .nearby-list { display: grid; gap: 16px; }
      .barber-list-card { display: grid; grid-template-columns: 116px minmax(0, 1fr); }
      .barber-list-card img { width: 100%; height: 100%; object-fit: cover; }
      .barber-list-card__body { display: grid; gap: 18px; }
      .barber-list-card__title { display:flex; gap: 12px; justify-content: space-between; }
      .barber-list-card__title p, .barber-card p, .barber-list-card small { color: var(--zc-text-soft); }
      @media (min-width: 960px) {
        .search-topbar { grid-template-columns: auto minmax(0, 1fr); align-items: center; }
        .hero { grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr); align-items: end; padding: 40px; }
        .top-rated-row { grid-auto-columns: minmax(280px, 1fr); }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberSearchComponent {
  readonly topRated: BarberCard[] = [
    { id: 1, name: 'Aurum Studio', area: 'Indiranagar', distance: '0.8 km', rating: '4.9', reviews: '820', priceHint: 'Haircut from ₹499', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80', tag: 'Signature fades' },
    { id: 2, name: 'Crown & Blade', area: 'Koramangala', distance: '1.2 km', rating: '4.8', reviews: '610', priceHint: 'Grooming from ₹399', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80', tag: 'Premium beard craft' },
    { id: 3, name: 'The Gentlemen’s Room', area: 'HSR Layout', distance: '2.1 km', rating: '4.9', reviews: '940', priceHint: 'Cut + wash ₹699', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80', tag: 'Luxury grooming' }
  ];

  readonly nearby: BarberCard[] = [
    { id: 4, name: 'Northline Barbers', area: 'Domlur', distance: '1.0 km', rating: '4.7', reviews: '340', priceHint: 'Starts at ₹299', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80', tag: 'Quick appointments' },
    { id: 5, name: 'Fade District', area: 'Ulsoor', distance: '1.5 km', rating: '4.8', reviews: '522', priceHint: 'Starts at ₹349', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80', tag: 'Skin fades' },
    { id: 6, name: 'Chapter One Men’s Salon', area: 'MG Road', distance: '2.0 km', rating: '4.6', reviews: '280', priceHint: 'Starts at ₹449', image: 'https://images.unsplash.com/photo-1512690459411-b0fd1c86b8ec?auto=format&fit=crop&w=900&q=80', tag: 'Executive grooming' }
  ];
}
