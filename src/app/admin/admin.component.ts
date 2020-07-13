import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { ProcessService } from '../services/processService';
import { Sort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';



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
  searchLoading = false;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private processService: ProcessService
  ) {
    if(this.processes)
    this.processes = this.processes.slice();
  }

  ngOnInit(): void {
    this.getProcessPage();
  }

  ngAfterViewInit() : void{
    fromEvent(this.searchInput.nativeElement,'keyup').pipe(
      //get value
      map((event: any) => {
        return event.target.value;
      })
      //if character length greater than 3
      ,filter( res => res.length > 3)
      
    // start search after 1s
    ,debounceTime(1000)
    //If query previous is different from current
    ,distinctUntilChanged()
    //subscription for response
    ).subscribe((text: string) => {
        this.searchLoading = true;
        
          this.processService.search(this.page,text).subscribe(
            p => {
              this.searchLoading = false;
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
            },
            (err)=> {
              this.searchLoading = false;
              console.log(err);
            }
          )
        
    })
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

  sortData(sort: Sort) {
    const data = this.processes.slice();
    if (!sort.active || sort.direction === '') {
      this.processes = data;
      return;
    }
    
    this.processes = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nameProcess': return compare(a.nameProcess, b.nameProcess, isAsc);
        case 'createdBy': return compare(a.createdBy, b.createdBy, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }
  

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

