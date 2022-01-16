import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  httpClient:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public loginUserFromRemote(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8090/login",user)
  }
  
  public registerUserFromRemote(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8090/registerUser",user)
  }

}
