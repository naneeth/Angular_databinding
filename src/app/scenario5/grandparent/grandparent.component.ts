import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {

  name:string
  constructor() { }

  ngOnInit() {
  }

  receive(message:string){
    this.name = message;
  }

}
