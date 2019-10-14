import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../register-user/user.service';
import { UserDto } from './userDTO.model';
import { User } from '../register-user/user.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  searchUser: FormGroup

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }
  user: User;
  users: UserDto[];
  dataSourceUsers = new MatTableDataSource(this.users);
  
  displayedColumns: string[] = ['id', 'name', 'email', 'gold']

  ngOnInit() {
    this.user = this.userService.getNewUser();
    this.getListUserDTO();
    this.searchUser = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

  novo(){
    this.router.navigate(['menu/user/register'])
  }

  getListUserDTO(){
    this.userService.findListUser()
      .subscribe(data =>{
       this.users = data
       this.dataSourceUsers =  new MatTableDataSource(this.users);
    },
    erro => {
      console.log(erro);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  }

}
