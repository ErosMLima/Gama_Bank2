import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { RequestNewPassword } from './../interfaces/requestNewPassword.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestNewPasswordService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  requestNewPassword(novaSenha: RequestNewPassword) {
    return this.http.post<string>(`${this.API_URL}/nova-senha`, novaSenha);
    // .pipe(
    //   tap((response) => {
    //     this.authService.setNewTemporaryPassword(response);
    //     this.router.navigate(['/forgot-password']);
    //   })
    // );
  }
}
