import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  name!:string;
  email!:string;
  avatar!:string;

  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.avatar = localStorage.getItem('avatar');

  }

  navigateBack(){
    this.route.navigate(['../users'],{relativeTo:this.activatedRoute})
  }

}
