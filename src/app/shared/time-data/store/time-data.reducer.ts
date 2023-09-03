import { createReducer, on } from '@ngrx/store';

import { TimeData } from '../time-data.model';
import * as TimeDataActions from './time-data.actions';

export type State = TimeData;

const initialState: State = null;

export const timeDataReducer = createReducer(
  initialState,
  on(
    TimeDataActions.setData,
    (state, { data }): State => ({ ...state, ...data })
  )
);
