import { Component } from '@angular/core';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [ContextualNavigationBar, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
