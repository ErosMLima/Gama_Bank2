import { Component, OnInit } from '@angular/core';

import { LancamentosResource } from '../../../interfaces/lancamentosResource.interface';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.sass']
})
export class HomeDashboardComponent implements OnInit {

  inicio: string;
  fim: string;
  saldoConta: number;
  saldoCredito: number;
  transacoesContaBanco: LancamentosResource;
  transacoesContaCredito: LancamentosResource;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {

    const date = new Date();
    const lastDay = new Date (date.getFullYear(), date.getMonth() + 1, 0);
    this.inicio = this.date (date.getFullYear(), date.getMonth(), 1);
    this.fim = this.date (lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate());
    this.getDashboard();
  }

  date(ano, mes, dia): string{

    const diaFormatado = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', ];
    const mesFormatado = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    return `${ano}-${mesFormatado[mes]}-${diaFormatado[dia]}`;
  }


  getDashboard() {
    this.dashboardService.getDashboard(this.inicio, this.fim)
    .subscribe(
      response => this.onSucessDashboard(response),
      error => console.log(error)
    );
  }

  onSucessDashboard(response) {
    this.saldoConta = response.contaBanco.saldo;
    this.saldoCredito = response.contaCredito.saldo;
    this.transacoesContaBanco = response.contaBanco.lancamentos;
    this.transacoesContaCredito = response.contaCredito.lancamentos;
  }

}
