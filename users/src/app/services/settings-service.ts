import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../model/appsettings';

const SETTINGS_KEY = 'app-settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // Default values
  private defaultSettings: AppSettings = {
    language: 'en',
    dateFormat: 'YYYY/MM/DD'
  };

  private settingsSubject = new BehaviorSubject<AppSettings>(
    this.loadFromStorage()
  );

  settings$ = this.settingsSubject.asObservable();

  get current(): AppSettings {
    return this.settingsSubject.value;
  }

  updateSettings(newSettings: Partial<AppSettings>): void {
    const updated = { ...this.current, ...newSettings };
    this.settingsSubject.next(updated);
    this.saveToStorage(updated);
  }

  private loadFromStorage(): AppSettings {
    const stored = localStorage.getItem(SETTINGS_KEY);
    return stored ? JSON.parse(stored) : this.defaultSettings;
  }

  private saveToStorage(settings: AppSettings): void {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }
}
