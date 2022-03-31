import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string  = '';
  password:string = '';
  constructor(private auth: AuthenticationService, private router: Router) {
    if(this.auth.loggedIn){
      this.router.navigate(['second']);
    }
   }
   login(){
     if(this.username != '' && this.password != ''){
       if(this.auth.login(this.username, this.password)){
         this.router.navigate(['second']);
       } else {  alert("Wrong credentials");   }
     } else {  alert("Please enter username or password");
     }
   }

  ngOnInit(): void {
  }

}
