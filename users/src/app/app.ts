import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { ContextualNavigationBar } from './components/contextual-navigation-bar/contextual-navigation-bar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    ContextualNavigationBar,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'users';
}
