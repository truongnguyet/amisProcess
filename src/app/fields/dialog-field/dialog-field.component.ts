import { Component, OnInit, Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { Fields } from '../fiedls';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { USERS } from '../../users/mock-users';
import { FieldInPhase } from '../fieldData';

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

  noDelete = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Field) {
    
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
  onSaveField() {

    this.data.tab.fields.push({
      id: 3,
      name: this.editName,
      description: this.editDes,
      type: this.data.field.type,
      required: this.required,
      phaseId: this.data.tab.phaseId,
      options: this.options
    })
    console.log(this.data.tab.fields)
  }

}
