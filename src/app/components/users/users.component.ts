import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: users[];
  displayedColumns: string[] = ['id', 'avatar','first_name', 'last_name'];



  constructor(private userService: UserService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response.data;
    })
  }

  details(user:users){
    localStorage.setItem('email',user.email);
    localStorage.setItem('name',user.first_name+' '+user.last_name);
    localStorage.setItem('avatar',user.avatar);
    this.route.navigate(['../userdetails'],{relativeTo:this.activatedRoute})
  }

}
