import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { nextTick } from 'q';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req, next) {
    if (!req.url.includes('signin')) {
      const token = localStorage.getItem('user_token');
      const tokenizedReq = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + token)
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}


