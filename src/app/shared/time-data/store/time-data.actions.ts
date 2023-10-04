import { createAction, props } from '@ngrx/store';

import { TimeData } from '../time-data.model';

export const set = createAction(`[Time Data] Set`, props<{ data: TimeData }>());
