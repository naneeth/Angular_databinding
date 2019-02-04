import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent-scenario5',
  templateUrl: './parent-scenario5.component.html',
  styleUrls: ['./parent-scenario5.component.css']
})
export class ParentScenario5Component implements OnInit {

  MessageEvent:string;

  @Output()
  parentString = new EventEmitter();

  saveParent() {
    this.parentString.emit(this.MessageEvent)
  }

  receiveString(val:string){
    this.MessageEvent = val,
    this.saveParent();
  }


  constructor(){}

  ngOnInit() {
  }


}
