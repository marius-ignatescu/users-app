import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastService } from '../../services/toast-service';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, NgIf, ContextualNavigationBar, RouterModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})

export class Settings implements OnInit {
  settingsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private toast: ToastService) {}

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      notifications: [true]
    });
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      this.toast.showLoading('Saving settings...');

      setTimeout(() => {
        console.log('Settings saved:', this.settingsForm.value);
        this.toast.showSuccess('Settings successfully saved!');
      }, 2000);
    } else {
      this.settingsForm.markAllAsTouched();
    }
  }
}