import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from './../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin(){
      let {username, password} = this;
      this
      .userService
      .authenticateUser({username,password})
      .subscribe((res)=>{
        this.userService.storeToken(res.token);
        this.router.navigate(['/']);
      },
    (err)=>{
      debugger;
    });
  }
}
