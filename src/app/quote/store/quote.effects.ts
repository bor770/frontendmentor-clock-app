import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { Quote } from '../quote.model';
import * as QuoteActions from './quote.actions';

@Injectable()
export class QuoteEffects {
  apiURL = `https://api.quotable.io/random`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit, QuoteActions.fetch),
      switchMap(() =>
        this.http.get<Quote>(this.apiURL).pipe(
          map((quote: Quote) => QuoteActions.set({ quote })),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
