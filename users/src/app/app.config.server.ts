import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

// Prevent XMLHttpRequest error by mocking translation loader on server
export class NoopTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of({});
  }
}

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),

    importProvidersFrom(
      HttpClientModule,
      TranslateModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useClass: NoopTranslateLoader
        }
      })
    )
  ]
};