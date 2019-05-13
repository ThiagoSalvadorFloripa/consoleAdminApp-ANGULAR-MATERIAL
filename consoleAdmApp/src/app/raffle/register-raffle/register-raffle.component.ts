import { Raffle } from './raffle.model';
import { RaffleService } from './raffle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-raffle',
  templateUrl: './register-raffle.component.html',
  styleUrls: ['./register-raffle.component.css']
})
export class RegisterRaffleComponent implements OnInit {

  raffle: Raffle
  constructor(private raffleService:RaffleService) { }

  ngOnInit() {
    this.raffle = this.raffleService.getNewRaffle()

  }



  salve(){

  }

  clear(){

  }

  return(){

  }
  onclick(){

  }

}
