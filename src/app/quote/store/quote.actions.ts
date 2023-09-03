import { createAction, props } from '@ngrx/store';

import { Quote } from '../quote.model';

export const fetch = createAction(`[Quote] Fetch`);
export const set = createAction(`[Quote] Set`, props<{ quote: Quote }>());
