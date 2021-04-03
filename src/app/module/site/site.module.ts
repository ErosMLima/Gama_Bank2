import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AnnuityComponent } from './modules/annuity/annuity.component';
import { ComplexityComponent } from './modules/complexity/complexity.component';
import { CreateAccountFormComponent } from './modules/create-account-form/create-account-form.component';
import { DigitalAccountComponent } from './modules/digital-account/digital-account.component';
import { HomeComponent } from './modules/home/home.component';
import { SimplifyLifeComponent } from './modules/simplify-life/simplify-life.component';
import { RequestNewPasswordComponent } from './request-new-password/request-new-password.component';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site.routing.module';

@NgModule({
  declarations: [
      SiteComponent,
      HomeComponent,
      CreateAccountFormComponent,
      DigitalAccountComponent,
      AnnuityComponent,
      ComplexityComponent,
      SimplifyLifeComponent,
      ForgotPasswordComponent,
      RequestNewPasswordComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    // LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SiteComponent,
    HomeComponent,
    CreateAccountFormComponent,
    DigitalAccountComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimplifyLifeComponent,
    ForgotPasswordComponent,
    RequestNewPasswordComponent
  ]
})
export class SiteModule { }
