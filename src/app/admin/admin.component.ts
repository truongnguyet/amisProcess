import { Component, OnInit } from '@angular/core';
import { Process } from '../process/process';
import { PROCESS } from '../process/mock-processes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  processes = PROCESS;

  constructor() { }

  ngOnInit(): void {
  }

}
