import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string){
    if(username == "admin" && password == "abc12345"){
      localStorage.setItem("loginUser", "loggedIn" );
      return true;
    }
    return;
  }

  get loggedIn(): boolean {
    return (localStorage.getItem('loginUser') !== null);
  }

  logout(){
    localStorage.removeItem('loginUser');
    
  }
}
