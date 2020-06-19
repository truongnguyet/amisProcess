import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFieldComponent } from '../dialog-field/dialog-field.component';
import { remove } from 'lodash'
import { FIELDS } from '../mock-fields';
@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.css']
})
export class ListFieldComponent implements OnInit {
  @Input() childField: Array<any>;
  @Input() tab: any;

  field = FIELDS;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  //  console.log("this is child component", this.childField, this.tab)
  }
  child() {
    console.log("this is child component",this.childField)
  }
  onEdit(tab, child) {
    this.dialog.open(DialogFieldComponent, {
      data: {
        tab: tab,
        field: child
      }
    })
  }

  onDelete(tab, field) {
    remove(tab.fields, item => item.id == field.id)
  }
}
