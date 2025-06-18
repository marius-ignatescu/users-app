import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { UsersService } from '../../../services/users-service';
import { ContextualNavigationBar } from "../../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';
import { CdkTable, CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-user-details',
  imports: [CdkTable, CdkTableModule, NgIf, ContextualNavigationBar, RouterModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements OnInit{
  userId!: number;
  user: any;
  error = '';
  loading = true;
  userDetailsArray: { key: string; value: any }[] = [];
  displayedColumns = ['key', 'value'];

  constructor(private route: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    
    this.userService.getUserByID(this.userId).subscribe({
      next: (user) => {
        this.user = user;

        if (this.user) {
          this.userDetailsArray = [
            { key: 'Username', value: this.user.name },
            { key: 'Email', value: this.user.email },
            { key: 'Phone', value: this.user.phone || '—' },
            { key: 'Website', value: this.user.website },
            { key: 'Company', value: this.user.company?.name || '—' },
            { key: 'Street', value: this.user.address?.street || '—' },
            { key: 'City', value: this.user.address?.city || '—' },
            { key: 'Zip code', value: this.user.address?.zipcode || '—' }
          ];
        }

        this.loading = false;
      },
      error: (err) => {
        if (err.status === 404) {
          this.error = 'User not found.';
        } else {
          this.error = 'Unable to display the user details!';
        }

        this.loading = false;
      }
    });
  }
}
