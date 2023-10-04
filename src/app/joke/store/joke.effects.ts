import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { JokeapiResponse } from '../joke.model';
import * as JokeActions from './joke.actions';

@Injectable()
export class JokeEffects {
  apiURL = `https://v2.jokeapi.dev/joke/Programming?type=single`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit, JokeActions.fetch),
      switchMap(() =>
        this.http.get<JokeapiResponse>(this.apiURL).pipe(
          map((response: JokeapiResponse) =>
            JokeActions.set({ joke: response.joke })
          ),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
