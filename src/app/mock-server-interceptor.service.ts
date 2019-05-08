import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpRequest, 
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler,
  HttpResponse } from '@angular/common/http';

@Injectable()
export class MockServerInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, handler: HttpHandler): 
      Observable<HttpEvent<any>> {
    console.log(req);
    const body = {message: "This is a response from mock!"};
    return of(new HttpResponse({status: 200, body: body}));
    // return handler.handle(req);
  }
}
