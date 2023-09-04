import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LayoutEffects } from './shared/layout/store/layout.effects';
import { QuoteEffects } from './quote/store/quote.effects';
import { TimeDataEffects } from './shared/time-data/store/time-data.effects';
import { TimeEffects } from './main/time/store/time.effects';
import { appReducer } from './store/root.reducer';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(LayoutEffects, QuoteEffects, TimeDataEffects, TimeEffects),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
