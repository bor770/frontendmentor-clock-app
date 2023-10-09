import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { IpbaseAPIResponse } from '../location.model';
import * as TimeActions from './time.actions';
// import { defaul } from './default';

@Injectable()
export class TimeEffects {
  apiKey = `ipb_live_6zSqGTM9SX4ycJweBN77UFj60nEKUtf1moxSFwXz`;
  apiURL = `https://api.ipbase.com/v2/info`;

  fetchLocation = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      switchMap(() =>
        this.http
          .get<IpbaseAPIResponse>(`${this.apiURL}?apikey=${this.apiKey}`)
          .pipe(
            map((data) =>
              TimeActions.setLocation({
                location: {
                  city: data.data.location.city.name,
                  country: data.data.location.country.name,
                },
              })
            ),
            catchError(() => of())
          )
      )
      // map(() => TimeActions.setLocation({ location: defaul }))
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
