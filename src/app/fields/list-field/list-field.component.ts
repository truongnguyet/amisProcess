import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFieldComponent } from '../dialog-field/dialog-field.component';
import { remove } from 'lodash'
import { FIELDS } from '../../data/mock-fields';
import { FieldService } from 'src/app/services/field.service';
import { DialogCommonComponent } from 'src/app/dialog-common/dialog-common/dialog-common.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

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
    private fieldService: FieldService,
    private router : Router
    ) { }

  ngOnInit(): void {
  // console.log("this is child component", this.childField)
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
    this.dialog.open(DialogCommonComponent, {
      data: {
        title: "trường",
        item: field
      }
    });
  }
  
}
