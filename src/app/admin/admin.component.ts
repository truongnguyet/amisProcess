import { Component, OnInit } from '@angular/core';
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
  loading = false;
  page = 0;
  total = 0;
  perPage = 1;
  hasNext = false;
  hasPrev = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private processService: ProcessService
  ) {
    
  }

  ngOnInit(): void {
    this.getProcessPage();
  }
  getProcessPage (){
    this.loading = true;
    this.processService.getProcess(this.page)
    .subscribe(
      p => {
        this.processes = p.items;
        this.total = p.count;
        this.perPage= p.pageSize
        this.loading = false;
        var maxPage = Math.ceil(this.total / this.perPage)
        if(this.page > 0){
          this.hasPrev = true
          if(this.page >= maxPage -1){
            this.hasNext = false
          }else{
            this.hasNext = true
          }
        }else{
          this.hasPrev = false
        }
      }
    )
  }

  openDialog() {
    this.dialog.open(CreatedialogComponent);
  }
  viewProcess(process) {
    this.router.navigate(['home/edit-process', process.id])
  }
  onNext(){
    if(!this.total)
    return null
    const maxPage = Math.ceil(this.total / this.perPage)
    if(this.page >= maxPage -1)
      return
    this.page = this.page + 1;
    this.getProcessPage()
  }
  onPrevious(){
    if(!this.total)
    return null
    if(this.page < 1)
    return null
    this.page = this.page -1;
    this.getProcessPage()
  }
}



