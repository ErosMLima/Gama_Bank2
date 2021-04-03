import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from 'src/app/modules/logged-area/interfaces/plans.interface';
import { environment } from 'src/environments/environment';

import { AuthService } from './../../../../shared/services/auth/auth.service';
import { CreatePlan } from './../../../interfaces/createPlan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private token: AuthService,
  ) { }


  getPlans() {
    const user = this.token.getUser();
    const headers = new HttpHeaders({
      Authorization: this.token.getToken()
    });
    const params = new HttpParams().set('login', user.login);
    const httpOptions = {
      headers,
      params
    };

    return this.http.get<Plans[]>(`${this.API_URL}/lancamentos/planos-conta`, httpOptions);
  }

  createPlan(plan: CreatePlan) {
    const user = this.token.getUser();
    const headers = new HttpHeaders({
      Authorization: this.token.getToken()
    });
    const params = new HttpParams().set('login', user.login);
    const httpOptions = {
      headers,
      params
    };
    return this.http.post<CreatePlan>(`${this.API_URL}/lancamentos/planos-conta`, plan, httpOptions);
  }
}
