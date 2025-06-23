import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const providers = [
  provideHttpClient(),
  ...appConfig.providers,
  importProvidersFrom(
    HttpClientModule,
    TranslateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }
    )
  )
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers
});
