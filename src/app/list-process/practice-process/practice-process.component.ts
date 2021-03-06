import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { USERS } from '../../data/mock-users';
import { Router, ActivatedRoute } from '@angular/router';
import { ListField } from '../../models/fieldData';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';





@Component({
  selector: 'app-practice-process',
  templateUrl: './practice-process.component.html',
  styleUrls: ['./practice-process.component.css']
})



export class PracticeProcessComponent implements OnInit {
  listFields = ListField;
  process: Process;
  fields: Array<any>;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private processService: ProcessService
  ) { }

  ngOnInit(): void {
    this.getProcess();
    this.fields = this.process.phase[0].fieldData;
    //console.log("data ve dung ", this.process.phase[0], this.fields.length)
  }
  onNext() {
    this.dialog.open(ForwardProcessComponent);
  }
  getProcess(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getById(id)
      .subscribe(process => this.process = process);
   // console.log("lay id", this.process)
  }

}



@Component({
  selector: 'forward-process',
  templateUrl: './forward-process.component.html',
  styleUrls: ['./practice-process.component.css']
})
export class ForwardProcessComponent implements OnInit {
  users = USERS;
  
  process: Process;
  constructor(
    private router: Router,

  ) { }
  ngOnInit(): void {
    
    
  }
 
  onForward() {
    this.router.navigate(['/yours-process'])
  }
}

