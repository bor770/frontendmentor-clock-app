import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { WorldtimeapiResonse } from '../time-data.model';
import * as TimeDataActions from './time-data.actions';

@Injectable()
export class TimeDataEffects {
  apiURL = `http://worldtimeapi.org/api/ip`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      switchMap(() =>
        this.http.get<WorldtimeapiResonse>(this.apiURL).pipe(
          map((data: WorldtimeapiResonse) => {
            const pad = (number: number): string =>
              String(number).padStart(2, `0`);

            const time = new Date(data.datetime);

            return TimeDataActions.setData({
              data: {
                abbreviation: data.abbreviation,
                dayOfWeek: data.day_of_week,
                dayOfYear: data.day_of_year,
                time: `${pad(time.getHours())}:${pad(time.getMinutes())}`,
                timezone: data.timezone,
                weekNumber: data.week_number,
              },
            });
          }),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
