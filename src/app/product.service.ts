import { Injectable } from '@angular/core';
import { Product } from './Product';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   baseURI = "http://localhost:4000/products";

   httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) { }

  create(data: Product):Observable<any>{
    return this.http.post(`${this.baseURI}`, data).pipe(
      catchError(this.errorHandler)
    );
  }

  getAll(){
    return this.http.get(`${this.baseURI}`);
  }

  getProduct(id: any):Observable<any>{
    return this.http.get(`${this.baseURI}/${id}`);
  }


  updateProduct(id: any, data: any):Observable<any>{
    return this.http.put(`${this.baseURI}/${id}`, data).pipe(
      catchError(this.errorHandler)
    )
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.baseURI}/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError("Error");
  }
}
