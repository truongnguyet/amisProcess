import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../services/processService';
import { Process } from '../../models/process';
import { ActivatedRoute, Router } from '@angular/router';
import { ICONS } from '../../data/mock-icons';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import _ from 'lodash';
import {v4 as uuidv4} from 'uuid';

import { FIELDS } from '../../data/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { USERS } from '../../data/mock-users';
import { PhaseService } from 'src/app/services/phase.service';
import { Phase } from 'src/app/models/phase';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

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

  users : Users[];

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private phaseService : PhaseService,
    private userService : UserService
  ) {

  }

  ngOnInit(): void {
    this.getProcess();
    this.getAllUser();
  }

  getProcess(): void {
    const id = this.router.url.split('/')[3];
    this.processService.getPro(id)
      .subscribe(process => {
        process.phase.forEach( e => {
         e.isFirstPhase =  Boolean(e.isFirstPhase),
         e.isTb =  Boolean(e.isTb),
         e.isTc =  Boolean(e.isTc),
         e.limitUser =  Boolean(e.limitUser)
        })
        this.process = process
       // console.log(process)
        const idPhase = this.route.snapshot.paramMap.get('id')  
        this.activeTab = _.findIndex(process.phase, function(o){ return o.id == idPhase ;});
      }
        );
    
  }
  getAllUser():void {
    this.userService.getUsers().toPromise()
    .then(
      user => {
        this.users = user;
      });
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
  onSave(tab) {
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTc = Number(tab.isTc);
    tab.isTb = Number(tab.isTb);
    tab.limitUser = Number(tab.limitUser);
    tab.fieldData.forEach(a=> {
      a.required = Number(a.required)
    })
    
    this.phaseService.updatePhase(tab as Phase).subscribe(p => console.log("sửa phase", p));
    this.router.navigateByUrl('home/edit-process/'+ this.process.id)
  }
  onCancel() {
    this.router.navigateByUrl('home/edit-process/' + this.process.id)
  }

  addTab() {
    this.process.phase.splice(this.process.phase.length - 2, 0, {
      id: uuidv4(),
      phaseName: 'Giai đoạn mới',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: [],
      isFirstPhase: false,
      isTc: false,
      isTb: false,
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
