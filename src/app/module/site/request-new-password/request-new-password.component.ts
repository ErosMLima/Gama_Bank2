import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';

import { RequestNewPasswordService } from '../services/requestNewPassword.service';

@Component({
  selector: 'app-request-new-password',
  templateUrl: './request-new-password.component.html',
  styleUrls: ['./request-new-password.component.sass']
})
export class RequestNewPasswordComponent implements OnInit {

  requestPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private requestNewPasswordService: RequestNewPasswordService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.requestNewPasswordForm();
  }

  requestNewPasswordForm() {
    this.requestPasswordForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  requestNewPassword() {
    this.requestNewPasswordService.requestNewPassword(this.requestPasswordForm.value)
    .pipe(
      take(1)
    )
    .subscribe(
      response => this.onSucessRequestNewPassword(response),
      error => console.log(error)
    );
  }

  onSucessRequestNewPassword(response: any) {
    this.authService.setNewTemporaryPassword(response);
    this.router.navigate(['/forgot-password']);
  }

  validateAllFormFiels() {
    Object.keys(this.requestPasswordForm.controls).forEach(field => {
      const control = this.requestPasswordForm.get(field);
      control.markAllAsTouched();
    });
  }

  onSubmit(){
    if (this.requestPasswordForm.invalid) {
      this.validateAllFormFiels();
      return;
    }
    this.requestNewPassword();
  }

}
