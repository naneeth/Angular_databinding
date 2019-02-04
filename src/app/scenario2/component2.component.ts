import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  // @Input('username') user : string
  // user:string 
  // // user : any;

  constructor() { }

  ngOnInit() {
    // user:  this.username
//  this.user={
//         name : this.username
//       }

}
ngOnSubmit(){
  
}


}
