import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-contextual-navigation-bar',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './contextual-navigation-bar.html',
  styleUrl: './contextual-navigation-bar.css'
})

export class ContextualNavigationBar {
  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  getPageTitle(route: string): string {
    if (route.startsWith('/user'))
    {
      if (this.activatedRoute.snapshot.queryParams['id']) {
        return 'User details';
      }
      else{
        return 'User Management';
      }
    }

    switch (route) {
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  }
}