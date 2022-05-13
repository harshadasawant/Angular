import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
 saveEmployee(data : any){
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
   data=  JSON.stringify(data)
   return this.http.post("http://localhost:9090/addEmployee", data,  httpOptions);
 }
  employees1() :Observable<IEmployee1[]>{
    return this.http.get<IEmployee1[]>("http://localhost:9090/getAllEmployee");
  }

  saveEmployee(data : any){
    return this.http.post("http://localhost:9090/addEmployee", data);
  }
}
