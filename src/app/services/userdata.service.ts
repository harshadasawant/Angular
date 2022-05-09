import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'harshada', age:35,email:'harsha@gmail.com'},
      {name:'daksh', age:9,email:'daksh@gmail.com'},
      {name:'swapneel', age:15,email:'swapneel@gmail.com'},
    ]
  }
}
