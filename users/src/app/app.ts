import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { ContextualNavigationBar } from './components/contextual-navigation-bar/contextual-navigation-bar';
import { ToastComponent } from "./shared/toast/toast";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    ContextualNavigationBar,
    ToastComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'users';
}
