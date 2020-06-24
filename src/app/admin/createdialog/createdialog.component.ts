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
  id: number;
  name: string;
  permission: number;
  error: Error;
  process = PROCESS;
  checked = true;
  inviteRef: any

  processs: Process[]
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private processService: ProcessService

  ) { }

  ngOnInit(): void {
  }


  onOpenDialogInviteUser() {
    this.inviteRef = this.dialog.open(InviteUserComponent)
    this.inviteRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  onChange(value: string) {
    this.name = value;
    this.error.name = false;
  }
  onChangePermission(permission: number) {
    this.permission = permission;
  }


  gotoSetting() {
    this.error = {
      name: false,
      permission: false,
      authorization: false
    }
    if (!this.name) {
      this.error.name = true;
    }
    //if (!this.permission) {
    //  this.error.permission = true;
    //}
    if (this.error.name || this.error.permission || this.error.authorization) {
      return null;
    }
    //this.id = this.process.length + 1;
    //this.process.push({
    //  id: this.id,
    //  nameProcess: this.name,
    //  createdBy: '',
    //  createdAt: '',
    //  status: 'Đang hoạt động',
    //  modifyBy: '',
    //  modifyAt: '',
    //  phase: [],
    //})
    

    //them moi vao database

    var pro = { 
      nameProcess: this.name,
      createdBy: '',
      createdAt: '',
      status: 'Đang hoạt động',
      modifyBy: '',
      modifyAt: '',
     
    }
    this.processService.addProcess(pro as Process)
      .subscribe(process => {
        this.process.push(process)
      })
    console.log("tao moi thanh cong", this.processs)
    this.dialog.closeAll();
    this.router.navigate(['/home/setting/', this.id]);
  }


}
