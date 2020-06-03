import { Component, OnInit,Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { Fields } from '../fiedls';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { USERS } from '../../users/mock-users';



@Component({
  selector: 'app-dialog-field',
  templateUrl: './dialog-field.component.html',
  styleUrls: ['./dialog-field.component.css']
})
export class DialogFieldComponent implements OnInit {
  fields: Fields;
  editName: string;
  editDes: string;
  users = USERS;
  options = [{ index: 1, value: '' }, {index: 2, value: ''}];
  count = 3;
  labelOption: string;
  noDelete = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Fields) { }

  ngOnInit(): void {
    console.log(name);
  }
  addOption() {
    this.options.push({ index: this.count, value:'' });
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

}
