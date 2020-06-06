import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { first } from 'rxjs/operators';
import { User } from '../../models/user';

import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];
  selected: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  
  gotoAdmin() {
    this.router.navigate(['/home'])
  }
  gotoList() {
    this.router.navigate(['/list'])
    this.selected = true;
  }
  gotoConfirm() {
    this.router.navigate(['/confirm'])
    this.selected = true;
  }
  gotoYourPro() {
    this.router.navigate(['/yours-process'])
    this.selected = true;
  }
  viewMember() {
    this.router.navigate(['/process/view-member'])
    this.selected = true;
  }
//xoa
  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
