import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { UsersStore } from '../../store/user-store';
import { UsersService } from '../../services/users-service';
import { catchError } from 'rxjs';
import { DashboardCard } from '../../components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-home',
  imports: [ContextualNavigationBar, CommonModule, DashboardCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit{
  usersStore = inject(UsersStore);
  usersService = inject(UsersService);

  ngOnInit(): void {
    this.loadUsers();
  }

  totalUsers$ = this.usersStore.totalUsers$;
  totalCompanies$ = this.usersStore.totalCompanies$;
  usersPerCompany$ = this.usersStore.usersPerCompany$;

  companyKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }

  loadUsers(){
    if (!this.usersStore.isLoaded()) {
      this.usersService.getUsers().pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      ).subscribe((results) => {
        this.usersStore.loadUsers(results);
      });
    }
  }
}
