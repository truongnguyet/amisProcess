import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog'
import { FieldService } from 'src/app/services/field.service';
import { PhaseService } from 'src/app/services/phase.service';
import { Router } from '@angular/router';

export interface Data {
  title: string;
  item: any;
}

@Component({
  selector: 'app-dialog-common',
  templateUrl: './dialog-common.component.html',
  styleUrls: ['./dialog-common.component.css']
})
export class DialogCommonComponent implements OnInit {

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private fieldService : FieldService,
    private phaseService : PhaseService,
    private router : Router
    ) { }

  ngOnInit(): void {
  console.log("Dữ liệu để xóa",this.data)
  }

  onDelete(){
    if(this.data.title == 'trường'){
      this.fieldService.deleteField(this.data.item.id).subscribe();
    } else if (this.data.title == 'giai đoạn'){
     this.phaseService.deletePhase(this.data.item.id).subscribe();
    } else{
      console.log("Không xóa")
    }
  }

}
