import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast-service';
import { UsersStore } from '../../store/user-store';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, ContextualNavigationBar, NgIf, RouterModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService,
    private store: UsersStore) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9\-+()\s]*$/)]],
      role: ['User', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      
      const newUser = {
        ...userData,
        id: Math.floor(Math.random() * 1000) + 10 // Random integer id
      };

      // Just a simulation here
      this.toast.showLoading('Saving user...');
      this.store.addUser(newUser);

      setTimeout(() => {
        this.toast.showSuccess('User successfully saved!');
        this.router.navigate(['/user']);
      }, 1500);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
