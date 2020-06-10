import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PROCESS } from '../process/mock-processes';
import { Process } from '../process/process';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


@Component({
  selector: 'app-confirm-process',
  templateUrl: './confirm-process.component.html',
  styleUrls: ['./confirm-process.component.css']
})
export class ConfirmProcessComponent implements OnInit {

  processes = PROCESS;
  shortedData: Process[];

  constructor(private dialog: MatDialog) {
    this.shortedData = this.processes.slice();
  }
  ngOnInit(): void {

  }

  sortData(sort: Sort) {
    
    const data = this.processes.slice();
    if (!sort.active || sort.direction === '') {
      this.shortedData = data;
      return;
    }
    
    this.shortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'nameProcess': return compare(a.nameProcess, b.nameProcess, isAsc);
        case 'createdBy': return compare(a.createdBy, b.createdBy, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }
  confirmProcess(process) {
    this.dialog.open(DialogConfirmComponent, {
      data: process
    });
    console.log(process);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
