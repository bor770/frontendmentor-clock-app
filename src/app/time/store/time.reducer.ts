import { createReducer, on } from '@ngrx/store';

import { Location } from '../location.model';
import * as TimeActions from './time.actions';

export interface State {
  location: Location;
}

const initialState: State = { location: null };

export const timeReducer = createReducer(
  initialState,
  on(
    TimeActions.setLocation,
    (state, { location }): State => ({ ...state, location })
  )
);

export const getLocation = (state: State) =>
  `${state.location.city}, ${state.location.country}`;
