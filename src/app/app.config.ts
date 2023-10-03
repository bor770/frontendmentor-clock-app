import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LayoutEffects } from './shared/layout/store/layout.effects';
import { TimeDataEffects } from './shared/time-data/store/time-data.effects';
import { TimeEffects } from './main/time/store/time.effects';
import { rootReducer } from './store/root.reducer';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(LayoutEffects, TimeDataEffects, TimeEffects),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
