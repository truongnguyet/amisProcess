import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


import { Process } from '../models/process';
import { ProcessService } from '../services/processService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {

  processes: Process;
  constructor(
    private route: ActivatedRoute,
    private processService: ProcessService, ) {

  }

  ngOnInit(): void {
    this.getProcess();
  }

  getProcess(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getProcessById(id)
      .subscribe(process => this.processes = process);
    console.log("lay id", this.processes)
  }
  onPause() {
    
      this.processes.status = "Tạm ngừng";
      console.log(this.processes)
  }
}
