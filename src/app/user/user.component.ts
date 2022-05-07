import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../shared-services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  role!:String;
  result!: String;
  roles: any;

  users: any = [];

  constructor( private user:UserService, public fb:FormBuilder, public http:HttpClient) { 

    this.user.getUser().subscribe(data =>{
      console.warn(data)
      this.users=data
    })
  }

  postData() {
    

    let url = "http://localhost:8000/users/add_user_role"

    this.http.post(url, {
      role:this.role
    }).toPromise().then((data: any) => {
      console.log(data)
      // console.log(JSON.stringify(data.json.response))
      // this.result = JSON.stringify(data.json.response)
     
   })
  }


  ngOnInit(): void {
  }

}
