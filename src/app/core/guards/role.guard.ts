import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = (route.data['roles'] as string[]) ?? [];
    if (this.authService.hasRole(allowedRoles)) return true;
    void this.router.navigate(['/auth/login']);
    return false;
  }
}
