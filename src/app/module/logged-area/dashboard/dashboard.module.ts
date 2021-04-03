import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { CreditAccountComponent } from './components/credit-account/credit-account.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { LatestStatementsComponent } from './components/latest-statements/latest-statements.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { PlansComponent } from './pages/plans/plans.component';
import { TransfersComponent } from './pages/transfers/transfers.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    CreditAccountComponent,
    LatestStatementsComponent,
    DepositsComponent,
    PlansComponent,
    HomeDashboardComponent,
    TransfersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: []
})
export class DashboardModule { }
