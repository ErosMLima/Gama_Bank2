import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Plans } from '../../../interfaces/plans.interface';
import { DepositsService } from './deposits.service';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.sass']
})
export class DepositsComponent implements OnInit {

  depositsForm: FormGroup;
  plansAccount: Plans[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private depositService: DepositsService,
  ) { }

  ngOnInit(): void {
    this.depositsForm = this.fb.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
    });

    this.getPlansAccount();
  }

  getPlansAccount() {
    this.depositService.getPlanAccount()
    .subscribe(
      response => this.onSucessPlansAccount(response),
      error => console.log(error)
    );
  }

  onSucessPlansAccount(response: Plans[]) {
    this.plansAccount = response.filter( plan => plan.tipoMovimento === 'R');
  }

  onSubmit() {
    const lancamento = {
      login: '',
      conta: 0,
      data: this.depositsForm.value.data,
      descricao: String(this.depositsForm.value.descricao),
      planoConta: this.plansAccount[0].id,
      valor: this.depositsForm.value.valor,
    };

    this.depositService.getDeposits(lancamento)
    .subscribe(
      response => this.onSucessSubmit(response),
      error => console.log(error)
    );
  }

  onSucessSubmit(response: string) {
    this.depositsForm.reset();
    this.router.navigate(['/#/dashboard/home']);
  }

}
