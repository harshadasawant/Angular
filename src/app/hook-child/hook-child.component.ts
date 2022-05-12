import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit{
//  OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
counter =0;
interval : any;
@Input()
channelName =  "";


  constructor() {
    console.warn("child constructor");
   }

  ngOnInit(): void {
    console.warn("child init");
    // this.interval = setInterval(()=>{
    //   this.counter = this.counter +1;
    //   console.warn(this.counter);
    // }, 1000)
  }

//   ngOnDestroy(): void {
//     clearInterval(this.interval);
//     console.warn("On Destroy called");
//   }
//   ngOnChanges(changes: SimpleChanges): void {
//     console.warn("Child Onchange is called");
//  }
//  ngDoCheck(): void {
//    console.warn("child do check");
//  }
//  ngAfterContentInit(): void {
//    console.warn("After Content Init");
//  }
//  ngAfterContentChecked(): void {
//   console.warn("ngAfter content checked");
//  }
//  ngAfterViewInit(): void {
//    console.warn("After view Init");
//  }
//  ngAfterViewChecked(): void {
//   console.warn("After view checked");
//  }

}
