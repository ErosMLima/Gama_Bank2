import { Component, Input, OnInit } from '@angular/core';

import { LancamentosResource } from '../../../interfaces/lancamentosResource.interface';


@Component({
  selector: 'app-latest-statements',
  templateUrl: './latest-statements.component.html',
  styleUrls: ['./latest-statements.component.sass']
})
export class LatestStatementsComponent implements OnInit {

  @Input() transacoes: LancamentosResource[];
  @Input() transacoesCredito: LancamentosResource[];


  statementeAccount = 'débito';
  statementsDiscription = 'GamaAcademy';
  statementsTotal = '278,56';
  statementsDate = '03 de Apr.';

  constructor() { }

  ngOnInit(): void {
  }

}
