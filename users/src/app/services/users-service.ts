import { inject, Injectable } from '@angular/core';
import { UserItem } from '../model/user.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() { }

  getUsers(){
    return this.http.get<Array<UserItem>>(`${this.apiUrl}/users`);
  }

  getUserByID(id: number){
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  deleteUser(id: UserItem){
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
