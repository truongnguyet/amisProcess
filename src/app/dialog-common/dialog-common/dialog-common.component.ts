import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog'

export interface Data {
  title: string;
  onNext: any;
}

@Component({
  selector: 'app-dialog-common',
  templateUrl: './dialog-common.component.html',
  styleUrls: ['./dialog-common.component.css']
})
export class DialogCommonComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit(): void {
  console.log("Dữ liệu để xóa",this.data)
  }

}
