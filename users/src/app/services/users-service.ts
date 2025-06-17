import { inject, Injectable } from '@angular/core';
import { UserItem } from '../model/user.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);
  private url = `https://jsonplaceholder.typicode.com/users`

  constructor() { }

  getUsers(){
    return this.http.get<Array<UserItem>>(this.url);
  }

  getUserByID(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  deleteUser(user: UserItem){
  }
}
