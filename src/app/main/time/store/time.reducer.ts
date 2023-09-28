import { createReducer, on } from '@ngrx/store';

import { Location } from '../location.model';
import * as TimeActions from './time.actions';

export interface State {
  location: Location;
}

const initialState: State = { location: null };

export const reducer = createReducer(
  initialState,
  on(
    TimeActions.setLocation,
    (state, action): State => ({ ...state, location: action.location })
  )
);
