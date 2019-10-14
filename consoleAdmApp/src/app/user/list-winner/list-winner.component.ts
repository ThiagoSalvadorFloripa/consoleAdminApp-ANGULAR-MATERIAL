import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserWinner } from './user-winner.model';
import { PlayedService } from '../../played/list-played/played.service';
 

@Component({
  selector: 'app-list-winner',
  templateUrl: './list-winner.component.html',
  styleUrls: ['./list-winner.component.css']
})
export class ListWinnerComponent implements OnInit {

  searchWinner: FormGroup

  constructor(private playedService: PlayedService, private fb: FormBuilder) { }

  userWinners: UserWinner[];
  displayedColumns: string[] = ['id', 'name', 'numberPlayed', 'numberRaffle', 'current', 'time','amount']
  dataSourceUserWinner = new MatTableDataSource(this.userWinners);

  ngOnInit() {
    this.getWinners();
    this.searchWinner = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

  getWinners(){
    this.playedService.getUsersWinners()
      .subscribe(data =>{
       this.userWinners = data
       this.dataSourceUserWinner =  new MatTableDataSource(this.userWinners);
    },
    erro => {
      console.log(erro);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourceUserWinner.filter = filterValue.trim().toLowerCase();
  }

}
