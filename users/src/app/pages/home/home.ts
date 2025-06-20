import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { UsersStore } from '../../store/user-store';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, ContextualNavigationBar, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  usersStore = inject(UsersStore);

  totalUsers$ = this.usersStore.totalUsers$;
  totalCompanies$ = this.usersStore.totalCompanies$;
  usersPerCompany$ = this.usersStore.usersPerCompany$;

  companyKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }
}
