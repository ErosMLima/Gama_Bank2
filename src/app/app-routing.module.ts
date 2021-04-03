import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedGuard } from './modules/shared/guards/is-logged/is-logged.guard';
import { NotLoggedGuard } from './modules/shared/guards/not-logged/not-logged.guard';
import { ForgotPasswordComponent } from './modules/site/forgot-password/forgot-password.component';
import { RequestNewPasswordComponent } from './modules/site/request-new-password/request-new-password.component';

const routes: Routes = [
  {
    path: '#',
    loadChildren: () => import('./modules/logged-area/logged-area.module').then(m => m.LoggedAreaModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: '', loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/site/login/login.module').then(m => m.LoginModule),
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    // canActivate: [NotLoggedGuard],
  },
  {
    path: 'request-new-password',
    component: RequestNewPasswordComponent,
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/site/page-error/page-error.module').then(m => m.PageErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
