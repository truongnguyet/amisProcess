import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})
export class CreatedialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  onOpenDialogInviteUser() {
    this.dialog.open(InviteUserComponent)
  }
  gotoSetting() {
    this.router.navigate(['/home/setting']);
  }

}
