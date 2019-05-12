import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getNewUser()
  }


}
