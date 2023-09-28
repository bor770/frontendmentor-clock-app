import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTime from './time.reducer';

const selectState = createFeatureSelector<fromTime.State>(`time`);

export const selectLocation = createSelector(
  selectState,
  (state) => `${state.location.city}, ${state.location.country}`
);
