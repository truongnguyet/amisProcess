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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../../material.module';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {v4 as uuidv4} from 'uuid';
import { USERS } from '../../data/mock-users';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { FIELDS } from '../../data/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { ICONS } from '../../data/mock-icons';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Users } from '../../models/users';
import { PhaseService } from '../../services/phase.service';
import { Phase } from '../../models/phase';
import { UserService } from 'src/app/services/user.service';

interface Error {
  name: boolean;
  description: boolean;
  icon: boolean;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
 // myControl = new FormControl();

  limitUser = false;
  fields = FIELDS;
  icons = ICONS;

  phaseName: string;
  description: string;
  icon: string;
  selectedIcon: boolean;
  panelOpenState = false;

  activeTab = 0;
  processes: Process;
  users: Users[];
  error: Error;

  filteredOptions: Observable<Users[]>;
  searchText: string;
  userSearch : Users[];
  usersHasPhase : Array<any>[];

  tabs = [
    {
      id:uuidv4(),
      phaseName: 'Giai đoạn 1',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: [],
      isTC: false,
      isTB: false,
      isFirstPhase: true,
      limitUser: false,
      index: 1
    },
    {
     id:uuidv4(),
      phaseName: 'Giai đoạn 2',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: this.usersHasPhase,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false,
      index: 2
    },
    {
      id:uuidv4(),
      phaseName: 'Giai đoạn 3',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: this.usersHasPhase,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false,
      index: 3
    },
    {
      id:uuidv4(),
      phaseName: 'Thành công',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: [],
      isTC: true,
      isTB: false,
      isFirstPhase: false,
      limitUser: false,
      index: 4
    },
    {
      id:uuidv4(),
      phaseName: 'Thất bại',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: [],
      isTC: false,
      isTB: true,
      isFirstPhase: false,
      limitUser: false,
      index: 5
    },
  ];
  count = 4;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private processService: ProcessService,
    private phaseService: PhaseService,
    private userService : UserService
  ) {
    this.phaseName = '';
    this.description = '';
    
    this.error = {
      name: false,
      description: false,
      icon: false
    }

  }

  ngOnInit(): void {
    this.getProcess();
    this.getAllUser();

    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this.searchUser(value))
    // );
  }

  getProcess(): void {
    const id =  this.route.snapshot.params.id;
    this.processService.getPro(id)
      .subscribe( process => this.processes = process);    
  }
  getAllUser(){
    this.userService.getUsers().toPromise()
    .then(
      user => {
        this.users = user;
      });
  }

  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  onListUser(tab) {
    tab.limitUser = true;
    tab.usersHasPhase = []
  }
  onCloseListUser(tab) {
    tab.limitUser = false;
    tab.usersHasPhase = this.usersHasPhase;
    
  }

  addField(tab, field) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        field: field,
        tab: tab
      }
    });
  

  }


  addTab() {
    this.tabs.splice(this.tabs.length - 2, 0, {
      id:uuidv4(),
      phaseName: 'Giai đoạn mới',
      icon: '',
      description: '',
      fieldData: [],
      processId: "",
      usersHasPhase: [],
      isFirstPhase: false,
      isTC: false,
      isTB: false,
      limitUser: false,
      index: 3
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


  onSave(tab,index) {
   
    tab.processId = this.processes.id;
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTC = Number(tab.isTC);
    tab.isTB = Number(tab.isTB);
    tab.limitUser = Number(tab.limitUser);
    tab.fieldData.forEach(a=> {
      a.required = Number(a.required)
    })
    tab.index = index;

   if(tab.limitUser == false){
     tab.usersHasPhase = this.users.map( d => ({usersId: d.id,phaseId: tab.id}) )
   }
   
    this.phaseService.addPhase(tab as Phase)
      .subscribe(
        p => {
         // console.log("phase tao moi",p); 
        }
      )
      this.limitUser = false;

    if (this.activeTab < this.tabs.length - 1) {
      this.activeTab++;
    }

    if(tab.isTB){
      this.router.navigate(['/home/edit-process/', this.processes.id])
    }

  }
  onSelectTab(tab) {
    this.activeTab = tab;
    this.limitUser = false;
  }

  selectUser(tab, user) {
    if (tab.limitUser) {
      const index = this.userCheck(tab.usersHasPhase, user)
      if (index === -1) {
        tab.usersHasPhase.push({
          usersId: user.id,
          phaseId: tab.id
        });
      }
      else {
        tab.usersHasPhase.splice(index, 1);
      }
      
    }
  }
  userCheck(imply = [], user) {
    let result = -1
    imply.forEach((usr, index) => {
      if (usr.usersId == user.id) {
        result = index
      }
    })

    return result;
  }
  //search user

   searchUser = (input) =>{
    if(!input)
        return []
    if(!this.userSearch.length)
        return []
    return this.userSearch.filter(user=>user.fullName.toLowerCase().includes(input.toLowerCase()))
}
}

