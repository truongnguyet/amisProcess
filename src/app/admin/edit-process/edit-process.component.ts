import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../process/processService';
import { Process } from '../../process/process';
import { ActivatedRoute, Router } from '@angular/router';
import { ICONS } from '../../process/mock-icons';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import { FIELDS } from '../../fields/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { USERS } from '../../users/mock-users';

@Component({
  selector: 'app-edit-process',
  templateUrl: './edit-process.component.html',
  styleUrls: ['./edit-process.component.css']
})
export class EditProcessComponent implements OnInit {
  process: Process;
  icons = ICONS;
  panelOpenState = false;
  selectedIcon: boolean;
  fields = FIELDS;
  activeTab = 0;

  users = USERS;

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getProcess();
    this.getPhase();
  }

  getProcess(): void {
    const id = parseInt(this.router.url.split('/')[3]);
    this.processService.getProcessById(id)
      .subscribe(process => this.process = process);
    // console.log("lay id", this.process)
  }
  getPhase(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.activeTab = id -1;
    
  }

  selectIcon(tab, id: string) {
    this.selectedIcon = true;
    tab.icon = id;
  }

  onSelectTab(tab) {
    this.activeTab = tab;
  }

  addField(tab, field) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        field: field,
        tab: tab
      }
    });
  }


  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  onListUser(tab) {
    tab.limitUser = true;
    tab.implementer = [];

  }
  onCloseListUser(tab) {
    tab.limitUser = false;
    tab.implementer = this.users;
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
  onSave() {
    this.router.navigateByUrl('home/edit-process/'+ this.process.id)
  }
  onCancel() {
    this.router.navigateByUrl('home/edit-process/' + this.process.id)
  }

  addTab() {
    this.process.phase.splice(this.process.phase.length - 2, 0, {
      phaseId: this.process.phase.length + 1,
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
