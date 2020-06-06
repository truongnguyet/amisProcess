import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { USERS } from '../../users/mock-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-process',
  templateUrl: './practice-process.component.html',
  styleUrls: ['./practice-process.component.css']
})
export class PracticeProcessComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onNext() {
    this.dialog.open(ForwardProcessComponent);
  }
}

@Component({
  selector: 'forward-process',
  templateUrl: './forward-process.component.html',
  styleUrls: ['./practice-process.component.css']
})
export class ForwardProcessComponent {
  users = USERS;
  constructor(private route: Router) { }

  onForward() {
    this.route.navigate(['/yours-process'])
  }
}

