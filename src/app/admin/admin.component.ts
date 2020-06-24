import { Component, OnInit } from '@angular/core';
import { PROCESS } from '../data/mock-processes';
import { MatButtonModule } from '@angular/material/button';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { ProcessService } from '../services/processService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  processes: Process[]
  

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private processService: ProcessService
  ) {
    
  }

  ngOnInit(): void {
    this.getAllProcess();
  }

   getAllProcess() {
     // this.processService.getAllProcess().subscribe(p => this.processes = p)
     this.processService.getAllProcess().then(p => this.processes = p)
    console.log("lay tat ca process", this.processes)
  }

  openDialog() {
    this.dialog.open(CreatedialogComponent);
  }
  viewProcess(process) {
    this.router.navigate(['home/edit-process', process.id])
  }
}



