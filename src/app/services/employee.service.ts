import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import { IEmployee1 } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { }
  users(){
   return this.http.get(this.url);
  }

  employees() :Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("/assets/employee.json");
  }
 
  employees1() :Observable<IEmployee1[]>{
    return this.http.get<IEmployee1[]>("http://localhost:9090/getAllEmployee");
  }

  saveEmployee(data : any){
    return this.http.post("http://localhost:9090/addEmployee", data);
  }
}
