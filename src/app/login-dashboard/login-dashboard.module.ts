import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginDashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,   
    ReactiveFormsModule
  ],
  exports: [
    LoginDashboardComponent
  ]
})
export class LoginDashboardModule { }
