import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromTime from '../time/store/time.reducer';

interface State {
  layout: fromLayout.State;
  time: fromTime.State;
}

export const appReducer: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
  time: fromTime.timeReducer,
};

const selectLayoutState = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayoutState,
  fromLayout.getWidth
);
