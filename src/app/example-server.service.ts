import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ServerMessage } from './models/ServerMessage';
 
@Injectable({
  providedIn: 'root'
})
export class ExampleServerService {

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string):  Observable<ServerMessage> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<ServerMessage>(environment.baseUrl + 'login',
    {username: username, password: password}, {headers: headers});
  }

  logout(): Observable<any> {
    return this.http.post(environment.baseUrl + 'logout', {})
  }

  getProba(): Observable<any> {
    return this.http.get(environment.baseUrl + 'proba');
  }
}
