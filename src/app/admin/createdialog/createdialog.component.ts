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


import { PROCESS } from '../../process/mock-processes';

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

  name: string;
  permission: number;
  error: Error;
  process = PROCESS;
  checked = true;
  inviteRef: any
  constructor(
    public dialog: MatDialog,
    private router: Router,

  ) {  }

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
    this.process.push({
      id: 8,
      nameProcess: this.name,
      createdBy: '',
      createdAt: '',
      status: '',
      modifyBy: '',
      modifyAt: '',
      phase: [],
    })
    this.dialog.closeAll();
    this.router.navigate(['/home/setting/', this.name]);
  }
 
 
}
