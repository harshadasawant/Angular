import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees : any;
  constructor(private employeeData: EmployeeService) { 
    this.employeeData.users().subscribe((data) => {
      console.warn("data",data);
      this.employees = data;
     
    })
    }
   
  

  ngOnInit(): void {
  }

}
