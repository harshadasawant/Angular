import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingColor]'
})
export class HostBindingColorDirective {

@HostBinding('style.backgroundColor') color:string='red'
@HostListener('mouseenter') setMouseEnter() {
  this.color="yellow";
}
@HostListener('mouseleave') setMouseLeave() {
  this.color="red";
}
  constructor() { }
ngOnInit(){
  this.color='red';
}
}
