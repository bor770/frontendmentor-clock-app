import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { JokeEffects } from './joke/store/joke.effects';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import { TimeDataEffects } from './shared/time-data/store/time-data.effects';
import { TimeEffects } from './main/time/store/time.effects';
import { rootReducer } from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(JokeEffects, LayoutEffects, TimeDataEffects, TimeEffects),
    provideHttpClient(),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
