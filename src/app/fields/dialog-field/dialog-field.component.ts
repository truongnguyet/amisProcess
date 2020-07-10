import { Component, OnInit, Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USERS } from '../../data/mock-users';
import _ from "lodash";
import {v4 as uuidv4} from 'uuid';
import { FieldService } from 'src/app/services/field.service';
import {FieldInPhase} from '../../models/fieldData';

export interface Field {
  field: any;
  tab: any;
  fieldData: any;
}
export interface Error {
  fieldName: boolean;
  optionValue: boolean;
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
  error: Error;
 closeDialog : boolean;

  noDelete = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Field,
    ) {
      if(data.fieldData){
        data.fieldData.required = Boolean(data.fieldData.required)
      }
    this.idField = uuidv4();
    this.options = [{ index: 1, id: uuidv4(), value: '', fieldDataId:this.idField }, { index: 2, id: uuidv4(), value: '', fieldDataId:this.idField }]
    this.editName ='';
    this.error = {
      fieldName: false,
      optionValue: false
    }
  }

  ngOnInit(): void {
   //console.log("Data nhan ve ",this.data);
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
     // console.log(fieldData.required)
    }else{
      this.required = !this.required;
    }
    
  }

  onSaveField(fieldData) {   
    //trường hợp chỉnh sửa
    if (fieldData) {
      if(fieldData.fieldName == ""){
        //check tên field
        this.error.fieldName = true;
        this.closeDialog = false;
        return
      }
      fieldData = {
        id: fieldData.id,
        fieldName: fieldData.fieldName,
        description: fieldData.description,
        required: fieldData.required,
        option: fieldData.option,
        type: fieldData.type
      }
      
      }
     else {
       //trường hợp thêm mới
      if(this.editName == ""){
        //check tên field
        this.error.fieldName = true;
        this.closeDialog = false;
        return
      }
      //tạo một mảng với các trường hợp đặc biệt để thêm option
     const emptyValue = ['radio','dropDown','checkBox'];
     if(emptyValue.includes(this.data.field.type)){
       this.options = this.options;
       this.options.map( a => {
         if(a.value == ''){
           this.error.optionValue = true;
           return
         }
       })
     } else {
       //nếu không thuộc các TH trên thì set option rỗng
       this.options = [];
     }
      
      this.data.tab.fieldData.push({
        id:this.idField,
        fieldName : this.editName,
        description : this.editDes,
        type: this.data.field.type,
        required: this.required,
        phaseId:this.data.tab.id,
        option: this.options
      })
      this.closeDialog = true;

    }
  
  }

}
