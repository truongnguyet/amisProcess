import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDashboardComponent } from './login-dashboard/login-dashboard/login-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginDashboardComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
   
  },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
