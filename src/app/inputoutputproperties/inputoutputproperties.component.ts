import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputoutputproperties',
  templateUrl: './inputoutputproperties.component.html',
  styleUrls: ['./inputoutputproperties.component.css']
})
export class InputoutputpropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() item:any

 

}
