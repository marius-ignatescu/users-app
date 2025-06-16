import { Component } from '@angular/core';
import { UserListComponent } from "../components/user-list-component/user-list-component";

@Component({
  selector: 'app-user',
  imports: [UserListComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User {

}