import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
  encapsulation: ViewEncapsulation.None
})
export class DashboardCard {
  @Input() routerLink?: string;
}
