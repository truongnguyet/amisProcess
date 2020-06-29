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

import { USERS } from '../../data/mock-users';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { FIELDS } from '../../data/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { ICONS } from '../../data/mock-icons';
import { phaseData } from '../../data/mock-phases';
import { FieldInPhase } from '../../models/fieldData';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Users } from '../../models/users';
import { PhaseService } from '../../services/phase.service';
import { Phase } from '../../models/phase';

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
  users = USERS;
  limitUser = false;
  fields = FIELDS;
  icons = ICONS;

  phaseName: string;
  description: string;
  icon: string;
  selectedIcon: boolean;
  panelOpenState = false;

  activeTab = 0;
  select = [];
  processes: Process;

  error: Error;
  parentField = FieldInPhase;

  tabs = [
    {
      
      phaseName: 'Giai đoạn 1',
      icon: '',
      description: '',
      fieldData: [],
      processId: 1,
      implementer: [],
      isTC: false,
      isTB: false,
      isFirstPhase: true,
      limitUser: false
    },
    {
     
      phaseName: 'Giai đoạn 2',
      icon: '',
      description: '',
      fieldData: [],
      processId: 1,
      implementer: USERS,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
     
      phaseName: 'Giai đoạn 3',
      icon: '',
      description: '',
      fieldData: [],
      processId: 1,
      implementer: USERS,
      isTC: false,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
      
      phaseName: 'Thành công',
      icon: '',
      description: '',
      fieldData: [],
      processId: 1,
      implementer: [],
      isTC: true,
      isTB: false,
      isFirstPhase: false,
      limitUser: false
    },
    {
      
      phaseName: 'Thất bại',
      icon: '',
      description: '',
      fieldData: [],
      processId: 1,
      implementer: [],
      isTC: false,
      isTB: true,
      isFirstPhase: false,
      limitUser: false
    },
  ];
  count = 4;

  newPhase = {
    phaseName: this.phaseName,
    description: this.description,
    icon: this.icon,
    processId: 0,
    isTC: false,
    isTB: false,
    isFirstPhase: false,
    limitUser: false
  }


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private processService: ProcessService,
    private phaseService: PhaseService
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

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  getProcess(): void {
    const id = parseInt( this.route.snapshot.paramMap.get('id'));
    this.processService.getById(id)
      .subscribe( process => this.processes = process);    
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
    //console.log("process  sau khi tao",this.processes)
    this.router.navigate(['/process-detail/', this.processes.id])
  }



  addTab() {
    this.tabs.splice(this.tabs.length - 2, 0, {
      phaseName: 'Giai đoạn mới',
      icon: '',
      description: '',
      fieldData: [],
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


  onSave(tab) {
   
    tab.processId = this.processes.id;
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTC = Number(tab.isTC);
    tab.isTB = Number(tab.isTB);
    tab.limitUser = Number(tab.limitUser);
    this.phaseService.addPhase(tab as Phase)
      .subscribe(
        p => {
          console.log("phase tao moi",p); 
        }
      )

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



  //Search users
  myControl = new FormControl();
  options = USERS;
  filteredOptions: Observable<Users[]>;


  displayFn(user: Users): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Users[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

