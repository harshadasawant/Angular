import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../employee';
import { IEmployee1 } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }
  public employees : IEmployee[] =[];
  public employees1: IEmployee1[] =[];
  ngOnInit(): void {
    this.employeeService.employees().subscribe((data) => {   
    this.employees = data;
    console.log(this.employees);
    });
    this.employeeService.employees1().subscribe((data) => {   
      this.employees1 = data;
      console.log(this.employees1);
    }
 );
  }

}
