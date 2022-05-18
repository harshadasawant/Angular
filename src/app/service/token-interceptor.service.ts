import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthserviceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizeRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authService.getToken()}`
        // Authorization: "Bearer xx.yy.zz"
      }
    })
    return next.handle(tokenizeRequest);
  }
}
