import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';

interface State {
  layout: fromLayout.State;
}

export const appReducer: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
};

const selectLayoutState = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayoutState,
  fromLayout.getWidth
);
