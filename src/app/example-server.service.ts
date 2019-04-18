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

  loginUser(username: string, password: string):  Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(environment.baseUrl + 'login',
    {username: username, password: password}, {headers: headers, observe: 'response'});
  }

  logout(): Observable<ServerMessage> {
    localStorage.removeItem("user");
    return this.http.post<ServerMessage>(environment.baseUrl + 'logout', {})
  }

  getProba(): Observable<ServerMessage> {
    return this.http.get<ServerMessage>(environment.baseUrl + 'proba');
  }
}
