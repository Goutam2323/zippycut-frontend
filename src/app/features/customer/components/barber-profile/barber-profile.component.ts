import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-barber-profile',
  template: `
    <section class="zc-page profile-page page-transition">
      <div class="cover-card zc-panel">
        <img src="https://images.unsplash.com/photo-1512690459411-b0fd1c86b8ec?auto=format&fit=crop&w=1200&q=80" alt="ZippyCut premium barber studio" />
        <div class="info-card zc-panel">
          <span class="zc-kicker">Trusted barber partner</span>
          <h1>Aurum Studio</h1>
          <div class="trust-row">
            <span class="zc-pill">⭐ 4.9 rating</span>
            <span class="zc-pill">1,248 reviews</span>
            <span class="zc-pill">Open until 10:00 PM</span>
          </div>
          <p class="zc-muted">Classic cuts, premium fades, and beard styling with zero guesswork. Skilled barbers, clean stations, and punctual slot management.</p>
        </div>
      </div>

      <section class="detail-grid">
        <article class="about-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Why customers trust this shop</span>
              <h2>Built for reliability</h2>
            </div>
          </div>
          <div class="trust-points">
            <div><strong>5 min</strong><span>average check-in delay</span></div>
            <div><strong>98%</strong><span>on-time appointments</span></div>
            <div><strong>Sanitized</strong><span>tools after every session</span></div>
          </div>
        </article>

        <article class="services-card zc-panel">
          <div class="zc-section-title">
            <div>
              <span class="zc-kicker">Services</span>
              <h2>Select your service</h2>
            </div>
          </div>
          <div class="service-list">
            <div class="service-item" *ngFor="let service of services">
              <div>
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
              </div>
              <div class="service-item__meta">
                <strong>{{ service.price }}</strong>
                <span>{{ service.duration }}</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <div class="sticky-cta zc-panel">
        <div>
          <strong>Ready in 3 simple steps</strong>
          <p class="zc-soft">Select service, choose slot, confirm.</p>
        </div>
        <a class="zc-btn-primary" routerLink="/customer/booking/1">Select Service</a>
      </div>
    </section>
  `,
  styles: [
    `
      .profile-page { display:grid; gap: 24px; }
      .cover-card { position: relative; overflow: visible; }
      .cover-card img { width: 100%; height: min(48vw, 380px); object-fit: cover; border-radius: 16px; }
      .info-card { width: calc(100% - 32px); margin: -56px auto 0; padding: 24px; position: relative; z-index: 1; }
      .trust-row { display:flex; flex-wrap:wrap; gap: 8px; margin: 16px 0; }
      .detail-grid { display:grid; gap: 24px; }
      .about-card, .services-card { padding: 24px; }
      .trust-points { display:grid; gap: 16px; }
      .trust-points div, .service-item { padding: 18px; border-radius: 16px; background: var(--zc-surface-soft); }
      .trust-points strong, .service-item strong { display:block; font-size: 1.1rem; margin-bottom: 8px; }
      .trust-points span, .service-item p, .service-item span { color: var(--zc-text-soft); }
      .service-list { display:grid; gap: 12px; }
      .service-item { display:flex; justify-content:space-between; gap: 16px; align-items:center; }
      .service-item__meta { text-align:right; }
      .sticky-cta { position: sticky; bottom: 100px; padding: 16px; display:flex; gap: 16px; align-items:center; justify-content:space-between; }
      @media (min-width: 900px) {
        .detail-grid { grid-template-columns: 0.8fr 1.2fr; }
        .trust-points { grid-template-columns: repeat(3, 1fr); }
        .info-card { width: min(720px, calc(100% - 48px)); margin-left: 24px; }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberProfileComponent {
  readonly services = [
    { name: 'Precision Haircut', description: 'Consultation, fade or scissor cut, and finish styling.', price: '₹499', duration: '45 min' },
    { name: 'Beard Sculpt', description: 'Shape, detail cleanup, and nourishing beard finish.', price: '₹299', duration: '25 min' },
    { name: 'Haircut + Beard Combo', description: 'Complete grooming session for a polished look.', price: '₹699', duration: '60 min' },
    { name: 'Head Massage + Wash', description: 'Relaxing scalp massage followed by rinse and style.', price: '₹399', duration: '30 min' }
  ];
}
