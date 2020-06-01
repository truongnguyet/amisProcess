import { Component, OnInit,Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Fields) { }

  ngOnInit(): void {
    console.log(name);
  }

}
