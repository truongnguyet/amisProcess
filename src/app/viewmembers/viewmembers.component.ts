import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../admin/invite-user/invite-user.component';
import { USERS } from '../users/mock-users';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.css']
})
export class ViewmembersComponent implements OnInit {
  users = USERS;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addUser() {
    this.dialog.open(InviteUserComponent);
  }
  deleteUser() {
    this.dialog.open(DeleteMemberComponent);
  }


}
@Component({
  selector: 'delete-member',
  templateUrl: './deleteMember.component.html',
})
export class DeleteMemberComponent { }
