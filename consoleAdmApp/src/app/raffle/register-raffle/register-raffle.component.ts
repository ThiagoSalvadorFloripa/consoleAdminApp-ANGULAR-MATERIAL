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
  constructor(private raffleService: RaffleService) { }

  ngOnInit() {
    this.raffle = this.raffleService.getNewRaffle()

  }

  save(){
    this.raffleService.registerRaffle(this.raffle).subscribe(id => {
      console.log(this.raffle)
      console.log(id)
      alert ("Saved successfully")
    },
    error =>
    console.log(error)
    )
    this.raffleService.getNewRaffle();
  }

  clear(){

  }

  return(){

  }
  onclick(){
    this.raffle.current = 1;
  }

}
