import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private AppUrl: string;
  private APIUrl: string;

  constructor( private http: HttpClient ) {
    this.AppUrl = environment.endpoint;
    this.APIUrl = 'api/persona';
    
  }

  signIn(persona: Persona): Observable<any> {
    return this.http.post(`${this.AppUrl}${this.APIUrl}/create`, persona);
  }

  login(persona: Persona): Observable<string> {
    return this.http.post<string>(`${this.AppUrl}${this.APIUrl}/login`, persona);
  }
  
}
