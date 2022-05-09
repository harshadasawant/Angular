import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() newItemEvent = new EventEmitter<any>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
