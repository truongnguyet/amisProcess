import { Component, OnInit, Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { USERS } from '../../data/mock-users';
import _ from "lodash";
import {v4 as uuidv4} from 'uuid';
import { FieldService } from 'src/app/services/field.service';
import { FieldData } from 'src/app/models/fieldData';
import {FieldInPhase} from '../../models/fieldData';

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
  parentPhase = FieldInPhase;
  idField: string;
  required = true;
  labelOption: string;
  options = [];
  count = 3;


  noDelete = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Field,
    private fieldService : FieldService
    ) {
      if(data.fieldData){
        data.fieldData.required = Boolean(data.fieldData.required)
      }
    this.idField = uuidv4();
    this.options = [{ index: 1, id: uuidv4(), value: '', fieldDataId:this.idField }, { index: 2, id: uuidv4, value: '', fieldDataId:this.idField }]
  }

  ngOnInit(): void {
   console.log("Data nhan ve ",this.data);
  }
  addOption(fieldData) {
    if(fieldData){
      fieldData.option.push({
        index: fieldData.option.length +1,
        value: this.labelOption,
        fieldDataId: fieldData.id,
        id:uuidv4()
      })
    }else {
      this.options.push({ 
        index: this.count, 
        value: this.labelOption ,
        fieldDataId:this.idField,
        id:uuidv4()
      });
      this.count++;
    }
   
    
  }
  removeOption(index: number, fieldData) {
    if(fieldData){
      if(fieldData.option.length == 2){
        this.noDelete = true;
        return null;
      }
      fieldData.option.splice(index,1);

    }else {
      if (this.options.length === 2) {
        this.noDelete = true;
        return null;
      }
      this.options.splice(index, 1);
      this.count--;
    }
    
  }
  checkRequired(fieldData) {
    if(fieldData){
      fieldData.required = !fieldData.required;
      console.log(fieldData.required)
    }else{
      this.required = !this.required;
    }
    
  }

  onSaveField(fieldData) {   
    if (fieldData) {
      const idx = _.findIndex(this.data.tab.fieldData, { id: fieldData.id })
      this.data.tab.fieldData[idx] = {
        fieldName: fieldData.fieldName,
        description: fieldData.description,
        type: fieldData.type,
        required: fieldData.required,
        phaseId: fieldData.phaseId,
        option: fieldData.option
      }
     
    } else {
      if(this.data.field.type !== 'radio' || this.data.field.type !== 'dropDown' || this.data.field.type !== 'checkBox' ){
        this.options = []
      }
     
      this.parentPhase.push({
        id:this.idField,
        fieldName : this.editName,
        description : this.editDes,
        type: this.data.field.type,
        required: this.required,
        phaseId:this.data.tab.id,
        option: this.options
      })
     //console.log(this.parentPhase)

    }
  //  console.log(this.data.tab.fieldData)
  }

}
