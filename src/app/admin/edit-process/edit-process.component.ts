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
import { ToastrService } from 'ngx-toastr';

import { FIELDS } from '../../data/mock-fields';
import { DialogFieldComponent } from '../../fields/dialog-field/dialog-field.component';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { USERS } from '../../data/mock-users';
import { PhaseService } from 'src/app/services/phase.service';
import { Phase } from 'src/app/models/phase';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';


export interface Error {
  phaseName : boolean;
  description: boolean
}
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
  loading = false;
  changePhase =false;
  changeField = false;
  changeUser = false;
  createNew  = false;
  error: Error;

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private phaseService : PhaseService,
    private userService : UserService,
    private toastr: ToastrService
  ) 
  {
    this.error = {
      phaseName: false,
      description:false
    }

  }

  ngOnInit(): void {
    this.getProcess()
    this.getAllUser();
  }

  getProcess(): void {
    this.loading =true;
    const id = this.router.url.split('/')[3];
    this.processService.getPro(id)
      .subscribe(process => {
        process.phase = _.orderBy(process.phase,'index','des')
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
        this.loading = false;
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
    if(!this.createNew){
      this.changePhase = true;
    }
    
  }

  onSelectTab(tab) { 
    this.activeTab = tab;
    this.changePhase = false;
    
  }

  addField(tab, field) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        field: field,
        tab: tab
      }
    });
    if(!this.createNew){
      this.changeField = true;
    }
    
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
    if(!this.createNew){
      this.changeUser = true;
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
    
    this.phaseService.updatePhase(tab as Phase).subscribe(
      p =>{ 
        this.changePhase = false;
        this.ngOnInit();
        this.toastr.success('Sửa thành công');
      }
      );
  }
  onSaveUser(tab){
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTc = Number(tab.isTc);
    tab.isTb = Number(tab.isTb);
    tab.limitUser = Number(tab.limitUser);
    tab.fieldData.forEach(a=> {
      a.required = Number(a.required)
    })
    this.phaseService.updateUser(tab as Phase).subscribe(
      p => {
        console.log(p);
      }
    )
  }
  onSaveFiled(tab){
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTc = Number(tab.isTc);
    tab.isTb = Number(tab.isTb);
    tab.limitUser = Number(tab.limitUser);
    tab.fieldData.forEach(a=> {
      a.required = Number(a.required)
    })
    this.phaseService.updateField(tab as Phase).toPromise().then(
      p=> {
        this.toastr.success('Sửa thành công');
      this.changeField = false;
       this.ngOnInit();
      }
    )
    
  }
  goBack() {
    this.router.navigateByUrl('home/edit-process/' + this.process.id)
  }
  onCancel(){
    this.changeField =false;
    this.changePhase = false;
    this.changeUser =false;
    this.ngOnInit();  
  }

  addTab() {
    this.createNew = true;
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
      limitUser: false,
      index:3,
    });
    this.activeTab = this.process.phase.length - 3;
  }
  onAddTab(tab,index) {
    if (tab.phaseName == "") {
      this.error.phaseName = true;
      return
    }
    if(tab.description == ""){
      this.error.description = true;
      return
    }
    tab.processId = this.process.id;
    tab.isFirstPhase = Number(tab.isFirstPhase);
    tab.isTc = Number(tab.isTc);
    tab.isTb = Number(tab.isTb);
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
      this.error.description = false;
      this.error.phaseName = false;
      this.createNew = false;
      
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
  onKey(e){
    if(this.createNew)
      return
    this.changePhase = true;
  }
}
