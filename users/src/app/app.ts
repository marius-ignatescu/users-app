import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { ToastComponent } from "./shared/toast/toast";
import { UsersStore } from './store/user-store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingsService } from './services/settings-service';

@Component({
  selector: 'app-root',
  providers: [UsersStore],
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    Header,
    Sidebar,
    ToastComponent,
    TranslateModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent implements OnInit {
  protected title = 'users';

  private translate = inject(TranslateService);
  private settings = inject(SettingsService);

  currentLang = this.settings.current.language;
  supportedLangs = ['en', 'ro'];

  changeLanguage(lang: string) {
    this.settings.updateSettings({ language: lang });
    this.currentLang = lang;
  }

  ngOnInit(): void {
    //const lang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
