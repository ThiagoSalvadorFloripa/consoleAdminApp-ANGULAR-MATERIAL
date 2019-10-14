import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Raffle } from '../register-raffle/raffle.model';
import { RaffleService } from '../register-raffle/raffle.service';


@Component({
  selector: 'app-list-raffle',
  templateUrl: './list-raffle.component.html',
  styleUrls: ['./list-raffle.component.css']
})
export class ListRaffleComponent implements OnInit {

  searchRaffle: FormGroup
  constructor(private router: Router, private rafleService: RaffleService, private fb: FormBuilder) { }

  raffles: Raffle[];
  displayedColumns: string[] = ['id', 'amount', 'number', 'current']
  dataSourceRaffle = new MatTableDataSource<Raffle>(this.raffles);

  ngOnInit() {
    this.getFindListRaffle();
    this.searchRaffle = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
  })
}
  newRaffle(){
    this.router.navigate(['menu/raffle/register'])
  }

  getFindListRaffle(){
    this.rafleService.findListRaffle()
      .subscribe(data =>{
       this.raffles = data
       this.dataSourceRaffle =  new MatTableDataSource(this.raffles);
    },
    erro => {
      console.log(erro);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourceRaffle.filter = filterValue.trim().toLowerCase();
  }

  










}
