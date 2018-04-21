import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleRegister(){
      let {username, password} = this;
      this
      .userService
      .registerUser({username,password})
      .subscribe((res)=>{
        this.userService.storeToken(res.token);
        this.router.navigate(['/']);
      },
    (err)=>{
      debugger;
    });
  }

}
