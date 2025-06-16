import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-contextual-navigation-bar',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './contextual-navigation-bar.html',
  styleUrl: './contextual-navigation-bar.css'
})

export class ContextualNavigationBar {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  getPageTitle(route: string): string {
    switch (route) {
      case '/user':
        return 'User Management';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  }
}