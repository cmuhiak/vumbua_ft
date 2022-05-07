import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../shared-services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: any;
  users: any;

  constructor(private fb: FormBuilder, private registration:RegistrationService) { 

    // this.user.getUser().subscribe((data:any) =>{
    //   console.warn(data)
    //   this.users=data
    // })

  }

  registrationForm= this.fb.group({
    role: [''],
    name: [''],
    phone: [''],
    email: [''],
    id: [''],
    pin: [''],
    dob: [''],
    gender: [''],
    occupation: [''],
    password: [''],
    confirmPassword: ['']
  })
  
  registerUser() {
    // console.warn(this.registrationForm.value);
    this.registration.saveUserData(this.registrationForm.value).subscribe((result:any)=>{
      console.log(result);
    });
  }
  

  

  ngOnInit(): void {
  }

}
