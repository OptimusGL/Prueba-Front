import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private AppUrl: string;
  private APIUrl: string;

  constructor(private http: HttpClient) {
    this.AppUrl = environment.endpoint;
    this.APIUrl = 'api/product';
  }

  getProducts(): Observable<Product[]> {
    console.log(`${this.AppUrl}${this.APIUrl}/read`);
    return this.http.get<Product[]>(`${this.AppUrl}${this.APIUrl}/read`);

    //USAR PARA LA PRIMERA PARTE
    // const token = localStorage.getItem('token')
    // const headers = new HttpHeaders().set('Authorization', `Bearer  ${token}`);
    // return this.http.get<Product[]>(`${this.AppUrl}${this.APIUrl}/read`, {headers: headers});

    // NETWORK - fetch/xhr - getProduc
  }

  // register(product: Product): Observable<any> {
  //   return this.http.post(`${this.AppUrl}${this.APIUrl}/create`, product);
  // }

  // update(product: Product): Observable<any> {
  //   return this.http.patch(`${this.AppUrl}${this.APIUrl}/update/${product.id}`, product);
  // }

  // delete(product: Product): Observable<any> {
  //   return this.http.delete(`${this.AppUrl}${this.APIUrl}/delete/${product.id}`);
  // }

}
