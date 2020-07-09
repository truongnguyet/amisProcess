import { Component, OnInit } from '@angular/core';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import { ActivatedRoute, Router } from '@angular/router';
import _ from "lodash";
import {MatDialog} from '@angular/material/dialog';
import { DialogCommonComponent } from 'src/app/dialog-common/dialog-common/dialog-common.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  process: Process;
  statuses = [{ id: 1, name: 'Đang hoạt động' }, { id: 2, name: 'Tạm ngừng' }]
  loading = false;
  user: User;

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog : MatDialog,
    private authenticate: AuthenticationService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.getProcess();
    var currentUser = this.authenticate.currentUserValue;
    this.userService.getById(currentUser.id).subscribe(
      p => {
        this.user =p;
      }
    )
  }

  getProcess() {
    this.loading = true;
    const id = this.route.snapshot.params.id;
    this.processService.getPro(id)
      .subscribe(
        process =>{
         process.phase = _.orderBy(process.phase,"index",'des');
         this.process = process;
         this.loading = false;
        }  
        );

  }

  editPhase(phase) {
    this.router.navigateByUrl('home/edit-process/' + this.process.id + '/' + phase.id);
  }
  onSave() {
   this.process.modifiedBy = this.user.fullName;
    this.process.modifiedAt = moment().format("YYYY-MM-DD");
    console.log("before up",this.process)
    this.processService.updateProcess(this.process)
      .subscribe(p => {
        console.log(p)
      })
    
    this.router.navigateByUrl('/home')
   
  }
  deletePhase(index, phase) {
    this.dialog.open(DialogCommonComponent, {
      data: {
        title: "giai đoạn",
        item: phase
      }
    })
  }
  createPhase(){
    this.router.navigateByUrl('home/setting/'+ this.process.id)
  }
  goBack(){
    this.router.navigateByUrl('/home');
  }

}
