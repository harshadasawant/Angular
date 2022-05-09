import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  callMockAPI(){
    console.warn("callMockAPI is called");
  }
}
