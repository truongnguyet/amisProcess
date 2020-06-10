import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.css']
})
export class ListFieldComponent implements OnInit {
  @Input() childField: Array<any>;
  constructor() { }

  ngOnInit(): void {
    
  }
  child() {
    console.log("this is child component",this.childField)
  }
}
