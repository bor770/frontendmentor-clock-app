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

export const getHours = (state: State) => state.dateTime.getHours();
export const getTime = (state: State) => {
  const pad = (number: number): string => String(number).padStart(2, `0`);
  const time = state.dateTime;

  return `${pad(time.getHours())}:${pad(time.getMinutes())}`;
};
