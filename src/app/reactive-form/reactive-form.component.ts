import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private authService: AuthserviceService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  bearer :any;
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  })
  loginUser(){
    if(this.loginForm.valid){
      this.authService.login().subscribe(result=>{
          if(result.token !== undefined){
            console.log(result);
          localStorage.setItem('token',result.token);
          this.router.navigate(['/about']);
            // this.bearer = result.token;
          } else{
            alert(result.token);
          }
      })
    }
    console.warn(this.loginForm.value);
  }
  callJwtApi(){
    this.authService.posts(this.bearer).subscribe(result=>{
      console.log(result);
  })
}
  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
