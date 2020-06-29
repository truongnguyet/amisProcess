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

  processs: Process

  newProcess = {
    nameProcess: this.name,
    status: 'Đang hoạt động',
    createdBy: 'Trương Thị Nguyệt',
    createdAt: "2020-06-25",
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


    //them moi vao database
    this.newProcess.nameProcess = this.name;
    this.processService.addProcess(this.newProcess as Process)
      .subscribe(
        process => {
          this.processs = process,
            this.router.navigate(['/home/setting/', process.id]);
        }
      )
    this.dialog.closeAll();

  }


}
