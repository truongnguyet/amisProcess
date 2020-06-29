import { Component, OnInit, Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { USERS } from '../../data/mock-users';
import _ from "lodash"
import { FieldService } from 'src/app/services/field.service';
import { FieldData } from 'src/app/models/fieldData';

export interface Field {
  field: any;
  tab: any;
  fieldData: any;
}

@Component({
  selector: 'app-dialog-field',
  templateUrl: './dialog-field.component.html',
  styleUrls: ['./dialog-field.component.css']
})
export class DialogFieldComponent implements OnInit {

  editName: string;
  editDes: string;
  users = USERS;

  required = true;
  labelOption: string;
  options = [{ index: 1, value: '' }, { index: 2, value: '' }];
  count = 3;

  newField = {

    fieldName: this.editName,
    description: this.editDes,
    type: this.data.field.type,
    required: null,
    phaseId: this.data.tab.id,
    options: this.options
  }

 

  noDelete = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Field,
    private fieldService : FieldService

    ) {
    
  }

  ngOnInit(): void {
    console.log("Data nhan ve ",this.data);
  }
  addOption() {
    this.options.push({ index: this.count, value: this.labelOption });
    this.count++;
  }
  removeOption(index: number) {
    if (this.options.length === 2) {
      this.noDelete = true;
      return null;
    }
    this.options.splice(index, 1);
    this.count--;
  }
  checkRequired() {
    this.required = !this.required;
  }

  onSaveField(fieldData) {
    

    if (fieldData) {
      const idx = _.findIndex(this.data.tab.fields, { id: fieldData.id })
      this.data.tab.fields[idx] = {
        id: fieldData.id,
        name: fieldData.name,
        description: fieldData.description,
        type: fieldData.type,
        required: fieldData.required,
        phaseId: fieldData.phaseId,
        options: fieldData.options
      }
     
    } else {
      this.newField = {
        fieldName : this.editName,
        description: this.editDes,
        type: this.data.field.type,
        required:this.required,
        phaseId: this.data.tab.id,
        options: this.options
      }
     this.newField.required = Number(this.newField.required)
     console.log(this.newField)
      this.fieldService.addField(this.newField as FieldData)
      .subscribe(
        field => {
         console.log("thêm mới field", field)
        }
      )

    }
    console.log(this.data.tab.fields)
  }

}
