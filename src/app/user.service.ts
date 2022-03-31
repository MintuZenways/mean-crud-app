import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 users: any = [];
 baseUrl = './assets';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.baseUrl}/user_data.json`).pipe(
      map((res) =>{
        this.users = res;
        return this.users;
      }),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError("Error");
  }
  
}
