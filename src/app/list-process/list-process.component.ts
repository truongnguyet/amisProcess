import { Component, OnInit } from '@angular/core';
import { PROCESS } from '../data/mock-processes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {
  processes = PROCESS;
  name: string;
  

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
   
  }



  gotoProcess(process) {
    this.router.navigate(['/list/practice/', process.id])
  }
}
