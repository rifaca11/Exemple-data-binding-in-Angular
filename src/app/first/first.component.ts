import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  //data binding
  user= {
    name:'charifa',
    age: 22,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cTaI9Bxuxjo-uFw7Guguka6ULJHR2BXsTQOnJMCK&s'
  }
  myname='';
  change(){
    this.user.name=this.myname;
  }

//  NgIf directive
  display= true;
  Visible(){
    this.display= !this.display;
  }

//  NgFor directive
 students=[
   {
     name:'charifa',
     age:22
   },
   {
     name:'haytham',
     age:21
   },
   {
     name:'ilyass',
     age:27
   }
 ]

//  ngSwitch directive
  color = 'red';

constructor() {}
  ngOnInit():void{}
}
