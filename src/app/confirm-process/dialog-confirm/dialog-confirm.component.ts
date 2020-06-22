import { Component, OnInit,Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Process } from '../../models/process';
import { ListField } from '../../models/fieldData';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {
  listFields = ListField;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Process) { }

  ngOnInit(): void {
  }

}
