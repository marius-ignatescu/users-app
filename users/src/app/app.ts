import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { ToastComponent } from "./shared/toast/toast";
import { UsersStore } from './store/user-store';

@Component({
  selector: 'app-root',
  providers: [UsersStore],
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    Header,
    Sidebar,
    ToastComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'users';
}
