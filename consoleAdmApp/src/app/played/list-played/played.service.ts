import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "../../config/api.config";
import { Observable } from 'rxjs';
import { Played } from './played.model'
import { UserWinner } from '../../user/list-winner/user-winner.model'
@Injectable()
export class PlayedService {
  constructor(private http: HttpClient) { }
  

  findListPlayed(): Observable< Played[]>{
    return this.http.get<Played[]>(`${API_CONFIG.baseUrl}/played/listPlayed`);
  }

  getUsersWinners():Observable< UserWinner[]>{
    return this.http.get<UserWinner[]>(`${API_CONFIG.baseUrl}/played/winner/100000`);

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
