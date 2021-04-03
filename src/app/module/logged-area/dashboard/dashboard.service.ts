import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { Dashboard } from './../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getDashboard(inicio: string, fim: string) {
    const user = this.authService.getUser();
    return this.http.get<Dashboard>(`${this.API_URL}/dashboard`, {
      headers: {
        Authorization: this.authService.getToken(),
      },
      params: {
        inicio,
        fim,
        login: user.login,
      },
    });
  }
}
