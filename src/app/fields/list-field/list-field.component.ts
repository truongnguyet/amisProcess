import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFieldComponent } from '../dialog-field/dialog-field.component';
import { FIELDS } from '../../data/mock-fields';
import { DialogCommonComponent } from 'src/app/dialog-common/dialog-common/dialog-common.component';


@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.css']
})
export class ListFieldComponent implements OnInit {
  @Input() childField: Array<any>;
  @Input() tab: any;
  @Output() emitField = new EventEmitter();

  field = FIELDS;
  constructor(
    private dialog: MatDialog,

    ) { }

  ngOnInit(): void {
  // console.log("this is child component", this.changeField)
  }
 
  onEdit(tab, child) {
    var fieldChild: any
    this.field.forEach(d => {
      if (d.type == child.type) {
        fieldChild = d
      }
    })
    this.dialog.open(DialogFieldComponent, {
      data: {
        tab: tab,
        field: fieldChild,
        fieldData: child
      }
    })
    this.emitField.emit();
  }

  onDelete(tab, field) {
    this.dialog.open(DialogCommonComponent, {
      data: {
        title: "trường",
        item: field
      }
    });
  }
  
}
