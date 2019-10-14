import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../register-user/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getNewUser();
  }

  salve(){

  }

  clear(){

  }

  return(){
    this.router.navigate(['menu/users'])
  }

}
