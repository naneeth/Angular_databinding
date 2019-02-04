import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-scenario5',
  templateUrl: './child-scenario5.component.html',
  styleUrls: ['./child-scenario5.component.css']
})
export class ChildScenario5Component implements OnInit {

 value:string;

@Output()
MessageEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  save(){
    this.MessageEvent.emit(this.value) 
  }
}
