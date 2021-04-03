import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { User } from 'src/app/modules/site/interfaces/createAccount.interface';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit {

  showValue = false;
  user: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logOut();
  }

  btnHide() {
    this.showValue = !this.showValue;
  }
}
