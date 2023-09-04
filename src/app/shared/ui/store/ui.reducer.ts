import { createReducer, on } from '@ngrx/store';

import * as UIActions from './ui.actions';

export interface State {
  expanded: boolean;
}

const initialState: State = { expanded: null };

export const uiReducer = createReducer(
  initialState,
  on(
    UIActions.toggleExpanded,
    (state): State => ({ ...state, expanded: !state.expanded })
  )
);

export const getExpanded = (state: State) => state.expanded;
