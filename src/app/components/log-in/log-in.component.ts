import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
 
public logInForm!: FormGroup
  constructor (public fb: FormBuilder, private http:HttpClient,
     private router: Router){}

 ngOnInit(): void{
  this.logInForm = this.fb.group({
    role: [''],
    pin: [''],
    password: [''],
  
  })
}
  

  loginUser() {
    //console.warn(this.logInForm.value);
    this.http.get<any>("http://localhost:8000/users/all_users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return 
        a.role === this.logInForm.value.role &&
        a.username === this.logInForm.value.username &&
        a.password === this.logInForm.value.password
      });
      if (user){
        alert ("Login Successful!!");
        this.logInForm.reset();
        this.router.navigate(['admin'])
      } else{
        alert("user not found!!");
      }
    },err=>{
      alert ("username/password incorrect!!")
    }


    )};


  
}
