import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentscenario6',
  templateUrl: './parentscenario6.component.html',
  styleUrls: ['./parentscenario6.component.css']
})
export class Parentscenario6Component implements OnInit {

  input :String;

  constructor() { }

  ngOnInit() {
  }

  receive(val:String){
    this.input =  val;
  }
  


}
