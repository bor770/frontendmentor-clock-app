import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DayOrNight, TimeOfDay } from '../time-data.model';
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

export const selectTimeOfDay = createSelector(
  selectState,
  (state): TimeOfDay => {
    const hours = state?.dateTime.getHours();

    switch (true) {
      case 5 <= hours && hours < 12:
        return `morning`;
      case 12 <= hours && hours < 18:
        return `afternoon`;
      case hours < 5 || 18 <= hours:
        return `evening`;
    }
  }
);

export const selectDayOrNight = createSelector(
  selectTimeOfDay,
  (timeOfDay): DayOrNight =>
    timeOfDay === `morning` || timeOfDay === `afternoon` ? `day` : `night`
);
