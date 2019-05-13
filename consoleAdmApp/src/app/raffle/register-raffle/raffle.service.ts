import { Raffle } from 'src/app/raffle/register-raffle/raffle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Played } from 'src/app/played/list-played/played.model';

@Injectable()
export class RaffleService {
  constructor() { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  raffle:Raffle

  getNewRaffle(): Raffle{
    let plead = new Played ("","","",null,null)
    this.raffle = new Raffle("","","",false,plead)
    return this.raffle
  }

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
