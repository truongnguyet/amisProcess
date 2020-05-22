import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [LoginDashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    
  ],
  exports: [
    LoginDashboardComponent
  ]
})
export class LoginDashboardModule { }
