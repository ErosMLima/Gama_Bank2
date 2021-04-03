import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { PlansComponent } from './pages/plans/plans.component';
import { TransfersComponent } from './pages/transfers/transfers.component';

const routes: Routes = [
  // {
  //   path: '', component: AccountComponent,
  // },
  {
    path: '', component: HeaderDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeDashboardComponent,
      },
      {
        path: 'deposits',
        component: DepositsComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
      {
        path: 'transfers',
        component: TransfersComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
