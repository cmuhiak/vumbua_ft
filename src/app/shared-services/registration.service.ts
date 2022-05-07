import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  user_link: string = "http://localhost:8000/"

  constructor(public http:HttpClient) { }

  // getUser(){
  
  //   return this.http.get(this.user_link + 'users/all_users');
  
  // }

  saveUserData(data:any) {
    console.log(data);
   return this.http.post( this.user_link +'users/add_user', data);
  }

}

