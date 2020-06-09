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
import { Router, ActivatedRoute } from '@angular/router';
import { ICONS } from '../../process/mock-icons';

import { phaseData } from '../../process/mock-phases';

interface Error {
  name: boolean;
  description: boolean;
  icon: boolean;
  field: boolean;
  implementer: boolean;
}

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

  name: string;
  description: string;
  selectedIcon: boolean;
  panelOpenState = false;
  processId: number;
  activeTab = 0;
  select: any;

  tabs = [
    {
      phaseId: 1,
      phaseName: 'Giai đoạn 1',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
    },
    {
      phaseId: 2,
      phaseName: 'Giai đoạn 2',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
    },
    {
      phaseId: 3,
      phaseName: 'Giai đoạn 3',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
    },
    {
      phaseId: 4,
      phaseName: 'Thành công',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
    },
    {
      phaseId: 5,
      phaseName: 'Thất bại',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
    },
  ];
  count = 4;


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.processId = parseInt(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {

  }
  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  onListUser() {
    this.limitUser = true;
  }
  onCloseListUser(tab) {
    this.limitUser = false;
    tab.implementer = this.users;
  }

  addField(nameField: string, icon: string, description: string) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        nameField: nameField,
        icon: icon,
        description: description,

      }
    });
  }

  gotoProcess() {
    this.tabs.forEach(e => {
      phaseData.push(e);
    })
    console.log(this.tabs);
    this.router.navigate(['/process-detail/', this.processId])
  }



  addTab() {
    this.tabs.splice(this.tabs.length - 2, 0, {
      phaseId: 6,
      phaseName: 'Giai đoạn mới',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: []
    });
    this.count++;
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.count--;
  }

  selectIcon(tab, id: string) {
    this.selectedIcon = true;
    tab.icon = id;
  }


  onSave() {
    if (this.activeTab < this.tabs.length - 1) {
      this.activeTab++;
    }
    this.limitUser = false;
  }
  onSelectTab(tab) {
    this.activeTab = tab;
    this.limitUser = false;
  }

  selectUser(tab, user) {
    
    if (this.limitUser) {
      tab.implementer.push(user);
      this.select = user;
      console.log(this.select);
    }
  }
 
}
