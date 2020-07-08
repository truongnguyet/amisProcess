import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { Router } from '@angular/router';


import { PROCESS } from '../../data/mock-processes';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import {v4 as uuidv4} from 'uuid';
import * as moment from 'moment';

interface Error {
  name: boolean;
  permission: boolean;
  authorization: boolean;

}

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})

export class CreatedialogComponent implements OnInit {
  id: string;
  name: string;
  permission: number;
  error: Error;
  process = PROCESS;
  checked = true;
  inviteRef: any;
  loading = false;

  processs: Process

  newProcess = {
    id:uuidv4(),
    nameProcess: this.name,
    status: 'Đang hoạt động',
    createdBy: 'Trương Thị Nguyệt',
    createdAt:moment().format("YYYY-DD-MM"),
    modifyBy: '',
    modifyAt: null,
  }

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private processService: ProcessService

  ) {
    this.name = '';
    this.error = {
      name: false,
      permission: false,
      authorization: false
    }

  }

  ngOnInit(): void {
  }

  onOpenDialogInviteUser() {
    this.inviteRef = this.dialog.open(InviteUserComponent)
    this.inviteRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onChangePermission(permission: number) {
    this.permission = permission;
  }

  gotoSetting(e) {
    
    e.preventDefault();
    if (this.name == "") {
      this.error.name = true;
      return
    }
    this.loading = true;
    //them moi vao database
    this.newProcess.nameProcess = this.name;
    this.processService.addProcess(this.newProcess as Process)
      .subscribe(
        process => {
          this.processs = process,
            this.router.navigate(['/home/setting/', process.id]);
            this.loading = false;
        }
      )
    this.dialog.closeAll();
  }

  onKeydown(event){
  if(event.key === "Enter"){
    this.gotoSetting(event);
  }
  }
}
