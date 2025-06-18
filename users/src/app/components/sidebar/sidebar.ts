import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  items = [
    {
      routeLink: '',
      icon: 'fal fa-home',
      label: 'Home',
    },
    {
      routeLink: 'user',
      icon: 'fal fa-user',
      label: 'User',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];
}
