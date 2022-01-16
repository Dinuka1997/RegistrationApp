import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = new User();
 
  service:RegistrationService;
  route:Router;
  msg:string;

  constructor(service:RegistrationService,route:Router) { 
    this.service = service;
    this.route = route;
  }

  ngOnInit() {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.route.navigate(["/loginSuccess"]);
      },
      error =>{
         console.log("exception occured");
         this.msg = "Bad Credentials, please enter valid email and password"
      }
    )
  }

  goToRegistration(){
    this.route.navigate(["/registration"]);
  }

}
