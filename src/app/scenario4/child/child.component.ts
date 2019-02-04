import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  value:String

@Output() MessageEvent = new EventEmitter()

  constructor() { 
  
  }

  ngOnInit() {
  }
  sendMessage(){
      this.MessageEvent.emit(this.value)
      // this.MessageEvent.emit(this.message)

  }

}
