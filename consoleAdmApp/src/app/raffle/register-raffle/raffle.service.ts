import { Raffle } from 'src/app/raffle/register-raffle/raffle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "../../config/api.config";
import { Observable } from 'rxjs';
@Injectable()
export class RaffleService {

  constructor(public http: HttpClient) { }  

  raffle:Raffle

  findListRaffle(): Observable< Raffle[]>{
    return this.http.get<Raffle[]>(`${API_CONFIG.baseUrl}/raffle`);
  }

  // getNewRaffle(): Raffle{
  //   // let played = new Played ("","","","","","")
  //   // this.raffle = new Raffle("","","",false,played)
  //   // return this.raffle
  // }

  /*getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }*/
}
