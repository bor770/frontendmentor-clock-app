import { createReducer, on } from '@ngrx/store';

import * as UiActions from './ui.actions';

export interface State {
  expanded: boolean;
}

const initialState: State = { expanded: null };

export const reducer = createReducer(
  initialState,
  on(
    UiActions.toggleExpanded,
    (state): State => ({ ...state, expanded: !state.expanded })
  )
);
