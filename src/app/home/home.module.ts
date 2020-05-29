import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListProcessComponent } from '../list-process/list-process.component';
import { AdminComponent } from '../admin/admin.component';
import { ConfirmProcessComponent } from '../confirm-process/confirm-process.component';
import { YourProcessComponent } from '../your-process/your-process.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ListProcessComponent,
    AdminComponent,
    ConfirmProcessComponent,
    YourProcessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeRoutingModule
  ],

})
export class HomeModule { }
