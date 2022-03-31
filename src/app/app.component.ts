import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy-routing-app';
  loginStatus = false;
  user: any = {};

  afterSubmit(){
    alert(JSON.stringify(this.user));
  } 
  ngOnInit(): void {
   
  }

  
}
