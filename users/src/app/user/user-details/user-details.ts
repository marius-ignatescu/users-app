import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { UsersService } from '../../services/users-service';

@Component({
  selector: 'app-user-details',
  imports: [NgIf],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements OnInit{
  userId!: number;
  user: any;
  error = '';
  loading = true;

  constructor(private route: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    
    this.userService.getUserByID(this.userId).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to display the user details!';
        this.loading = false;
      }
    });
  }
}
