import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // user_link: string = "http://localhost:8000/"

  constructor(private http:HttpClient) { }

  // getUser(){
  
  //   return this.http.get(this.user_link + 'users/all_users');
  
  // }

}
