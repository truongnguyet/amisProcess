import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { phaseData } from '../process/mock-phases';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {

  processId;
  constructor() {
    this.processId = 1
    phaseData.find(x => x.processId == this.processId )
  }

  ngOnInit(): void {
  }

}
