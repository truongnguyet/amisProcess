import { Component, OnInit, Inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import { USERS } from '../../users/mock-users';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { FIELDS } from '../../fields/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { Fields } from '../../fields/fiedls';
import { Router } from '@angular/router';
import { ICONS } from '../../process/mock-icons';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  users = USERS;
  limitUser = false;
  fields = FIELDS;
  icons = ICONS;
  selectedIcon: string;
  panelOpenState = false;
  tabs = ['Giai đoạn 1', 'Giai đoạn 2', 'Giai đoạn 3', 'Thành công', 'Thất bại'];
  selected = new FormControl(0);
  count =1;

  constructor(
    private dialog: MatDialog,
    private router: Router,
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

  addField(nameField: string, icon: string, description: string) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        nameField: nameField,
        icon: icon,
        description: description
      }
    });
  }
  gotoProcess() {
    this.router.navigate(['/process-detail'])
  }


  addTab() {
    this.tabs.splice(this.tabs.length - 2, 0, 'Giai đoạn mới ' + this.count);
    this.count++;
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  selectIcon(id: string) {
    this.selectedIcon = id;
  
  }

}
