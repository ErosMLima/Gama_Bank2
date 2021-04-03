import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { Lancamentos } from '../../../interfaces/lancamentos.interface';
import { Plans } from '../../../interfaces/plans.interface';


@Injectable({
  providedIn: 'root',
})
export class DepositsService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getDeposits(lancamento: Lancamentos) {
    const user = this.authService.getUser();
    const conta = this.authService.getContaCredito();
    const info = {
      login: user.login,
      conta: conta.id,
      data: lancamento.data,
      planoConta: lancamento.planoConta,
      descricao: lancamento.descricao,
      valor: lancamento.valor
    };

    const headers = new HttpHeaders ({
      Authorization: this.authService.getToken()
    });
    const httpOptions = {
      headers,
    };

    return this.http.post<any>(`${this.API_URL}/lancamentos`, info, httpOptions);
  }

  getPlanAccount() {
    const user = this.authService.getUser();
    const headers = new HttpHeaders ({
      Authorization: this.authService.getToken()
    });
    const params = new HttpParams().set('login', user.login);
    const httpOptions = {
      headers,
      params
    };

    return this.http.get<Plans[]>(`${this.API_URL}/lancamentos/planos-conta`, httpOptions);
  }

}
