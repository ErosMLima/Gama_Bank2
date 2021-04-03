import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onClick(option: number){
    if (option === 1 ) {
      this.router.navigate(['/#/dashboard/deposits']);
    }
  }

}
