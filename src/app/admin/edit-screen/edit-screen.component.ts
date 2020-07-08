import { Component, OnInit } from '@angular/core';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import { ActivatedRoute, Router } from '@angular/router';
import { PhaseService } from 'src/app/services/phase.service';
import _ from "lodash";
import {MatDialog} from '@angular/material/dialog';
import { DialogCommonComponent } from 'src/app/dialog-common/dialog-common/dialog-common.component';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  process: Process;
  statuses = [{ id: 1, name: 'Đang hoạt động' }, { id: 2, name: 'Tạm ngừng' }]
  loading = false;

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getProcess();
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
   
    this.processService.updateProcess(this.process as Process)
      .subscribe(p => {
       // console.log("sửa process", p)
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
  goBack(){
    this.router.navigateByUrl('/home');
  }

}
