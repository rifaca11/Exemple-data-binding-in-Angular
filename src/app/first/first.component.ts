import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  user= {
    name:'charifa',
    age: 22,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cTaI9Bxuxjo-uFw7Guguka6ULJHR2BXsTQOnJMCK&s'
  }

  myname='';
  change(){
    this.user.name=this.myname;
  }

constructor() {}
  ngOnInit():void{}
}
