import { createReducer, on } from '@ngrx/store';

import * as JokeActions from './joke.actions';

export type State = string;

const initialState: State = null;

export const reducer = createReducer(
  initialState,
  on(JokeActions.set, (state, action): State => action.joke)
);
