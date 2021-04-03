import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Plans } from './../../../interfaces/plans.interface';
import { TransferService } from './transfers.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent implements OnInit {

  transfersForm: FormGroup;
  plansAccount: Plans[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private transfersService: TransferService,
  ) { }

  ngOnInit(): void {
    this.transfersForm = this.fb.group({
      contaDestino: ['', Validators.required],
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
    });

    this.getPlansAccount();
  }

  getPlansAccount() {
    this.transfersService.getPlanAccount()
    .subscribe(
      response => this.onSucessPlansAccount(response),
      error => console.log(error)
    );
  }

  onSucessPlansAccount(response: Plans[]) {
    console.log(response);
    this.plansAccount = response.filter( plan => plan.tipoMovimento === 'TU');
  }

  onSubmit() {
    const lancamento = {
      login: '',
      conta: 0,
      data: this.transfersForm.value.data,
      descricao: String(this.transfersForm.value.descricao),
      planoConta: this.plansAccount[0].id,
      valor: this.transfersForm.value.valor,
      contaDestino: this.transfersForm.value.contaDestino,
    };

    this.transfersService.getTransfers(lancamento)
    .subscribe(
      response => this.onSucessSubmit(response),
      error => console.log(error)
    );
  }

  onSucessSubmit(response: string) {
    this.transfersForm.reset();
    this.router.navigate(['/#/dashboard/home']);
  }

}
