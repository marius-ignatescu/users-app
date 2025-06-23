import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../model/appsettings';
import { TranslateService } from '@ngx-translate/core';

const SETTINGS_KEY = 'app-settings';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private defaultSettings: AppSettings = {
    language: 'en',
    dateFormat: 'YYYY/MM/DD'
  };

  private settingsSubject = new BehaviorSubject<AppSettings>(
    this.loadFromStorage()
  );

  settings$ = this.settingsSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Automatically apply language on service init
    this.translate.setDefaultLang(this.current.language);
    this.translate.use(this.current.language);
  }

  get current(): AppSettings {
    return this.settingsSubject.value;
  }

  updateSettings(newSettings: Partial<AppSettings>): void {
    const updated = { ...this.current, ...newSettings };
    this.settingsSubject.next(updated);
    this.saveToStorage(updated);

    if (newSettings.language) {
      this.translate.use(newSettings.language);
    }
  }

  private loadFromStorage(): AppSettings {
    if (typeof window === 'undefined') {
      // SSR-safe fallback
      return this.defaultSettings;
    }

    const stored = localStorage.getItem(SETTINGS_KEY);
    return stored ? JSON.parse(stored) : this.defaultSettings;
  }

  private saveToStorage(settings: AppSettings): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }
  }
}