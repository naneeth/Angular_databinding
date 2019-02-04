import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  value:string;
  @Output()
  fromSibling1 = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  save(){
    this.fromSibling1.emit(this.value);
  }

}
