import { Component, OnInit, Inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { USERS } from '../../users/mock-users';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { FIELDS } from '../../fields/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { Fields } from '../../fields/fiedls';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  users = USERS;
  limitUser = false;
  fields = FIELDS;
  selectedField: string;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  addUser() {
     this.dialog.open(InviteUserComponent);
  }
  onListUser() {
    this.limitUser = true;
  }
  onCloseListUser() {
    this.limitUser = false;
  }
  addField(name: string) {
    this.selectedField = name;
    this.dialog.open(DialogFieldComponent, {
      data: {
        name: name,
      }
    });
    console.log("value dialog",name );
  }

}
