import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3child',
  templateUrl: './component3child.component.html',
  styleUrls: ['./component3child.component.css']
})
export class Component3childComponent implements OnInit {

  @Input() message: string
  constructor() { }

  ngOnInit() {
  }

}
