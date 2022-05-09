import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  data="ABC";
  getName(){
    return 'Harshada' 
  }
  data1 ={
    name:"harshada1",
    course:"java1"
  };

//  data1="hars";

//  below code for child to parent
items = ['item1', 'item2', 'item3', 'item4'];

addItem(newItem: string) {
  this.items.push(newItem);
}
}
