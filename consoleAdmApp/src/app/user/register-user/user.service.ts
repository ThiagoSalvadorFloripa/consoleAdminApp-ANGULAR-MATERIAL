import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Played } from 'src/app/played/list-played/played.model';
import { Raffle } from 'src/app/raffle/register-raffle/raffle.model';

@Injectable()
export class UserService {
  constructor() { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  user: User


  getNewUser(): User{
    let raffle = new Raffle("","","",false,null)
    let plead = new Played("","","",null,raffle)
    this.user = new User ("","","","","",null,"","",plead)
    return this.user
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
