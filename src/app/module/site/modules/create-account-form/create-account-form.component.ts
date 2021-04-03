import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { User } from '../../interfaces/createAccount.interface';
import { CreateAccountService } from './../../services/createAccount.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.sass']
})
export class CreateAccountFormComponent implements OnInit {

  isLoading: boolean;
  errorIsLoading: boolean;
  registerForm: FormGroup;
  user: User;
  isSpinning = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private createAccountService: CreateAccountService,
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      cpf: ['', Validators.required],
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  createAccount() {
    this.isLoading = true;

    const user = {
      cpf: this.registerForm.value.cpf,
      nome: this.registerForm.value.fullName,
      login: this.registerForm.value.userName,
      senha: this.registerForm.value.password,
    };

    this.isSpinning = true;
    this.createAccountService.createAccount(user)
    .pipe(
      take(3),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSucessCreateAccount(),
      error => this.onError(error),
    );
  }

  onSucessCreateAccount(){
    this.router.navigate(['login']);
  }

  showError(nomeControle: string) {
    if (!this.registerForm.get(nomeControle)) {
      return false;
    }
    return this.registerForm.get(nomeControle).invalid && this.registerForm.get(nomeControle).touched;
  }

  onError(error: any){
    console.log(error);
    this.isSpinning = false;
  }

  validateFormFields() {
    Object.keys(this.registerForm.controls)
    .forEach(field => {
      const control = this.registerForm.get(field);
      control.markAllAsTouched();
    });
  }

  sendForm() {
    if (this.registerForm.invalid) {
      this.validateFormFields();
      return;
    }
    this.createAccount();
  }

}
