import { createReducer, on } from '@ngrx/store';

import { TimeData, TimeOfDay } from '../time-data.model';
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

export const getTimeOfDay = (state: State): TimeOfDay => {
  const hours = state?.dateTime.getHours();

  switch (true) {
    case 5 <= hours && hours < 12:
      return `morning`;
    case 12 <= hours && hours < 18:
      return `afternoon`;
    case hours < 5 || 18 <= hours:
      return `evening`;
  }
};
export const getTime = (state: State) => {
  const pad = (number: number): string => String(number).padStart(2, `0`);
  const time = state?.dateTime;

  if (time) {
    return `${pad(time.getHours())}:${pad(time.getMinutes())}`;
  }
};
