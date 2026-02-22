export type UserRole = 'customer' | 'barber' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  token: string;
}
