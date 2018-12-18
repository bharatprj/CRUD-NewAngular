import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { nextTick } from 'q';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req, next) {
    const tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('user_tokenn')))
    });
    return next.handle(tokenizedReq);
  }
}


