import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { ListFieldModule } from '../fields/list-field/list-field.module';
import { MaterialModule } from '../material.module';

import { CreatedialogComponent } from './createdialog/createdialog.component';
import { InviteUserComponent } from './invite-user/invite-user.component';
import { SettingComponent } from './setting/setting.component';
import { DialogFieldComponent } from '../fields/dialog-field/dialog-field.component';
import { EditProcessComponent } from './edit-process/edit-process.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';



@NgModule({
  declarations: [
    CreatedialogComponent,
    InviteUserComponent,
    SettingComponent,
    DialogFieldComponent,
    EditProcessComponent,
    EditScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListFieldModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CreatedialogComponent,
    InviteUserComponent,
    SettingComponent,
    DialogFieldComponent,
   
    EditProcessComponent
  ]

})
export class AdminModule { }
