import { createFeatureSelector } from '@ngrx/store';

import * as fromJoke from './joke.reducer';

export const selectState = createFeatureSelector<fromJoke.State>(`joke`);
