import { createAction, props } from '@ngrx/store';

export const fetch = createAction(`[Joke] Fetch`);

export const set = createAction(`[Joke] Set`, props<{ joke: string }>());
