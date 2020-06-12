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
  limitUser: boolean;
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
    if (this.process) {
     
      this.process.phase.forEach(d => {
        console.log(d.implementer.length)
        if (d.implementer.length == this.users.length) {
          this.limitUser = false;
        }
        else this.limitUser = true;
      })
      console.log("aaaa", this.limitUser)
    }
  }

  getProcess(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getProcessById(id)
      .subscribe(process => this.process = process);
    console.log("lay id", this.process)
  }

  selectIcon(tab, id: string) {
    this.selectedIcon = true;
    tab.icon = id;
  }

  onSelectTab(tab) {
    this.activeTab = tab;
    //this.limitUser = false;
  }

  addField(tab, field) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        field: field
      }
    });
    tab.fields.push(field);
  }

  removePhase(index: number) {
    this.process.phase.splice(index, 1);
  }
  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  onListUser(tab) {
    this.limitUser = true;
    this.process.phase.forEach(d => {
      d.implementer = tab.implementer
    })
  }
  onCloseListUser(tab) {
    this.limitUser = false;
    tab.implementer = this.users;
  }
  selectUser(tab, user) {
    if (this.limitUser) {
      const index = tab.implementer.indexOf(user);
      if (index === -1) {
        tab.implementer.push(user);
      }
      else {
        tab.implementer.splice(index, 1);
      }
    }
  }
  onSave() {
    if (this.activeTab < this.process.phase.length - 1) {
      this.activeTab++;
    }
    // this.limitUser = false;
  }
  onSaveAll() {
    this.router.navigate(['/home'])
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
      isTB: false
    });

  }
}
