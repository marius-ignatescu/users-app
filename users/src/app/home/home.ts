import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ContextualNavigationBar } from "../components/contextual-navigation-bar/contextual-navigation-bar";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, ContextualNavigationBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = signal('Home');
}
