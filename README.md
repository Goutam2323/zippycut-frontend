# ZippyCut Frontend (Angular)

Production-oriented Angular SaaS scaffold for a hyperlocal barber booking platform.

## Folder structure

```text
src/
  app/
    config/
      theme.scss
    core/
      guards/
      interceptors/
      models/
      services/
      core.module.ts
    shared/
      components/
      pipes/
      shared.module.ts
    layout/
      components/
      layout-shell/
      layout.module.ts
    features/
      auth/
      customer/
      barber/
      admin/
      payment/
    app-routing.module.ts
    app.module.ts
```

## Key architecture highlights

- Lazy-loaded feature modules (`auth`, `customer`, `barber`, `admin`, `payment`)
- Centralized `core` for auth, guards, interceptors, notifications, loading and HTTP abstraction
- `shared` module with reusable UI primitives and pipe
- Material-based global theme with spacing/radius tokens and dark mode toggle
- Reactive forms with strict typing and validation-first UX
- Booking stepper flow + Razorpay integration service example

## Production readiness checklist implemented

- Strict TypeScript compiler options
- OnPush change detection in component layer where possible
- Role-based route guard + JWT interceptor
- Global error interceptor/snackbar notifications
- Environment-based API and Razorpay configuration
- Bundle budget and production optimization in `angular.json`
