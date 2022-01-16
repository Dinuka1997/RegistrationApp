import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
 
  service:RegistrationService;
  router:Router;
  msg:string;

  constructor(service:RegistrationService,route:Router) {
    this.service = service;
    this.router = route;
  }

  ngOnInit() {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate([""]);
      },
      error =>{
         console.log("exception occured");
         this.msg = "Please fill the all fields"
      }
    )
  }

  goToLogin(){
    this.router.navigate(["http://localhost:4200/"]);
  }

}
