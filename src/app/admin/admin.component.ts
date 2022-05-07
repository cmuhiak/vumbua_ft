import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared-services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


users: any = [];

  constructor(private http:HttpClient, private admin:AdminService) { 

  this.admin.getUser().subscribe((data:any) =>{
      console.warn(data)
      this.users=data
    })

  }

  ngOnInit(): void {
  }

}
