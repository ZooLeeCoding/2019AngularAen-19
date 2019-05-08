import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpRequest, 
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler,
  HttpResponse } from '@angular/common/http';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, handler: HttpHandler): 
      Observable<HttpEvent<any>> {
      console.log("header added");
      const modified = 
        req.clone({setHeaders: {"CustomHeader": "from-interceptor"}});
      // console.log(modified);
      return handler.handle(modified);
  }
}
