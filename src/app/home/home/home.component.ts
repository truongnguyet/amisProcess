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
  selected: string;
  menuItems = [
    {
      value: "home",
      label:"Quản lí quy trình"
    },
    {
      value: "list",
      label: "Danh sách quy trình"
    },
    {
      value: "confirm",
      label: "Quy trình cần thực hiện"
    },
    {
      value: "yours-process",
      label: "Quy trình của bạn"
    }]

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    const url = router.url;
    const value = url.split("?")[0].split("/")[1];
    this.selected = !value ? "home" : value;
  }

  goto(value: string) {
    this.selected = value;
    this.router.navigate(['/', value]);
  }
  viewMember() {
    this.router.navigate(['/process/view-member'])
    
  }
//xoa
  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
    //  this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
