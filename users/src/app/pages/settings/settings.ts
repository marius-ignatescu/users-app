import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast-service';
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';
import { SettingsService } from '../../services/settings-service';
import { AppSettings } from '../../model/appsettings';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, ContextualNavigationBar, RouterModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})

export class Settings implements OnInit {
  settingsForm!: FormGroup;
  form!: AppSettings;

  constructor(private formBuilder: FormBuilder,
    private toast: ToastService,
    private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.form = { ...this.settingsService.current };

    this.settingsForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      notifications: [true]
    });
  }

  savePreferences() {
    this.toast.showLoading('Saving settings...');
    this.settingsService.updateSettings(this.form);
    
    setTimeout(() => {
      this.toast.showSuccess('Settings successfully saved!');
    }, 2000);
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