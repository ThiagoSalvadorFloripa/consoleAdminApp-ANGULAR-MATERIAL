import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserWinner } from './user-winner.model';

@Component({
  selector: 'app-list-winner',
  templateUrl: './list-winner.component.html',
  styleUrls: ['./list-winner.component.css']
})
export class ListWinnerComponent implements OnInit {

  searchWinner: FormGroup

  constructor(private fb: FormBuilder) { }

  userWinners: UserWinner[] = <UserWinner[]>{};
  displayedColumns: string[] = ['id', 'name', 'numberPlayed', 'numberRaffle', 'current', 'timer','amount']
  dataSourceUserWinner = new MatTableDataSource<UserWinner>(this.userWinners);

  ngOnInit() {
    this.searchWinner = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

}
