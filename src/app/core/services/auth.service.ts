import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthUser, UserRole } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userKey = 'zc_user';
  private readonly userSubject = new BehaviorSubject<AuthUser | null>(this.getStoredUser());

  readonly user$ = this.userSubject.asObservable();

  login(email: string, password: string): Observable<AuthUser> {
    const role: UserRole = email.includes('admin') ? 'admin' : email.includes('barber') ? 'barber' : 'customer';
    const user: AuthUser = { id: '1', email, name: 'Zippy User', role, token: `demo-jwt-${password}` };
    return of(user).pipe(tap((payload) => this.setUser(payload)));
  }

  register(name: string, email: string): Observable<AuthUser> {
    const user: AuthUser = { id: crypto.randomUUID(), email, name, role: 'customer', token: 'demo-jwt' };
    return of(user).pipe(tap((payload) => this.setUser(payload)));
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return Boolean(this.userSubject.value?.token);
  }

  hasRole(roles: string[]): boolean {
    return !!this.userSubject.value && roles.includes(this.userSubject.value.role);
  }

  getToken(): string | null {
    return this.userSubject.value?.token ?? null;
  }

  private setUser(user: AuthUser): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
  }

  private getStoredUser(): AuthUser | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  }
}
