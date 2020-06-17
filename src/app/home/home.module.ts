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


import { HomeRoutingModule } from './home-routing.module';
import { ListFieldModule } from '../fields/list-field/list-field.module';
import { MaterialModule } from '../material.module';



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
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MaterialModule,
    ListFieldModule
  ],
  exports: [
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
    
  ]
})
export class HomeModule { }
