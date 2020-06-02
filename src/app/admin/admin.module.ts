import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { CreatedialogComponent } from './createdialog/createdialog.component';
import { InviteUserComponent } from './invite-user/invite-user.component';
import { SettingComponent } from './setting/setting.component';
import { DialogFieldComponent } from '../fields/dialog-field/dialog-field.component';


@NgModule({
  declarations: [
    CreatedialogComponent,
    InviteUserComponent,
    SettingComponent,
    DialogFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTableModule,
    MatExpansionModule
  ],

})
export class AdminModule { }
