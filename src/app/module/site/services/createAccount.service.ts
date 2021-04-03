import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/createAccount.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  createAccount(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let httpOptions = {
      headers: headers,
    };
    return this.http.post<User>(`${this.API_URL}/usuarios`, user, httpOptions);
  }

}

// https://developer.atlassian.com/server/crowd/json-requests-and-responses/
