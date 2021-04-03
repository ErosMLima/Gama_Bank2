import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/site/interfaces/createAccount.interface';

import { ContaBanco } from './../../../logged-area/interfaces/contaBanco.interface';
import { ContaCredito } from './../../../logged-area/interfaces/contaCredito.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;
  temporaryPassword: string;

  contaBanco: ContaBanco;
  contaCredito: ContaCredito;

  constructor(
    private router: Router,
  ) { }

  setUser(user: User){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      this.user = JSON.parse(savedUser);
      return this.user;
    }

    return null;
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const savedToken = localStorage.getItem('token');

    if (savedToken) {
      this.token = savedToken;
      return this.token;
    }

    return null;
  }

  isLogged(): boolean {
    return this.getUser() && this.getToken() ? true : false;
    // if (this.getUser() && this.getToken()) {
    //   return true;
    // }

    // return false;
  }

  setNewTemporaryPassword(temporaryPassword: string) {
    this.temporaryPassword = temporaryPassword;
    localStorage.setItem('senhaTemporaria', temporaryPassword);
  }

  getNewTemporaryPassword() {
    if (this.temporaryPassword) {
      return this.temporaryPassword;
    }

    const savedTemporaryPassword = localStorage.getItem('senhaTemporaria');

    if (savedTemporaryPassword) {
      this.temporaryPassword = savedTemporaryPassword;
      return this.temporaryPassword;
    }

    return null;
  }

  getNewPassword(){
    return localStorage.getItem('senhaTemporaria');
  }

  logOut() {
    this.user = null;
    this.token = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }



  setContaBanco(contaBanco: ContaBanco) {
    this.contaBanco = contaBanco;
    localStorage.setItem('contaBanco', JSON.stringify(contaBanco));
  }

  getContaBanco() {
    if (this.contaBanco) {
      return this.contaBanco;
    }

    const savedAccount = localStorage.getItem('contaBanco');

    if (savedAccount) {
      this.contaBanco = JSON.parse(savedAccount);
      return this.contaBanco;
    }
    return null;
  }

  setContaCredito(contaCredito: ContaCredito){
    this.contaCredito = contaCredito;
    localStorage.setItem('contaCredito', JSON.stringify(contaCredito));
  }

  getContaCredito() {
    if (this.contaCredito) {
      return this.contaCredito;
    }

    const savedAccount = localStorage.getItem('contaCredito');

    if (savedAccount) {
      this.contaCredito = JSON.parse(savedAccount);
      return this.contaCredito;
    }
    return null;
  }






}
