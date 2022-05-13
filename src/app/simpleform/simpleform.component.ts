import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  getUserFormData(data:any){
    console.warn(data);
    this.employeeService.saveEmployee(data).subscribe((result)=>{
      console.warn(result);
    })
  }
  addEmployee(){
    console.warn(this.employee);
    // this.employeeService.saveEmployee(data).subscribe((result)=>{
      // console.warn(result);
    // }) 
  }

}
