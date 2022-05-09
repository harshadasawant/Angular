import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users:any;
  constructor(private userData : UserdataService) { 
    console.warn(userData.users());
    this.users = userData.users();
  }


  ngOnInit(): void {
  }

}
