import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTimeData from './time-data.reducer';

export const selectState =
  createFeatureSelector<fromTimeData.State>(`timeData`);

export const selectTime = createSelector(selectState, (state) => {
  const pad = (number: number): string => String(number).padStart(2, `0`);
  const time = state?.dateTime;

  if (time) {
    return `${pad(time.getHours())}:${pad(time.getMinutes())}`;
  }
});

export const selectTimeOfDay = createSelector(selectState, (state) => {
  const hours = state?.dateTime.getHours();

  switch (true) {
    case 5 <= hours && hours < 12:
      return `morning`;
    case 12 <= hours && hours < 18:
      return `afternoon`;
    case hours < 5 || 18 <= hours:
      return `evening`;
  }
});
