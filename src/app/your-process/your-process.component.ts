import { Component, OnInit } from '@angular/core';
import { PROCESS } from '../data/mock-processes';

@Component({
  selector: 'app-your-process',
  templateUrl: './your-process.component.html',
  styleUrls: ['./your-process.component.css']
})
export class YourProcessComponent implements OnInit {
  processes = PROCESS;
  constructor() { }

  ngOnInit(): void {
  }

}
