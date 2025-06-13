import { inject, Injectable } from '@angular/core';
import { UserItem } from '../model/user.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);

  constructor() { }

  getUsers(){
    const url = `https://jsonplaceholder.typicode.com/users`
    return this.http.get<Array<UserItem>>(url);
  }

  deleteUser(user: UserItem){
  }
}
