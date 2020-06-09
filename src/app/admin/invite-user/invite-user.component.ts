import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})
export class InviteUserComponent implements OnInit {
  inputs = [{ index: 1, value: '' }, { index: 2, value: '' }, { index: 3, value: '' }];
  count = 4;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addUser() {
    this.inputs.push({ index: this.count, value: '' })
    this.count++;
   
  }
}
