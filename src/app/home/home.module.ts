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
import { PracticeProcessComponent } from '../list-process/practice-process/practice-process.component';
import { ForwardProcessComponent } from '../list-process/practice-process/practice-process.component';
import { DialogConfirmComponent } from '../confirm-process/dialog-confirm/dialog-confirm.component';

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
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HomeRoutingModule } from './home-routing.module';
import { AdminModule } from '../admin/admin.module';
import { ListFieldComponent } from '../fields/list-field/list-field.component';





@NgModule({
  declarations: [
    HomeComponent,
    ListProcessComponent,
    AdminComponent,
    ConfirmProcessComponent,
    YourProcessComponent,
    ProcessDetailComponent,
    DeleteMemberComponent,
    ViewmembersComponent,
    PracticeProcessComponent,
    ForwardProcessComponent,
    DialogConfirmComponent,
    ListFieldComponent


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
    MatSelectModule,
    MatSortModule,
    MatTableModule
  ],

})
export class HomeModule { }
