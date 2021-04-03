import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { ForgotPasswordService } from '../services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private router: Router,
    private forgotPassword: ForgotPasswordService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validateForgotPassword();
  }

  validateForgotPassword(){
    this.forgotPasswordForm = this.fb.group({
      usuario: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    });
  }

  changePassword() {
    const user = {
      usuario: this.forgotPasswordForm.value.usuario,
      senha: this.forgotPasswordForm.value.novaSenha
    };
    this.forgotPassword.changePassword(user)
    .pipe(
      take(1)
    )
    .subscribe(
      response => this.onSucessPassword(),
      error => this.onError(error),
    );
  }

  onSucessPassword() {
    this.router.navigate(['/login']);
  }

  onError(error: any) {
    this.router.navigate(['/error']);
  }

  onSubmit(){
    if (!this.forgotPasswordForm.valid || this.forgotPasswordForm.value.novaSenha !== this.forgotPasswordForm.value.confirmaSenha){
      return;
    }
    this.changePassword();
  }

}
