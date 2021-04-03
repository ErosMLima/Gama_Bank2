import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  @Input() showValue = true;
  @Input() saldoConta: number;

  // totalBalance = '10.000,00';
  totalTransactions = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
