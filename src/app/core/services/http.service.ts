import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiBaseService } from './api-base.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly http: HttpClient, private readonly apiBase: ApiBaseService) {}

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiBase.baseUrl}${endpoint}`, { params });
  }

  post<T, U>(endpoint: string, payload: U): Observable<T> {
    return this.http.post<T>(`${this.apiBase.baseUrl}${endpoint}`, payload);
  }
}
