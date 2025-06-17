import { Component } from '@angular/core';
import { UserListComponent } from "../components/user-list-component/user-list-component";
import { ContextualNavigationBar } from "../components/contextual-navigation-bar/contextual-navigation-bar";

@Component({
  selector: 'app-user',
  imports: [UserListComponent, ContextualNavigationBar],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User {

}