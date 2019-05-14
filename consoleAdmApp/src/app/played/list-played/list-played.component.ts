import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Played } from './played.model';

@Component({
  selector: 'app-list-played',
  templateUrl: './list-played.component.html',
  styleUrls: ['./list-played.component.css']
})
export class ListPlayedComponent implements OnInit {

  searchPlayed: FormGroup
  constructor(private fb: FormBuilder) { }

  playeds: Played[] = <Played[]>{};
  displayedColumns: string[] = ['id', 'number', 'timer', 'user', 'raffle']
  dataSourcePlayed = new MatTableDataSource<Played>(this.playeds);

  ngOnInit() {
    this.searchPlayed = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

}
