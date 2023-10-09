import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { WorldtimeapiResonse } from '../time-data.model';
import * as TimeDataActions from './time-data.actions';

@Injectable()
export class TimeDataEffects {
  apiURL = `https://worldtimeapi.org/api/ip`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      switchMap(() =>
        this.http.get<WorldtimeapiResonse>(this.apiURL).pipe(
          map((data: WorldtimeapiResonse) =>
            TimeDataActions.set({
              data: {
                abbreviation: data.abbreviation,
                dateTime: new Date(data.datetime),
                dayOfWeek: data.day_of_week,
                dayOfYear: data.day_of_year,
                timezone: data.timezone,
                weekNumber: data.week_number,
              },
            })
          ),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
