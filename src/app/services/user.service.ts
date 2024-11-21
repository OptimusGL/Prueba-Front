import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AppUrl: string;
  private APIUrl: string;

  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();

  constructor( private http: HttpClient ) {
    // this.myAppUrl = environment.endpoint
    // this.myAPIUrl = 'api/user';
    this.AppUrl = environment.endpoint;
    this.APIUrl = 'api/user';
    
  }
  read(user: User): Observable<any> {
    return this.http.get(`${this.AppUrl}${this.APIUrl}/read`)
  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.AppUrl}${this.APIUrl}/register`, user);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.AppUrl}${this.APIUrl}/login`, user);
  }



  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
}
