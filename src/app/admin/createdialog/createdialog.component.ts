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
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})
export class CreatedialogComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  
  constructor(
    public dialog: MatDialog,
    private router: Router,

  ) {  }

  ngOnInit(): void {
  }
  onOpenDialogInviteUser() {
    this.dialog.open(InviteUserComponent)
  }
  gotoSetting() {
    this.router.navigate(['/home/setting']);
  }
 
}
