import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  gotoAdmin() {
    this.router.navigate(['/home'])
  }
  gotoList() {
    this.router.navigate(['/list'])
  }
  gotoConfirm() {
    this.router.navigate(['/confirm'])
  }
  gotoYourPro() {
    this.router.navigate(['/yours-process'])
  }
}
