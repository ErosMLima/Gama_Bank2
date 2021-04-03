import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';
import { User } from '../../site/interfaces/createAccount.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  show = true;
  user: User;

  // hiddenCard = false;

  constructor(
    private authService: AuthService,
  ) { }

  // btnHide() {
  //   this.hiddenCard = true;
  // }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logOut();
  }

  btnHide() {
    this.show = !this.show;
  }

}
