import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Raffle } from '../register-raffle/raffle.model';


@Component({
  selector: 'app-list-raffle',
  templateUrl: './list-raffle.component.html',
  styleUrls: ['./list-raffle.component.css']
})
export class ListRaffleComponent implements OnInit {

  searchRaffle: FormGroup
  constructor(private router: Router, private fb: FormBuilder) { }

  raffles: Raffle[] = <Raffle[]>{};
  displayedColumns: string[] = ['id', 'amount', 'number', 'current', 'played']
  dataSourceRaffle = new MatTableDataSource<Raffle>(this.raffles);

  ngOnInit() {
    this.searchRaffle = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
  })
}
  newRaffle(){
    this.router.navigate(['menu/raffle/register'])
  }
}
