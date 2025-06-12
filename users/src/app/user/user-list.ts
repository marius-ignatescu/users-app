import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../services/users-service';
import { UserItem } from '../model/user.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User implements OnInit {
  usersService = inject(UsersService);
  userItems = signal<Array<UserItem>>([]);

  ngOnInit(): void {
    this.usersService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((results) => {
      this.userItems.set(results);
    });
  }
}
