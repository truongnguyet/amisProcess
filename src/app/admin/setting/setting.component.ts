import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { USERS } from '../../users/mock-users';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { FIELDS } from '../../fields/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { ICONS } from '../../process/mock-icons';
import { phaseData } from '../../process/mock-phases';
import { FieldInPhase } from '../../fields/fieldData';
import { PROCESS } from '../../process/mock-processes';
import { Process } from '../../process/process';
import { ProcessService } from '../../process/processService';

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

  activeTab = 0;
  select = [];
  processes: Process;


  parentField = FieldInPhase;

  tabs = [
    {
      phaseId: 1,
      phaseName: 'Giai đoạn 1',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
      isTC: false,
      isTB: false,
      isFirstPhase: true,
      limitUser: false
    },
    {
      phaseId: 2,
      phaseName: 'Giai đoạn 2',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: USERS,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
      phaseId: 3,
      phaseName: 'Giai đoạn 3',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: USERS,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
      phaseId: 4,
      phaseName: 'Thành công',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
      isTC: true,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
      phaseId: 5,
      phaseName: 'Thất bại',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
      isTC: false,
      isTB: true,
      isFirstPhase: false,
      limitUser: false
    },
  ];
  count = 4;


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private processService: ProcessService,
  ) {


  }

  ngOnInit(): void {
    this.getProcess();
  }

  getProcess(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getProcessById(id)
      .subscribe(process => this.processes = process);
    // console.log("lay id", this.processes)
  }

  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  onListUser(tab) {
    tab.limitUser = true;
    tab.implementer = []
  }
  onCloseListUser(tab) {
    tab.limitUser = false;
    tab.implementer = this.users;
  }

  addField(tab, field) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        field: field,
        tab: tab
      }
    });
    // tab.fields.push(field);

  }

  gotoProcess() {
    this.tabs.forEach(e => {
      phaseData.push(e);
    })
    //console.log(this.tabs);
    this.processes.phase = this.tabs;
    console.log("process  sau khi tao",this.processes)
    this.router.navigate(['/process-detail/', this.processes.id])
  }



  addTab() {
    this.tabs.splice(this.tabs.length - 2, 0, {
      phaseId: this.tabs.length + 1,
      phaseName: 'Giai đoạn mới',
      icon: '',
      description: '',
      fields: [],
      processId: 1,
      implementer: [],
      isFirstPhase: false,
      isTC: false,
      isTB: false,
      limitUser: false
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
    if (tab.limitUser) {
      const index = this.userCheck(tab.implementer, user)
      if (index === -1) {
        tab.implementer.push(user);
      }
      else {
        tab.implementer.splice(index, 1);
      }
    }
  }
  userCheck(imply = [], user) {
    let result = -1
    imply.forEach((usr, index) => {
      if (usr.id == user.id) {
        result = index
      }
    })

    return result;
  }


}
