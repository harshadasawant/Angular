import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-ditest',
  templateUrl: './ditest.component.html',
  styleUrls: ['./ditest.component.css']
})
export class DITestComponent implements OnInit {

  constructor(ts:TestService) {
      ts.callMockAPI();
   }

  ngOnInit(): void {
  }

}
