import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFieldComponent } from '../dialog-field/dialog-field.component';
import { remove } from 'lodash'
import { FIELDS } from '../../data/mock-fields';
import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.css']
})
export class ListFieldComponent implements OnInit {
  @Input() childField: Array<any>;
  @Input() tab: any;

  field = FIELDS;
  constructor(
    private dialog: MatDialog,
    private fieldService: FieldService
    ) { }

  ngOnInit(): void {
  // console.log("this is child component", this.childField)
  }
  child() {
    console.log("this is child component",this.childField)
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
  }

  onDelete(tab, field) {
    remove(tab.fieldData, item => item.id == field.id);
    this.fieldService.deleteField(field.id).subscribe();
  }
}
