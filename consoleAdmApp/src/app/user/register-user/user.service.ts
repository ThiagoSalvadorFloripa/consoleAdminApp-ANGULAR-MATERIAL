import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "../../config/api.config";
import { UserDto } from '../list-user/userDTO.model';
import { Observable } from 'rxjs';
import { User } from './user.model'

@Injectable()
export class UserService {

  user : User;

  constructor(public http: HttpClient) { }
  
  findListUser(): Observable< UserDto[]>{
    return this.http.get<UserDto[]>(`${API_CONFIG.baseUrl}/user/listUsers`);
  }
  
  getNewUser(): User{
    this.user = new User("","","","","",null,"","")
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
