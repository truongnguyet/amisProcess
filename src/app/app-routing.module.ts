import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard/login-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginDashboardComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
