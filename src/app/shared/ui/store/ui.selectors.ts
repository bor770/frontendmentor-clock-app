import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui.reducer';

const selectState = createFeatureSelector<fromUi.State>(`ui`);

export const selectExpanded = createSelector(
  selectState,
  (state) => state.expanded
);
