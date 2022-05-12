import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-parent',
  templateUrl: './hook-parent.component.html',
  styleUrls: ['./hook-parent.component.css']
})
export class HookParentComponent implements OnInit{
//, OnChanges, DoCheck {

  isChild=false;
  channelName = '';
  constructor() {
    console.warn("parent constructor");
   }

  ngOnInit(): void {
    console.warn("parent init");
  }
  toggleChild(){
    this.isChild = !this.isChild;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.warn("Parent Onchange is called");
  }
  // ngDoCheck(): void {
  //   console.warn("parent console do check");
  // }

}
