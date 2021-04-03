import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  arrowAcess = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['login']);
  }


}
