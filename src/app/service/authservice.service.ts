import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  login():Observable<any>{
  return this.http.post('http://localhost:5000/api/login','');
  }

  posts(token:any):Observable<any>{
    const httpOptions = { headers: new HttpHeaders({'Authorization': "Bearer "+token , 'Content-Type': 'application/json; charset=UTF-8'}) };
    return this.http.post('http://localhost:5000/api/posts','',httpOptions);
  }
  
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
