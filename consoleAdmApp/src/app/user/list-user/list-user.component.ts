import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  searchUser: FormGroup

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchUser = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

  novo(){
    this.router.navigate(['menu/user/register'])
  }

}
