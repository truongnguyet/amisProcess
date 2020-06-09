import { Component, OnInit } from '@angular/core';
import { PROCESS } from '../process/mock-processes';
import { MatButtonModule } from '@angular/material/button';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  processes = PROCESS;
 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(CreatedialogComponent);
  }
}



