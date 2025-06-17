import { Component } from '@angular/core';
import { UserListComponent } from "../components/user-list-component/user-list-component";
import { ContextualNavigationBar } from "../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [UserListComponent, ContextualNavigationBar, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User {

}