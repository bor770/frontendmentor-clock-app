import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appReducer } from './store/root.reducer';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(LayoutEffects),
    provideRouter(routes),
    provideStore(appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
