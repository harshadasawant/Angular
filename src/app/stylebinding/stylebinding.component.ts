import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  color='purple';
  updateColor(){
    this.color='red';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
