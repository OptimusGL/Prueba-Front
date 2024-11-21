import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private UAppUrl: string;
  private UAPIUrl: string;

  constructor( private http: HttpClient ) {
    const array = (5);
    this.UAppUrl = environment.endpoint;
    // this.UAPIUrl = '?results=5';
    // this.UAPIUrl = 'api/usuario';
    this.UAPIUrl = '?results=20';
    // this.UAPIUrl = '?inc=gender';
    // this.UAPIUrl = '?exc=location';
  }

  lista() {
    return this.http.get<Usuario[]>(`${this.UAppUrl}${this.UAPIUrl}`);
  }

  getUsuarios(): Observable<Usuario[]> {
    console.log(`Servicio de Usuario-> ${this.UAppUrl}${this.UAPIUrl}`);
    return this.http.get<Usuario[]>(`${this.UAppUrl}${this.UAPIUrl}`);
  }

  // eliminar(id:number){
  //   return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  // }

}
