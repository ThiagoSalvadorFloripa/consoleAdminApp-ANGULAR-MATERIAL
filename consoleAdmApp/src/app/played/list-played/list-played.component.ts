import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Played } from './played.model';
import { PlayedService } from './played.service';

@Component({
  selector: 'app-list-played',
  templateUrl: './list-played.component.html',
  styleUrls: ['./list-played.component.css']
})
export class ListPlayedComponent implements OnInit {

  searchPlayed: FormGroup
  constructor(private playedService: PlayedService, private fb: FormBuilder) { }

  playeds: Played[];
  displayedColumns: string[] = ['id', 'number', 'time', 'user_name','user_id', 'raffle']
  dataSourcePlayed = new MatTableDataSource(this.playeds);

  ngOnInit() {
    this.findListPlayed();
    this.searchPlayed = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

  findListPlayed(){
    this.playedService.findListPlayed()
      .subscribe(data =>{
       this.playeds = data
       this.dataSourcePlayed =  new MatTableDataSource(this.playeds);
    },
    erro => {
      console.log(erro);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourcePlayed.filter = filterValue.trim().toLowerCase();
  }



}
