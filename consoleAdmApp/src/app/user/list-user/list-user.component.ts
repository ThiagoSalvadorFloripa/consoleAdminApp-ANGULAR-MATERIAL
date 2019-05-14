import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { User } from '../register-user/user.model';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  searchUser: FormGroup

  constructor(private router: Router, private fb: FormBuilder) { }

  users: User[] = <User[]>{};
  displayedColumns: string[] = ['id', 'name', 'email', 'gold']
  dataSourceUsers = new MatTableDataSource<User>(this.users);


  ngOnInit() {
    this.searchUser = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });

    this.dataSourceUsers = new MatTableDataSource<User>(this.users);
  }

  novo(){
    this.router.navigate(['menu/user/register'])
  }

  getUsers(){

  }

}
