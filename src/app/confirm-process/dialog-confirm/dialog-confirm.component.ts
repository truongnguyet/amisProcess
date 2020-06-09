import { Component, OnInit,Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Process } from '../../process/process';


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: Process) { }

  ngOnInit(): void {
  }

}
