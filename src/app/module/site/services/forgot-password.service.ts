import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../shared/services/auth/auth.service';
import { ForgotPassword } from '../interfaces/forgotPassword.interface';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  API_URL = environment.API_URL;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  changePassword(usuario: ForgotPassword) {
    return this.http.post(`${this.API_URL}/altera-senha`, usuario, {
      params: {
        senhaTemporaria: this.authService.getNewPassword(),
      }
    });
  }
}
