import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-account',
  templateUrl: './credit-account.component.html',
  styleUrls: ['./credit-account.component.sass']
})
export class CreditAccountComponent implements OnInit {

  @Input() saldoCredito: number;

  currentBill = '120,66';
  availableLimit = '9.120,66';

  constructor() { }

  ngOnInit(): void {
  }

}
