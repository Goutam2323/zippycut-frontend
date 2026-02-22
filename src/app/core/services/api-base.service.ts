import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiBaseService {
  get baseUrl(): string {
    return environment.apiUrl;
  }
}
