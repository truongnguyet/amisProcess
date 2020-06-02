import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListProcessComponent } from '../list-process/list-process.component';
import { AdminComponent } from '../admin/admin.component';
import { ConfirmProcessComponent } from '../confirm-process/confirm-process.component';
import { YourProcessComponent } from '../your-process/your-process.component';
import { ProcessDetailComponent } from '../process-detail/process-detail.component';
import { DeleteMemberComponent } from '../viewmembers/viewmembers.component';
import { ViewmembersComponent } from '../viewmembers/viewmembers.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeRoutingModule } from './home-routing.module';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListProcessComponent,
    AdminComponent,
    ConfirmProcessComponent,
    YourProcessComponent,
    ProcessDetailComponent,
    DeleteMemberComponent,
    ViewmembersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    AdminModule,
    MatTooltipModule,
    MatGridListModule,
  ],

})
export class HomeModule { }
